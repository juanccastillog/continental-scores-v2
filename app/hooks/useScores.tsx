import { useState, useMemo } from "react"


interface Player {
    id: number,
    name: string,
}

interface DealScore {
    playerId: number,
    playerName: string,
    points: number,
}

export interface Deal {
    id: number,
    winnerEarning: number,
    winnerPlayerId: number,
    scores: DealScore[],
}

export interface GameScore {
    playerId: number,
    playerName: string,
    score: number,
    earning: number,
}


class DefaultDealFactory {

    #nextDealIndex = 0;
    #defaultDeals: Deal[] = [
        {
            id: 1,
            winnerEarning: 500,
            winnerPlayerId: 0,
            scores: [],
        },
        {
            id: 2,
            winnerEarning: 1000,
            winnerPlayerId: 0,
            scores: [],
        },
        {
            id: 3,
            winnerEarning: 1500,
            winnerPlayerId: 0,
            scores: [],
        },
        {
            id: 4,
            winnerEarning: 2000,
            winnerPlayerId: 0,
            scores: [],
        },
        {
            id: 5,
            winnerEarning: 2500,
            winnerPlayerId: 0,
            scores: [],
        },
        {
            id: 6,
            winnerEarning: 3000,
            winnerPlayerId: 0,
            scores: [],
        },
        {
            id: 7,
            winnerEarning: 3500,
            winnerPlayerId: 0,
            scores: [],
        }
    ];

    getNextDeal() {
        return this.#defaultDeals[this.#nextDealIndex++];
    }
}


class IdGenerator {

    #currentId: number

    constructor() {
        this.#currentId = 0;
    }

    getNextId() {
        this.#currentId++;
        return this.#currentId;
    }
}

const idGeneratorInstance = new IdGenerator();

const getPlayerEarningInDeal = (playerId: number, deal: Deal): number => {
    if (deal.winnerPlayerId === playerId) {
        return deal.winnerEarning * (deal.scores.length - 1);
    }
    return -deal.winnerEarning;
}

const calculateScores = (players: Player[], deals: Deal[]): GameScore[] => {
    return players.map(player => {
        return {
            playerId: player.id,
            playerName: player.name,
            score: deals.reduce((scoreSum, deal) => scoreSum + (deal.scores.find(score => score.playerId === player.id)?.points || 0), 0),
            earning: deals.reduce((earningSum, deal) => earningSum + getPlayerEarningInDeal(player.id, deal), 0),
        }
    })
}

const getPlayerThatHasFewerPointsThanAllOthers = (deal: Deal | undefined) => {
    if (!deal) {
        return null;
    }
    let pointsMin = Number.POSITIVE_INFINITY;
    let minIsUnique = false;
    let minPlayer = null;
    for (let i = 0; i < deal.scores?.length || 0; i++) {
        if (pointsMin === deal.scores[i].points) {
            minIsUnique = false;
        }
        if (deal.scores[i].points < pointsMin) {
            pointsMin = deal.scores[i].points;
            minIsUnique = true;
            minPlayer = deal.scores[i].playerId;
        }
    }
    return minIsUnique ? minPlayer : null;
}

const defaultDealFactory = new DefaultDealFactory();

const useScores = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [deals, setDeals] = useState<Deal[]>([]);


    const addPlayer = (name: string) => {
        const newPlayerId = idGeneratorInstance.getNextId();
        const newPlayers = [...players, {
            id: newPlayerId,
            name,
        }];
        setPlayers(newPlayers);
        const newDeals = deals.map(deal => ({ ...deal, scores: [...deal.scores, { playerId: newPlayerId, playerName: name, points: 0 }] }));
        setDeals(newDeals)
    };

    const addDeal = () => {
        const nextDeal = defaultDealFactory.getNextDeal();
        nextDeal.scores = players.map(player => ({
            playerId: player.id,
            playerName: player.name,
            points: 0,
        }))
        setDeals([...deals, nextDeal]);
        return nextDeal.id;
    }

    const innerChangeWinner = (currentDeals: Deal[], dealId: number, winnerPlayerId: number) => {
        setDeals(currentDeals.map(
            deal => {
                if (deal.id === dealId) {
                    return {
                        ...deal,
                        winnerPlayerId,
                    }
                }
                return deal;
            }
        ))
    }

    const changeWinner = (dealId: number, winnerPlayerId: number) => innerChangeWinner(deals, dealId, winnerPlayerId);

    const changePoints = (dealId: number, playerId: number, points: number) => {
        const newDeals = deals.map(
            deal => {
                if (deal.id === dealId) {
                    return {
                        ...deal,
                        scores: deal.scores.map(score => {
                            if (score.playerId === playerId) {
                                return {
                                    ...score,
                                    points
                                }
                            }
                            return score;
                        })
                    }
                }
                return deal;
            }
        );
        setDeals(newDeals);
        const changedDeal = newDeals.find(deal => deal.id === dealId);
        if (changedDeal?.winnerPlayerId === 0) {
            const possibleWinner = getPlayerThatHasFewerPointsThanAllOthers(changedDeal);
            if (possibleWinner !== null && possibleWinner > 0) {
                innerChangeWinner(newDeals, changedDeal?.id, possibleWinner);
            }
        }
    }

    const changeWinnerEarning = (dealId: number, newEarning: number) => {
        const newDeals: Deal[] = deals.map(deal => {
            if (deal.id === dealId) {
                return {
                    ...deal,
                    winnerEarning: newEarning
                }
            };
            return deal;
        });
        setDeals(newDeals);
    }

    const scores = useMemo(() => calculateScores(players, deals), [players, deals]);


    return { scores, deals, modifiers: { addPlayer, addDeal, changePoints, changeWinner, changeWinnerEarning } };
}

export default useScores;
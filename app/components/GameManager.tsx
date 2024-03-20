import { ScoresTable } from "./ScoresTable";
import AddPlayer from "./AddPlayer";


import type { GameScore } from "../hooks/useScores";
import type { Deal } from "../hooks/useScores";


interface GameManagerProps {
    scores: GameScore[],
    deals: Deal[],
    onAddPlayerName: (name: string) => void,
    onAddDeal: () => void,
    onEditDeal: (dealId: number) => void,
}

const GameManager = ({ scores, deals, onAddPlayerName, onAddDeal, onEditDeal }: GameManagerProps) => {
    const allDealsAreDone = !deals.find(deal => deal.winnerPlayerId === 0)
    return (
        <div className="flex flex-col">
            <div className="h-14" />
            <div className="flex w-full justify-center">
                {scores?.length > 0 && <ScoresTable scores={scores} />}
            </div>
            <div className="flex w-full justify-center mt-5">
                {<AddPlayer onAddPlayerName={onAddPlayerName} />}
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col py-5 w-80">
                    {
                        allDealsAreDone &&
                        <a href="#" className="text-blue-500 hover:text-blue-700 focus:text-blue-700 focus:outline-none" onClick={onAddDeal}>
                            Agregar juego ...
                        </a>
                    }
                    {
                        !allDealsAreDone &&
                        <label>
                            Termina el juego para poder agregar uno nuevo
                        </label>
                    }
                    {
                        deals.map(deal => (
                            <div key={deal.id}>
                                <a
                                    href="#"
                                    className="text-blue-500 hover:text-blue-700 focus:text-blue-700 focus:outline-none"
                                    onClick={() => onEditDeal(deal.id)}
                                >
                                    Editar juego {deal.id}...
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default GameManager;
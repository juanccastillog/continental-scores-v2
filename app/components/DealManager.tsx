import type { Deal } from "../hooks/useScores";
import Toggle from "./Toggle";
import PointsInput from "./PointsInput";

interface DealManagerProps {
    deal: Deal,
    onBack: () => void,
    onChangePoints: (dealId: number, playerId: number, newPoints: number) => void,
    onChangeWinnerEarning: (dealId: number, newEarning: number) => void,
    onChangeWinner: (dealId: number, playerId: number) => void,
}

const DealManager = ({ deal, onChangePoints, onChangeWinner, onChangeWinnerEarning, onBack }: DealManagerProps) => (
    <div className="flex justify-center bg-slate-50 h-screen">
        <div className="flex flex-col bg-white w-full max-w-md">
            <div className="flex flex-row justify-between">
                <button className="m-2 p-2 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none" onClick={onBack}>
                    <svg className="h-6 w-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Atras</span>
                </button>
                <button className="m-2 p-2 text-gray-600 hover:text-gray-800 focus:outline-none" onClick={onBack}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex justify-center">
                <form className="flex flex-col bg-white space-y-4" style={{ maxWidth: '250px' }}>
                    <div className="flex justify-start gap-3">
                        <label>Apuesta</label>
                        <input
                            className="w-16 h-7 border border-gray-300 rounded-md px-1 py-2 focus:outline-none focus:border-indigo-500 text-right"
                            value={deal.winnerEarning}
                            onChange={event => { onChangeWinnerEarning(deal.id, parseInt(event.target.value)) }}
                        />
                    </div>
                    <div className="flex justify-end">
                        <label>Ganador?</label>
                    </div>
                    {deal.scores.map((dealScore, i) => (
                        <div className="flex items-center h-10 space-x-2" key={`${deal.id}${dealScore.playerId}`}>
                            <div className="flex h-7 w-24"><p className="h-7 overflow-hidden py-0.5 text-black">{dealScore.playerName}</p></div>
                            <div className="flex">
                                <PointsInput
                                    value={dealScore.points}
                                    onChange={event => {
                                        const newPoints = parseInt(event.target.value, 10);
                                        if (!isNaN(newPoints)) {
                                            onChangePoints(deal.id, dealScore.playerId, parseInt(event.target.value, 10));
                                        }
                                    }}
                                />
                            </div>
                            <div className="flex">
                                <Toggle
                                    checked={dealScore.playerId === deal.winnerPlayerId}
                                    onChange={checked => {
                                        if (checked) {
                                            onChangeWinner(deal.id, dealScore.playerId);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    </div>
);


export default DealManager;
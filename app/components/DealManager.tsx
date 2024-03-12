import type { Deal } from "../hooks/useScores";
import Toggle from "./Toggle";

interface DealManagerProps {
    deal: Deal,
    onBack: () => void,
    onChangePoints: (dealId: number, playerId: number, newPoints: number) => void,
    onChangeWinnerEarning?: (dealId: number) => void,
    onChangeWinner: (dealId: number, playerId: number) => void,
}

const DealManager = ({ deal, onChangePoints, onChangeWinner, onBack }: DealManagerProps) => {
    return (
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
                        {deal.scores.map(dealScore => (
                            <div className="flex items-center h-10 space-x-2" key={`${deal.id}${dealScore.playerId}`}>
                                <div className="flex h-7 w-24"><p className="h-7 overflow-hidden py-0.5">{dealScore.playerName}</p></div>
                                <div className="flex">
                                    <input
                                        value={dealScore.points}
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-16 h-7 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                                        onChange={event => onChangePoints(deal.id, dealScore.playerId, parseInt(event.target.value, 0))}
                                    /></div>
                                <div className="flex">
                                    <Toggle
                                        checked={dealScore.playerId === deal.winnerPlayerId}
                                        onChange={checked => {
                                            if(checked){
                                                onChangeWinner(deal.id,dealScore.playerId);
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
    )
};

export default DealManager;
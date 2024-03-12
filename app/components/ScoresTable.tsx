import React from "react"

import type { GameScore } from "../hooks/useScores"

interface ScoresTableProps {
    scores?: GameScore[]
}

export const ScoresTable = ({ scores }: ScoresTableProps) => (
    <>
        <table className="w-300 bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
                <tr>
                    <th className="py-2 px-4">Nombre</th>
                    <th className="py-2 px-4">Puntuación</th>
                    <th className="py-2 px-4">Ganancia</th>
                </tr>
            </thead>
            <tbody>
                {
                    scores?.map(score => (
                        <tr key={score.playerId}>
                            <td className="py-2 px-4">{score.playerName}</td>
                            <td className="py-2 px-4">{score.score}</td>
                            <td className="py-2 px-4">{score.earning}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
)

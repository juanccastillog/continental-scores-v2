import React from "react"

interface Score {
    id: number,
    name: string,
    score: number,
    earning: number,
}

interface ScoresTableProps {
    scores?: Score[]
}

export const ScoresTable = ({ scores }: ScoresTableProps) => (
    <>
        <div className="flex flex-col">
            <div className="h-14" />
            <div className="flex w-full justify-center">
                    <table className="w-300 bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4">Nombre</th>
                                <th className="py-2 px-4">Puntuación</th>
                                <th className="py-2 px-4">Ganancia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">Juan Carlos Castillo</td>
                                <td className="py-2 px-4">150</td>
                                <td className="py-2 px-4">$25,000</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">Data 4</td>
                                <td className="py-2 px-4">Data 5</td>
                                <td className="py-2 px-4">Data 6</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </>
)

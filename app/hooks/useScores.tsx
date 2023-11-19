import { useState } from "react"
import type { Score } from "../components/ScoresTable";

const useScores = () => {
    const [scores, setScores] = useState<Score[]>([]);
    const addPlayer = (id:number, name:string) => {
        const newScores = [...scores, {
            id,
            name,
            score: 0,
            earning: 0,
        }];
        setScores(newScores)
    }


    return {scores, modifiers : { addPlayer}};
}

export default useScores;
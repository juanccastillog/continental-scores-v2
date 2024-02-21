import { useState } from "react"
import type { Score } from "../components/ScoresTable";

class idGenerator {

    #currentId: number

    constructor() {
        this.#currentId = 0;
    }

    getNextId (){
        this.#currentId++;
        return this.#currentId;
    }
}

const idGeneratorInstance = new idGenerator();

const useScores = () => {
    const [scores, setScores] = useState<Score[]>([]);
    const addPlayer = (name: string) => {
        const newScores = [...scores, {
            id: idGeneratorInstance.getNextId(),
            name,
            score: 0,
            earning: 0,
        }];
        setScores(newScores)
    }


    return { scores, modifiers: { addPlayer } };
}

export default useScores;
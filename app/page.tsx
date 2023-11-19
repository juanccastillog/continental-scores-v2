'use client'
import { ScoresTable } from "./components/ScoresTable";
import AddPlayerButton from "./components/AddPlayerButton";
import useScores from "./hooks/useScores";


export default function Home() {
  const {scores} = useScores();
  return (
    <main >
      <div className="flex flex-col">
        <div className="h-14" />
        <div className="flex w-full justify-center">
          {scores?.length>0 &&<ScoresTable scores={scores} />}
          <AddPlayerButton />
        </div>
      </div>
    </main>
  )
}
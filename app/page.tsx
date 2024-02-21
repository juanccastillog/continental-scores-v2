'use client'
import AddPlayer from "./components/AddPlayer";
import { ScoresTable } from "./components/ScoresTable";
import useScores from "./hooks/useScores";



export default function Home() {

  const { scores, modifiers } = useScores();

  const handleAddPlayerName = (name: string) => {
    modifiers.addPlayer(name)
  }

  return (
    <main >
      <div className="flex flex-col">
        <div className="h-14" />
        <div className="flex w-full justify-center">
          {scores?.length > 0 && <ScoresTable scores={scores} />}
        </div>
        <div className="flex w-full justify-center mt-5">
          {<AddPlayer onAddPlayerName={handleAddPlayerName} />}
        </div>
      </div>
    </main>
  )
}
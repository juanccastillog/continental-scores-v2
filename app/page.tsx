'use client'
import { useState } from "react";

import GameManager from "./components/GameManager";
import DealManager from "./components/DealManager";
import useScores from "./hooks/useScores";


export default function Home() {

  const { scores, modifiers, deals } = useScores();
  const [viewedDealId, setViewdDealId] = useState(0);

  const handleAddPlayerName = (name: string) => {
    modifiers.addPlayer(name)
  }

  const handleAddDeal = () => {
    setViewdDealId(modifiers.addDeal());
  }

  const handleChangePoints = (dealId: number, playerId: number, newPoints: number) => {
    modifiers.changePoints(dealId, playerId, newPoints);
  }

  const viewedDeal = (viewedDealId !== 0)? deals.find(deal => deal.id === viewedDealId) : null;

  return (
    <main >
      {viewedDealId === 0 &&<GameManager scores={scores} deals={deals} onAddPlayerName={handleAddPlayerName} onAddDeal={handleAddDeal} onEditDeal={(dealId)=>setViewdDealId(dealId)}/>}
      {viewedDeal && <DealManager deal = { viewedDeal} onChangePoints={handleChangePoints} onChangeWinner={modifiers.changeWinner} onBack={()=>setViewdDealId(0)}/>}
    </main>
  )
}
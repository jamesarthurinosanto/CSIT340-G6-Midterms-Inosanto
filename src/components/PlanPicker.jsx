import Summary from './components/Summary'
import PlanCard from './components/PlanCard'

import { useState } from "react";

function PlanPicker(){
    const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);

  function handleAddSeat() {
    setSeats(seats + 1);
  }

  function handleAddMonth() {
    setMonths(months + 1);
  }

  function handleReset() {
    setSeats(1);
    setMonths(1);
  }
    return(
        <>
        <Summary />

        <div className="flex gap-4">
          <button
            className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
            onClick={handleAddSeat}
          >
            Add seat
          </button>
          <button
            className="cursor-pointer rounded-lg bg-[#EEEEEE] px-8 py-3 text-xl font-bold text-[#000000]"
            onClick={handleAddMonth}
          >
            Add month
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>


        <PlanCard />
            
        </>
    )
}

export default PlanPicker
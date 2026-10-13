function PlanCard(seats, months){

    return(
        <main className="grid grid-cols-3 gap-8 px-20 pt-10">
        <div className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
          <div className="p-8">
            <h3 className="text-3xl font-bold">Starter</h3>
            <p className="mt-2 text-xl">PHP 199 per seat each month</p>
            <ul className="mt-6 text-xl">
              <li className="border-t border-[#DDDDDD] py-2">10 GB storage</li>
              <li className="border-t border-[#DDDDDD] py-2">Email support</li>
            </ul>
          </div>
          <p className="bg-[#000000] px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
            Total: PHP {199 * seats * months}
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
          <div className="p-8">
            <h3 className="text-3xl font-bold">Team</h3>
            <p className="mt-2 text-xl">PHP 499 per seat each month</p>
            <ul className="mt-6 text-xl">
              <li className="border-t border-[#DDDDDD] py-2">100 GB storage</li>
              <li className="border-t border-[#DDDDDD] py-2">Chat support</li>
            </ul>
          </div>
          <p className="bg-[#000000] px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
            Total: PHP {499 * seats * months}
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
          <div className="p-8">
            <h3 className="text-3xl font-bold">Business</h3>
            <p className="mt-2 text-xl">PHP 999 per seat each month</p>
            <ul className="mt-6 text-xl">
              <li className="border-t border-[#DDDDDD] py-2">1000 GB storage</li>
              <li className="border-t border-[#DDDDDD] py-2">Phone support</li>
            </ul>
          </div>
          <p className="bg-[#000000] px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
            Total: PHP {999 * seats * months}
          </p>
        </div>
      </main>
    )
}

export default PlanCard
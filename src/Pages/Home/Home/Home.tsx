import React, { useState } from "react";

const message = {
  "messages": [
    "Learn React",
    "Get a Job",
    "Invest Your Money",
  ]
}




function Home() {

  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)



  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1)

    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1)

    }
  }

  return (
    <div className="h-screen bg-[#212121] text-center items-center flex justify-center text-2xl text-white">
      <div className="w-screen sm:w-[50%] p-2 h-92 bg-neutral-500 rounded-xl text-center items-center flex flex-col justify-between relative">
        <br />
        <div className={`${isOpen ? " rounded-full w-12 h-12 bg-red-500 hover:bg-red-600 p-2 flex flex-col absolute  right-1 cursor-pointer" : "rounded-full w-12 h-12 bg-green-500 hover:bg-green-600 p-2 flex flex-col absolute  right-1 cursor-pointer"}`}>
          <button className=" cursor-pointer" onClick={() => setIsOpen((is) => !is)}>{isOpen ? "×" : "+"}</button>
        </div>

        {isOpen && (
          <div className=" w-screen sm:w-96  h-72 bg-neutral-500 rounded-xl p-5 flex flex-col justify-between">
            <div className="flex justify-between">
              <p className={`${step >= 1 ? "bg-blue-500" : "bg-white text-black"} rounded-full w-12 h-12 flex items-center justify-center`}>
                1
              </p>
              <p className={`${step >= 2 ? "bg-blue-500" : "bg-white text-black"} rounded-full w-12 h-12 flex items-center justify-center`}>
                2
              </p>
              <p className={`${step >= 3 ? "bg-blue-500" : "bg-white text-black"} rounded-full w-12 h-12 flex items-center justify-center`}>
                3
              </p>
            </div>
            <div className="flex-grow flex justify-center items-center text-center">
              <p>Step {step}: {message.messages[step - 1]}</p>
            </div>
            <div className="flex justify-between">
              <button onClick={handlePrevious} className="bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer p-2">Previous</button>
              <button onClick={handleNext} className="bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer p-2">Next</button>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}

export default Home;

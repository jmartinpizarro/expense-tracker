import { useState } from "react"

export default function AccountingTable(){
    const [isRotated, setIsRotated] = useState(false);


    const handleClick = () => {
      setIsRotated(!isRotated);
    };


    return(
    <div className="h-3/5 bg-white rounded-2xl flex flex-col relative">
        <h2 className="mx-6 my-4 text-center font-semibold">Historic - Recently</h2>
        <ul className="mx-6 h-2/4">
          <li>element1</li>
          <li>element2</li>
        </ul>

        <div className="flex flex-row gap-20 items-center justify-center">
          <div>
            <h3>Total earned:</h3>
            <span className="block w-full text-right">---€</span>
          </div>

          <div>
            <h3>Total spent:</h3>
            <span className="block w-full text-right">---€</span>
          </div>
        </div>

        <section className={`flex flex-col gap-10 bg-paleBlue absolute bottom-0 w-full h-2/4 rounded-lg transition duration-400 ${isRotated ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-center mx-auto mt-2 font-semibold h-5">Add new expense</h2>
          <form className="flex flex-row mx-auto gap-5">
            <div>
              <input type="radio" id="income" name="income" value="income"></input>
              <label htmlFor="income">Income</label>
            </div>

            <div>
              <input type="radio" id="expense" name="expense" value="expense"></input>
              <label htmlFor="expense">Expense</label>
            </div>
          </form>
        </section>

        <div className="absolute rounded-full self-center -bottom-5 bg-paleOrange w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-125 transition ease-in-out duration-700 z-10" onClick={handleClick}>
        <img
          className={`w-4/6 h-4/6 ${isRotated ? 'rotate-45' : ''} transition ease-in-out duration-400`} // Apply rotation conditionally
          src="./plus.png"
          alt="For adding an expense, click here"
          id="cross-img"
        />
        </div>
    </div>
    )  
}
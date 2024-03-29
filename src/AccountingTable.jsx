import { useState } from "react"

export default function AccountingTable(){
    const [isRotated, setIsRotated] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    const checkNumber = () => {
      const valueToAdd = document.querySelector('.quantity').value; // obtain the value from the input label

      if (isNaN(Number(valueToAdd))){
        setDisplayError(true)
        return
      } 
      else if (Number(valueToAdd) <= 0.0){
        setDisplayError(true)
        return
      }
      return true
    }

    const checkText = () => {
      const valueToCheck = document.querySelector('.description').value
      if (valueToCheck === ''){
        setDisplayError(true)
        return
      }
      return true
    }

    const inputChecker = () =>{
      const income = document.getElementById('income')
      const expense = document.getElementById('expense')

      const selectedRadioButtonValue = income.checked ? 'income' : expense.checked ? 'expense' : '';
      if (selectedRadioButtonValue === ''){
        setDisplayError(true)
        return
      }
      return true
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const checkers = [checkNumber(), checkText(), inputChecker()]
      if (checkers[0] === true && checkers[1] === true && checkers[2] === true){
        setDisplayError(false)
      }
    }

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

        <section className={`flex flex-col bg-paleBlue absolute bottom-0 w-full h-2/4 rounded-lg transition duration-400 ${isRotated ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-center mx-auto my-2 font-semibold h-5">Add new expense</h2>
          <form className="flex flex-col mx-auto gap-5">
            <div className="flex flex-row gap-5 mx-auto">
              <div>
                <input type="radio" id="income" name="selector" value="income"></input>
                <label htmlFor="income">Income</label>
              </div>
            
              <div>
                <input type="radio" id="expense" name="selector" value="expense"></input>
                <label htmlFor="expense">Expense</label>
              </div>
            </div>

            <input type="text" placeholder="500€" className="quantity mx-auto w-20 h-8 indent-2 rounded-md"/>

            <input type="text" placeholder="Dining with friends" className="description mx-auto w-48 h-8 indent-2 rounded-md" />

            <button className="mx-auto border-none rounded-md w-20 bg-background text-center" onClick={handleSubmit}>Add</button>
            {displayError && <span className="text-smfont-bold">Seems that your input is wrong...</span>}
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
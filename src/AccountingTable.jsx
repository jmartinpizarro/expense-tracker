export default function AccountingTable(){

    return(
    <div className="h-72 bg-white rounded-2xl flex flex-col relative">
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

        <div className="absolute rounded-full self-center -bottom-5 bg-paleOrange w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-125 transition ease-in-out duration-700">
          <img className="w-4/6 h-4/6" src="./plus.png" alt="For adding an expense, click here" />
        </div>
    </div>
    )  
}
export default function AccountingTable(){

    return(
    <div className="h-72 bg-white rounded-2xl flex flex-col">
        <h2 className="mx-6 mt-4">Historic - Recently</h2>
        <ul className="mx-6 h-3/5">
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
    </div>
    )  
}
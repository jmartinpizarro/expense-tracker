import CurrentBalance from "./CurrentBalance"
import AccountingTable from "./AccountingTable"

function App() {
  return (
    <main className="h-screen w-96 max-sm:w-4/6 flex flex-col mx-auto justify-center bg-background gap-10">

      <CurrentBalance/>

      <AccountingTable/>
    </main>
  )
}

export default App

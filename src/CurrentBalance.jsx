export default function CurrentBalance(){
    return(
    <div className="h-20 flex w-full flex-col justify-center bg-paleOrange rounded-2xl">
        <h1 className="mx-6 text-xs text-white">My balance</h1>
        <p className="mx-6 text-white text-lg font-semibold"><span>---</span> €</p>
    </div>
    )
}
import { useEffect } from "react"
import { useState } from "react"

export default function Button(){

    const [turned, setTurned] = useState(false)

    const handleClick = () => {
        setTurned(!turned)
        const itemToRotate = document.getElementById('cross-img')
        if (turned == true) {
            itemToRotate.style.rotate = '45deg'
        }
        
    }

    return(
        <div className="absolute rounded-full self-center -bottom-5 bg-paleOrange w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-125 transition ease-in-out duration-700" onClick={handleClick}>
          <img className="w-4/6 h-4/6" src="./plus.png" alt="For adding an expense, click here" id="cross-img"/>
        </div>
    )
}
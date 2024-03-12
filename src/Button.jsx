import { useState } from "react"

export default function Button() {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div
      className="absolute rounded-full self-center -bottom-5 bg-paleOrange w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-125 transition ease-in-out duration-700"
      onClick={handleClick}
    >
      <img
        className={`w-4/6 h-4/6 ${isRotated ? 'rotate-45' : ''} transition ease-in-out duration-400`} // Apply rotation conditionally
        src="./plus.png"
        alt="For adding an expense, click here"
        id="cross-img"
      />
    </div>
  );
}

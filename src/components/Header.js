import React from "react"
import Meme from "../assests/images/troll-face.svg"

const Header = () => {
  return (
    <header className="header">
      <img src={Meme} alt="Troll face meme" className="header-image" />
      <h2 className="header-title">Meme Generator</h2>
    </header>
    )
}

export default Header;
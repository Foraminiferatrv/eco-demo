import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="h-16 bg-lime-400 md:mx-auto flex items-center">
      <nav className="flex container justify-end">
        <ul className="font-Kollektif font-bold text-lg text-gray-100 flex space-x-3">
          <li><NavLink to="#" >Home</NavLink> </li>
          <li><NavLink to="#" >About</NavLink> </li>
          <li><NavLink to="#" >Services</NavLink> </li>
          <li><NavLink to="#" >Contact</NavLink> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
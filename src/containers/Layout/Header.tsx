import { NavLink } from "react-router-dom"
import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <header className="h-16 flex justify-end items-center fixed w-full">
      <nav className="flex mx-auto container items-center justify-between p-14">
        <img src={logo} alt="logo" className="w-28" />
        <ul className="font-Nunito font-bold text-lg text-gray-100 flex space-x-3">
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
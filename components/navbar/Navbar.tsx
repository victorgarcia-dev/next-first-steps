import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";


const navbarItems = [
    {path:"/general/about", text:"About"},
    {path:"/general/pricing", text:"Pricing"},
    {path:"/general/contact", text:"contact"}

];

export const Navbar = () => {
    console.log("hola mundo");
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href="/" className="">
            <span>Home</span>
        </Link>
        <div className="flex flex-1"></div>
        {
           navbarItems.map(navItem => (
            <ActiveLink 
              key={navItem.path}
              text={navItem.text}
              path={navItem.path}
             />
           ))
        }
    </nav>
  )
}

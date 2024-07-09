import { Dumbbell, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import PrimaryBtn from "../Button/PrimaryBtn"

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Sobre",
      link: "/sobre",
    },
    {
      name: "Serviços",
      link: "/serviços",
    },
    {
      name: "Planos",
      link: "/planos",
    },
    {
      name: "Contato",
      link: "/contato",
    },
  ];

  // bg-[#1d1d1d]
  return (
    <> 
      <nav className="w-full h-auto bg-transparent/90 shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3 z-50 fixed top-0 left-0 right-0">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              
              <Link className="text-3xl text-orange-500 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
              G <span className="text-xl font-bold text-gray-300">Y</span>M
              <Dumbbell className="w-5 h-4 text-orange-400 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]"/>
              </Link>
              <div className="md:hidden">
                <button 
                  className="p-2 text-gray-50 rounded-md outline-none border border-transparent focus:border-orange-300 focus:border" onClick={() => 
                  setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X className="text-gray-400 cursor-pointer" size={24}/>
                  ) : (
                    <Menu className="text-gray-400 cursor-pointer" size={24}/>
                  ) 
                }
                </button>
              </div>
            </div>
          </div>
          <div className={`flex justify-between items-center md:block ${navbar ? "block" : "hidden"}`}>
            <ul className="list-none lg:flex md:flex sm:block items-center gap-x-5 gap-y-16" >
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-50 text-lg font-medium hover:text-orange-500 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <PrimaryBtn>Torne-se um membro</PrimaryBtn>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

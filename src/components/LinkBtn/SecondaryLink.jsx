import { Link } from "react-router-dom"


const SecondaryLink = ({link, children, className}) => {
  return (
    <Link
      to={link}
      className={`text-base text-orange-600 bg-orange-600/5 font-medium px-3 font-medium px-3 py-1.5 rounded flex items-center border border-orange-600 gap-x-1 hover:border-orange-600/70 hover:bg-orange-600/10 ease-out duration-500 ${className}`}
    >
      {children}
    </Link>
  )
}

export default SecondaryLink


const SecondaryBtn = ({type, id, children, className, onClick = () => {}}) => {
  return (
    <button 
      type={type}
      id={id}
      className={`text-base text-orange-600 bg-indig0-600/5 font-medium px-3 py-1.5 rounded flex items-center border border-orange-600 gap-x-1 hover:border-orange-600/70 hover:bg-orange-600/10 ease-out duration-500 ${className}`}
      onClick={onClick}
    >
      {children}
      
    </button>
  )
}

export default SecondaryBtn

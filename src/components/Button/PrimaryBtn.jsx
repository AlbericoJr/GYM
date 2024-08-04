const PrimaryBtn = ({type, id, children, className}) => {
  return (
      <button
        type={type}
        id={id}
        className={`text-base text-gray-200 bg-orange-600 font-medium md:px-2 md:font-light px-3 md:py-2 py-1.5 rounded gap-x-1 hover:bg-orange-600/70 ease-out duration-500 ${className}`}
      >
        {children}
      </button>
  )
}

export default PrimaryBtn

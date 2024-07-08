

const input = ({type, id, name, placeholder, className, value, onChange}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={`w-full h-11 bg-transparent border border-gray-700 outline-none px-3 focus:outline-none focus:border-orange-600 rounded-md text-base text-gray-200 font-medium ${className}`}
      value={value}
      onChange={onChange}
    >
      
    </input>
  )
}

export default input

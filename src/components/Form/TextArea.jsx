

const TextArea = ({id, name, placeholder, className}) => {
  return (
    <textarea
      id={id}
      name={name}
      className={`w-full h-40 bg-transparent border border-gray-700 outline-none px-3 py-2 focus:outline-none focus:border-orange-600 rounded-md text-base text-gray-200 font-medium ${className}`}
      placeholder={placeholder}
    >
      
    </textarea>
  )
}

export default TextArea

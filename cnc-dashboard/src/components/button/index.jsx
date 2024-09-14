import React from 'react'

function Button({label,className,type='button',onClick,...props}) {
    
  return (

         <button type={type}
         className={`inline-flex items-center justify-center rounded-md bg-black font-semibold leading-7 text-white hover:bg-black/80 ${className}`}
         onClick={onClick}
         {...props}
         >
         {label}
         </button>
  )
}

export default Button
import React from 'react'

const items = ({Links,title}) => {
  return (
    <ul>
        <h1 className='mb-1 font-medium text-base leading-10'>{title}</h1>
        {
            Links.map((link)=>(
              <li key={link.name}>
               <a className='text-gray-600 font-normal text-[15px] hover:underline duration-75 leading-9' href={link.link}>{link.name}</a>
              </li>
            ))
        }
    </ul>
  )
}

export default items
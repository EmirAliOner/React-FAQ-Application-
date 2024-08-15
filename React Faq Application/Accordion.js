import React from 'react'

export default function Accordion({title,answer,active,setActive}) {
  return (
    <div className='accordion'>
        <div className='accordionHeading'>
            <div className='container'>
                <p>{title}</p>
                <span onClick={()=> setActive(title)}>CLICK ME</span>
            </div>
        </div>
        <div className={(active === title ? "show" : "") + "accordionContent"}>
            <div className='container'>
                <p>Lorem ipsum dolor sit amet. In voluptatibus esse et ullam similique qui dolorem adipisci eum dicta quae? Non quaerat reiciendis quo dolorem illo et voluptatem voluptatem est dolores voluptas et quod voluptatum At reprehenderit maxime et consectetur dolores? </p>
            </div>
        </div>
    </div>
  )
}
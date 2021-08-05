import React from 'react'

export const GifGridItem = ({title, url}) => {
    console.log(url) 
    return (
        <div className='card animate__animated animate__bounce animate__repeat-1'>   
           <img src={url} alt={title} />
           <p> {title}</p> 
        </div>
    )
}

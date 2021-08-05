import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GrifGrid = ({category}) => {

    const {data:images, loading} = useFetchGif(category);

    return (
        <>
            <h3 className='animate__animated animate__bounce'> { category }</h3>
            {
              loading && <p className='animate__animated animate__bounce'>Cargando....</p>
            }
            <div className='card-grid'>
                    {
                        images.map( img => (
                            <GifGridItem
                            key={img.id}
                            {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}

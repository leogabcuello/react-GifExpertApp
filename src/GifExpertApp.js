import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GrifGrid } from './components/GrifGrid';

export const  GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Dragon Ball ']);
    
    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GrifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    );
}
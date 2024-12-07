
import React from 'react'
import { getData } from '@/lib/getData'
import "./Ejer.css"
const Ejer = async () => {
    const ejercicios= await getData("https://673629d5aafa2ef2222fb0a8.mockapi.io/exameneje");
  return (
    <>
        {ejercicios.map((ejr:any)=> 
        <div className='conten' key={ejr.id}>
            <h1 className='descrip'>{ejr.ejercicio}</h1>
            <p className='descrip2'>{ejr.info}</p>

        </div>
        )}
    </>
  )
}

export default Ejer



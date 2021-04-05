import React from 'react'

//no olvidar que aqui recibo los propts del componente padre... en este caso id,title,url aplicando destructuracion
export const GifGridItem = ( {id,title,url} ) => {
    console.log(id,title,url)
    return (
        // aca uso className en lugar de class porque class es una palabra reservada de javascript
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}

import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {
    //este es mi hock para un array de strings //setCategories devuelve un callback donde el primer argumento es el valor actual y el segundo es el nuevo como se ve aqui      setCategories(cats =>[...cats,'Hunter']);
    const [categories, setCategories] = useState([' '])
    
    //esta funcion es el click del boton    
    // const handleAdd=()=>{
    //     setCategories(cats =>[...cats,'Hunter']);
    // }

    return (
        <>
           <h2>FABRICIO BUSCADOR</h2>
           {/* aca estoy enviando la funcion setCategories para que el componente AddCategory pueda agregar categorias y se renderize correctamente */}
           <AddCategory setCategories={ setCategories } />
           <hr />
           
           <ol>
               {
                   categories.map(category =>(
                    //    este es el componente GifGrid que recibe dos argumentos
                       <GifGrid key={ category } category={ category }/>
                   ))
               }
           </ol>
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp

import React,{ useState } from 'react'
import PropTypes from 'prop-types';
//aca recibo setCategories del componente GifExpertApp 
export const AddCategory = ({setCategories}) => {

    //hook para controlar el valor de inputbox
    const [inputValue, setInputValue] = useState('')
    
    //evento change del inputbox
    const handleInputChange =(e) =>{
        setInputValue(e.target.value);
    }

    //evento enter de un form
    const handleSubmit = (e)=>{
        //con  esto inpido que el form quiera recargar la pagina
        e.preventDefault();

        if ( inputValue.trim().length>2){
            setCategories(cats =>[inputValue,...cats]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

//con esto le digo que necesito si o si la funcion setCategories para usar este componente
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

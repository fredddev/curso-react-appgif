export const getGifs =async( category ) =>{  
    //esto devuelve una promesa 
          
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=tEZEbIbSLYAFKldhyMTvBD42hTfdlcUJ`;
    const resp = await fetch (url);
    //en {data} se esta aplicando desestructuracion
    const {data} = await resp.json();
    
    //en esta funcion recibo img del backend y creo un nuevo objeto, los campos id,tile,medium.url son los nombres de los campos que me interesa que manda el backend
    //url: img.images?.downsized_medium.url     aca con el signo de interrogacion le digo que si existe el campo .url lo muestre , si no no!
    const gifs = data.map(img =>{
        return{                
            id: img.id, 
            title: img.title,   
            url: img.images?.downsized_medium.url
        }
    })

    // console.log(gifs);
    return gifs;
}
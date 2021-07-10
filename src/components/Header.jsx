import React from 'react';

// function Header(props){
//     console.log(props);

//     return(
//         <h1>Esto es un header{props.titulo}</h1>
//     )
// }

const Header = ({titulo}) => {
    console.log(titulo);
    
    return ( 
        <h1>Esto es un header {titulo}</h1>
     );
}
 
export default Header;

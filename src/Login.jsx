export const Login = () => {

    let nombre = "pepito";
    
    const saludar = () => {
        console.log ("Hola como estan? ")
    }

    return <div style={{ backgroundColor: "steelblue"}}> 
        <h1> Hola desde el componente Login</h1>
        <h3> mi nombre es {nombre}</h3>
        <button onClick={saludar}> Saludar</button>
    </div>

}
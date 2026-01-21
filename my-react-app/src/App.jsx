import { useState } from 'react'

function App() {

    const [isParagraphVisible, setIsParagraphVisible] = useState(true)
    const [contador, setContador] = useState(0)
    const toggleStatus = () => {
    setIsParagraphVisible(!isParagraphVisible)
    }
    
    const sumar = () => setContador(contador + 1)
    const restar = () => {
        if (contador > 0) {
        setContador(contador - 1)
        }
    }
    const resetear = () => setContador(0)


    return (
    <>
    <h1>Miniretillo de Rubén</h1>
    {isParagraphVisible && (
    <p>Parrafo donde se verá todo:</p>
    )}
    <button onClick={toggleStatus}>
    {isParagraphVisible ? 'Esconder' : 'Enseñar'} texto
    </button>
    <br/>
    <br/>
    
    <p>Valor del contador: {contador}</p>
    <br/>
    <button onClick={sumar}>+1</button>
    <button onClick={restar}>-1</button>
    <button onClick={resetear}>Reset</button>
    </>
    )

}

export default App
import React, { useState, useEffect } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const handleContador = () => {
        setContador(contador + 1);
    }

    const handleDecrementar = () => {
        setContador(contador - 1);
    }

    useEffect(() => {
        setContador(12);
    }, [])

    useEffect(() => {
        if (contador === 15) {
            alert('El contador ha llegado a 15');
        } 
    }, [contador])

    useEffect(() => {

    }, [contador])

    return (
        <>
            <button onClick={handleContador}>Incrementar</button>
            <button onClick={handleDecrementar}>decrementar</button>
            <h1>Contador: {contador}</h1>
        </>
    )
}

export default Contador;
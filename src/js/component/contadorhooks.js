import React, { useState } from "react";

export default function ContadorHooks({titulo}) {
  const [contador, setContador] = useState(0);
  //puede recibir cualquier tipo de dato
  //console.log(useState())
  //es un arreglo que me devuelve 2 cosas, en posicion 0 un valor undefined,
  //y en la 1era posicion me devuelve una funcion, la cual actualizara el valor
  //de la posicion 1 de ese arreglo.

  //variable de estado controlará el valor del contador.
  //creo evento on click que mandará a llamar funcion sumar y restar
  //estas funciones existiran en la misma fx del contador hook.
  //nuevo valor será el que traiga variable contador+1
  //nuevo valor será el que traiga variable contador-1
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  console.log(contador)
  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <p>Contador de {titulo}</p>
      <h3>{contador}</h3>     
    </>
  );
}

"use client";

export default function Button() {
  function handleClick() {
    alert("Botao clicado ...");
  }

  return <button onClick={handleClick}>Button</button>;
}

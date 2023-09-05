import { useState } from 'react';
import './App.css';

// Implicit typing
const x = 1;

// Explicit typing
const y: number = 2;

// Incorrect JS
// let x = 1;
// x = 'abc';
// x = new Date();

// Type number
const numberType: number = 2000;
// Type string
const stringType: string = `I'm a string`;
// Type boolean
const booleanType: boolean = true;
// Type array | Array<number> === number[]
const arrayType: Array<number | string> = [numberType, 1, 121, stringType];
// Type tuple
const tupleType: [number, string] = [1, 'string'];
// Type enum
enum Suit {
  Spades = 'Spades',
  Hearts = 'Hearts',
  Diamonds = 'Diamonds',
  Clubs = 'Clubs',
}
const cardsSpades: Suit = Suit.Spades;
// Type any
// let x: any = 4;
// x = 'a';
// x = new Date();
// Type void
const consoleLogger = (message: string): void => console.log(message);

function App() {
  const [count, setCount] = useState(121);

  function roundNumber(num: number): number {
    return Number(num.toFixed(2));
  }

  function sumTwoNumbers(a: number, b: number): number {
    const result = a + b;
    const roundedResult = roundNumber(result);

    return roundedResult;
  }

  consoleLogger('Show me in console');

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          {x} | {y}
        </p>
        <p>{sumTwoNumbers(2, 4)}</p>
        <p>
          {numberType} - {typeof numberType}
        </p>
        <p>
          {stringType} - {typeof stringType}
        </p>
        <p>
          {booleanType} - {typeof booleanType}
        </p>
        <p>
          {arrayType} - {typeof arrayType}
        </p>
        <p>
          {tupleType} - {typeof tupleType}
        </p>
        <p>
          {cardsSpades} - {typeof cardsSpades}
        </p>
        <p>{Suit.Hearts}</p>
        <p>{roundNumber(9999)}</p>
      </div>
    </>
  );
}

export default App;
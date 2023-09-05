
// 1. funkcję countCharacters liczącą ilość znaków w stringu

export function countCharacters(inputString: string): number {
  // Używamy metody length, aby obliczyć ilość znaków w łańcuchu znaków.
  const characterCount = inputString.length;
  return characterCount;
}

// Przykład użycia funkcji:
const myString = "To jest przykład";
const result = countCharacters(myString);
console.log(`Ilość znaków w łańcuchu: ${result}`);


// 2. funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)

export function isEven(number: number): boolean {
  // Używamy operatora modulo (%) do sprawdzenia reszty z dzielenia przez 2.
  // Jeśli reszta wynosi 0, to liczba jest parzysta, w przeciwnym razie jest nieparzysta.
  return number % 2 === 0;
}

// Przykłady użycia funkcji:
console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(0)); // true


// 3. funkcję getParityMessage która na podstawie boolean zwraca komunikat ta liczba jest parzysta/ta liczba nie jest parzysta

export function getParityMessage(isEven: boolean): string {
  if (isEven) {
    return "Ta liczba jest parzysta.";
  } else {
    return "Ta liczba nie jest parzysta.";
  }
}

// Przykłady użycia funkcji:
console.log(getParityMessage(true)); // "Ta liczba jest parzysta."
console.log(getParityMessage(false)); // "Ta liczba nie jest parzysta."


// 4. funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3 powyższe funkcje (zwraca string)


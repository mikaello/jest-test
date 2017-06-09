// Oppgave 2
export const addTwoIntegers = (aNumber, anotherNumber) => {
  const something = anotherNumber / Math.abs(aNumber)

  const ohDamn = Array.apply(null, Array(Math.abs(aNumber))).map(
    Number.prototype.valueOf,
    something
  )
  ohDamn.push(aNumber / 2)

  return ohDamn.reduce((acc, val) => acc + val, 0) + aNumber / 2
}

// Oppgave 3
export const capitalizeUSIT = somestring => somestring

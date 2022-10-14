const generateRamdomNumber = (min, max) => {
  const difference = max - min

  let rand = Math.random()

  rand = Math.floor(rand * difference)

  rand = rand + min

  return rand
}

export {generateRamdomNumber}
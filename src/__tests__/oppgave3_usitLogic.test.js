import { capitalizeUSIT } from '../usitLogic'

describe.skip('oppgave 3: capitalizeUSIT', () => {
  test('tekst som ikke skal endres', () => {
    const alreadyUpper = 'USIT is already uppercase'
    expect(capitalizeUSIT(alreadyUpper)).toEqual(alreadyUpper)

    const noUSIT = 'truddelu, ingen ting her'
    expect(capitalizeUSIT(noUSIT)).toEqual(noUSIT)
  })

  test('usit skal skrives med STORE bokstaver', () => {
    expect(capitalizeUSIT('usit')).toEqual('USIT')
    expect(capitalizeUSIT('UsIt')).toEqual('USIT')
    expect(capitalizeUSIT('vi jobber på usit')).toEqual('vi jobber på USIT')
    expect(capitalizeUSIT('UsIT du usit')).toEqual('USIT du USIT')
  })
})

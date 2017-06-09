import usitTasks, { initialState } from '../usitReducer'

describe('usitReducer', () => {
  test('KICK_THE_BOSS', () => {
    const newState = usitTasks(initialState, {
      type: 'KICK_THE_BOSS',
      newBoss: 'mikael',
    })
    expect(newState).toEqual({ ...initialState, sjefen: 'MIKAEL' })
  })

  test.skip('BLAME_CRACKER', () => {
    // TODO: Oppgave 4, fjern '.skip' over, lagre og se at testen feiler.
    // TODO: Deretter fjerner du linjen under og implementerer denne testen.
    expect(false).toBeTruthy()
  })
})

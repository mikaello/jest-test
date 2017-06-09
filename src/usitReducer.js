export const initialState = {
  sjefen: 'OFTIZ',
  antallKnusteKaffeKolber: 0,
  kolbeknusere: [],
}

const usitTasks = (state = initialState, action) => {
  switch (action.type) {
    case 'BLAME_CRACKER':
      return {
        ...state,
        kolbeknusere: state.kolbeknusere.concat([action.bottleCracker]),
      }

    case 'KICK_THE_BOSS':
      return {
        ...state,
        sjefen: action.newBoss.toUpperCase(),
      }

    default:
      return state
  }
}

export default usitTasks

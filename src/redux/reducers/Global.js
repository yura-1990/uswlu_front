import * as t from './types'
const initialState = {
  sidebar: false,
  authorized: true,
  allSites: [],
  allPartners: [],
  allUniversitySites: [],
  allVacancy: [],
  allRectors: [],
  allVirtualLobby: [],
}

const Global = (state = initialState, action) => {
  switch (action.type) {
    case t.ALL_SITES:
      return { ...state, allSites: action.payload }
    case t.ALL_PARTNERS:
      return { ...state, allPartners: action.payload }
    case t.ALL_UNIVERSITY_SITES:
      return { ...state, allUniversitySites: action.payload }
    case t.ALL_VACANCY:
      return { ...state, allVacancy: action.payload }
    case t.ALL_RECTORS:
      return { ...state, allRectors: action.payload }
    case t.ALL_VIRTUAL_LOBBY:
      return { ...state, allVirtualLobby: action.payload }
    case t.SIDEBAR_CLOSE:
      return { ...state, sidebar: false }
    case t.SIDEBAR_OPEN:
      return { ...state, sidebar: true }
    case t.AUTH:
      return { ...state, authorized: action.payload }
    default:
      return state
  }
}

export default Global

import * as t from '../reducers/types'
import { dispatch } from '../store'
const All_sites = (data) => {
  dispatch({ type: t.ALL_SITES, payload: data })
}
const All_partners = (data) => {
  dispatch({ type: t.ALL_PARTNERS, payload: data })
}
const All_university_sites = (data) => {
  dispatch({ type: t.ALL_UNIVERSITY_SITES, payload: data })
}
const All_vacancy = (data) => {
  dispatch({ type: t.ALL_VACANCY, payload: data })
}
const All_rectors = (data) => {
  dispatch({ type: t.ALL_RECTORS, payload: data })
}
const All_virtual_lobby = (data) => {
  dispatch({ type: t.ALL_VIRTUAL_LOBBY, payload: data })
}
const SidebarOpen = () => dispatch({ type: t.SIDEBAR_OPEN })
const SidebarClose = () => dispatch({ type: t.SIDEBAR_CLOSE })
const AUTH = (data) => dispatch({ type: t.AUTH, payload: data })
export {
  All_sites,
  All_partners,
  All_university_sites,
  All_vacancy,
  All_rectors,
  All_virtual_lobby,
  SidebarOpen,
  SidebarClose,
  AUTH,
}

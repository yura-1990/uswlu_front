import axios_instance from './helpers/axios_instance'
const userAuth = async (router, location) => {
  try {
    const res = await axios_instance.get('user/me')
    if (res.status) {
      if (location.pathname) {
        router.push(location.pathname)
      } else {
        router.push('/')
      }
    }
  } catch (error) {
    localStorage.clear()
    router.push('/login')
    window.location.reload()
  }
}

export { userAuth }

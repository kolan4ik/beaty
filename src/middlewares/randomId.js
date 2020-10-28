export default (store) => (next) => (action) => {
  if (!action.generateId) return next(action)
  next({
    ...action,
    randomId: (Date.now() + Math.floor(Math.random() * 1000000)).toString()
  })
}

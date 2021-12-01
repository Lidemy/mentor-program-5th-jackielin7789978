export const hasCompleted = (items) => {
  if (items.find((item) => item.isDone === true)) return true
  return false
}

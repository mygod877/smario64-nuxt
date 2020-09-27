export const zeroPadding = (number: string | number, count: number) => {
  let zeros = ""
  for (let i = 0; i < count; i++) {
    zeros += "0"
  }
  return `${zeros}${number}`.slice(-count)
}

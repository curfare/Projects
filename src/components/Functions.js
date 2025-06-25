export function degreesToRadians(deg) {
  return (deg * Math.PI) / 180
}

export function preprocessExp(expr) {
  console.log(expr)
  return expr
    .replace(/(sin|cos|tan|ctg)\(([^)]+)\)/gi, (match, func, arg) => {
      if (func === 'ctg') {
        return `1 / Math.tan(${arg} * Math.PI / 180)`
      }
      return `Math.${func}(${arg} * Math.PI / 180)`
    })
    .replace(
      /atg\(([^)]+)\)/gi,
      (match, arg) => `Math.atan(${arg}) * 180 / Math.PI`
    )
}

export function factorial(n) {
  if (n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

export function processSquareRoots(expr) {
  return expr.replace(
    /√\(([^)]+)\)|√(\d+(\.\d+)?)/g,
    (match, group1, group2) => {
      const value = group1 || group2
      return `Math.sqrt(${value})`
    }
  )
}

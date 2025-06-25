import { factorial, preprocessExp, processSquareRoots } from './Functions.js'

const input = document.querySelector('.calculator__input')
const calculator = document.querySelector('.calculator')
const result = document.querySelector('.calculator__result')
const section = document.querySelector('.calculator__section')
const words = ['sin', 'cos', 'tan', 'ctg', 'atg', 'zero']
const words2 = ['xʸ', 'x!', '√', 'π', 'log2', 'lg', 'e', '|x|', 'x²']
let score = 0
section.addEventListener('click', (e) => {
  e.preventDefault()
  let value = e.target.value

  if (!value) {
    return
  }
  if (e.target.value === 'zero') {
    input.value = (Number(input.value) * 0).toString()
    if (isNaN(input.value)) {
      input.value = 0
    }
    result.innerHTML = input.value
    return
  }
  if (e.target.value === 'delete') {
    input.value = input.value.slice(0, -1)
    return
  }
  if (e.target.value === 'x²') {
    input.value = (Number(input.value) ** 2).toString()
    result.innerHTML = input.value
    return
  }
  if (e.target.value === '|x|') {
    input.value = isNaN(Math.abs(input.value))
      ? input.value.replace('NaN', '')
      : Math.abs(input.value)
    result.innerHTML = eval(input.value)
    return
  }
  if (e.target.value === 'lg') {
    input.value = Math.log10(input.value)
    result.innerHTML = input.value
    return
  }
  if (e.target.value === 'log2') {
    input.value = Math.log2(input.value)
    result.innerHTML = input.value
    return
  }
  if (e.target.value === 'π') {
    input.value = Math.PI
    result.innerHTML = Math.PI
    return
  }
  if (e.target.value === 'e') {
    input.value = Math.E
    result.innerHTML = Math.E
    return
  }
  if (e.target.value === 'x!') {
    input.value = factorial(Number(input.value)).toString()
    result.innerHTML = input.value
    return
  }
  if (e.target.value === 'C') {
    input.value = ''
    result.innerHTML = ''

    return
  }
  if (e.target.value === '()') {
    if (score === 0) {
      input.value += '('
      score += 1
    } else {
      input.value += ')'
      score = 0
    }
    return
  }
  if (words.includes(value)) {
    input.value += value + '('
    score += 1
    return
  }
  if (e.target.value === '√') {
    input.value += '√('
    score += 1
    return
  }
  if (e.target.value === '=') {
    try {
      let processedValue = input.value
        .replace(/,/g, '.')
        .replace(/sin|cos|tan|ctg|atg/gi, (match) => match.toLowerCase())
      processedValue = processSquareRoots(processedValue)
      processedValue = preprocessExp(processedValue)
      const evalproc = eval(processedValue)

      input.value = evalproc.toString()
      result.innerHTML = evalproc.toString()
    } catch (e) {
      alert('Ошибка ввода!')
      input.value = ''
      result.innerHTML = ''
    }
    return
  }

  input.value += value

  try {
    const processedExp = preprocessExp(input.value)
    const evalResult = eval(processedExp)
    result.innerHTML = evalResult.toString()
  } catch {
    result.innerHTML = ''
  }
})

input.addEventListener('keydown', (e) => {
  console.log(e.key)
  if (e.key === 'Enter') {
    e.preventDefault()
    try {
      let processedValue = input.value
        .replace(/,/g, '.')
        .replace(/sin|cos|tan|ctg|atg/gi, (match) => match.toLowerCase())
      processedValue = processSquareRoots(processedValue)
      processedValue = preprocessExp(processedValue)
      const evalResult = eval(processedValue)
      input.value = evalResult.toString()
      result.innerHTML = evalResult.toString()
    } catch (e) {
      alert('Ошибка ввода!')
      input.value = ''
      result.innerHTML = ''
    }
    return
  }
})
input.addEventListener('input', (e) => {
  if (!input.value) {
    return
  }
  if (!words.includes(e.target.value)) {
    input.value = input.value.replace(/[^0-9+\-*%()/]/g, '')
  }
  try {
    let processedValue = input.value
      .replace(/,/g, '.')
      .replace(/sin|cos|tan|ctg|atg/g, (match) => match.toLowerCase())
    processedValue = processSquareRoots(processedValue)
    processedValue = preprocessExp(processedValue)
    const evalResult = eval(processedValue)
    result.innerHTML = evalResult.toString()
    result.innerHTML = isNaN(evalResult) ? 'ERROR' : evalResult.toString()
  } catch {
    result.innerHTML = ''
  }
})

input.addEventListener('paste', (e) => {
  e.preventDefault()
})

const list = document.querySelector('.main__list')
let allChampionsData = []
console.log(allChampionsData)
fetch('https://ddragon.leagueoflegends.com/cdn/12.6.1/data/ru_RU/champion.json')
  .then((response) => response.json())
  .then((data) => {
    for (let champName in data.data) {
      allChampionsData.push(data.data[champName])
    }

    renderSingleCard(0)
  })

let currentCardIndex = 0

function renderSingleCard(index) {
  if (index >= allChampionsData.length) {
    list.innerHTML =
      '<p style="text-align: center; font-size: 3rem; color: #555770;">Чемпионы закончились!</p>'
    return
  }

  const champion = allChampionsData[index]
  const img = `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${champion.image.full}`

  list.innerHTML = ''

  const cardElement = document.createElement('li')
  cardElement.classList.add('main__list--item')
  cardElement.innerHTML = `
    <img style="display: block; margin: 0 auto; width: 100%; border-radius: 8px;" src="${img}" alt="${champion.name}"/>
    <h3 style="text-align: center">${champion.name}</h3>
    <h4 style="text-align: center">${champion.title}</h4>
    <p style="padding:8px;border: 2px solid rgb(100, 149, 237); border-radius: 8px; background-color: rgb(245, 245, 250); overflow-y: auto; max-height: 120px; line-height: 1.4;">${champion.blurb}</p>
    <div class="main__list--block">
      <button class="main__list--button dislike">Дизлайк</button>
      <button class="main__list--button like">Лайк</button>
    </div>
  `
  list.appendChild(cardElement)
  setTimeout(() => {
    cardElement.classList.add('visible')
  })
  const buttonDislike = cardElement.querySelector('.dislike')
  const buttonLike = cardElement.querySelector('.like')

  buttonDislike.addEventListener('click', (e) => {
    cardElement.classList.add('visibleDislike')
    setTimeout(() => {
      e.preventDefault()
      currentCardIndex++
      renderSingleCard(currentCardIndex)
    }, 2000)
  })

  buttonLike.addEventListener('click', (e) => {
    cardElement.classList.add('visibleLike')
    setTimeout(() => {
      e.preventDefault()
      currentCardIndex++
      renderSingleCard(currentCardIndex)
    }, 2000)
  })
}

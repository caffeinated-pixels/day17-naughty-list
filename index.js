const niceList = document.getElementById('nice-list')
const naughtyList = document.getElementById('naughty-list')
const sortBtn = document.getElementById('sort-btn')
sortBtn.addEventListener('click', sort)

const sorteesArr = [
  {
    name: 'David',
    hasBeenGood: false,
  },
  {
    name: 'Del',
    hasBeenGood: true,
  },
  {
    name: 'Valerie',
    hasBeenGood: false,
  },
  {
    name: 'Astrid',
    hasBeenGood: true,
  },
]

function sort() {
  for (const person of sorteesArr) {
    const listItem = document.createElement('li')
    listItem.textContent = person.name

    if (person.hasBeenGood) {
      niceList.appendChild(listItem)
    } else {
      naughtyList.appendChild(listItem)
    }
  }
}

// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.

// place files you want to import through the `$lib` alias in this folder.


let emojisList = [
  "😃",
  "😄",
  "😆",
  "😅",
  "🤣",
  "😂",
  "🙂",
  "🙃",
  "😉",
  "😊",
  "😇",
  "🥰",
  "😍",
  "🤩",
  "😘",
  "😗",
  "😚",
  "😙",
  "🥳",
  "🤯"
]



function randomNumber(max) {
  let rand = Math.floor(Math.random() * max)
  return rand
}

function randomNumbersList(n) {
  let i = 0
  let nums = []
  while (i < n) {
    let rand = randomNumber(20)
  
    if (!nums.includes(rand)) {
      nums.push(rand)
      i++
    } 
  }
  return nums
}

function randomEmojis(number) {
  let emojis = []
  let indeces = randomNumbersList(number)
  indeces.forEach(index => {
    emojis.push(emojisList[index])
  })
  return emojis
}

function doubleEmojis(array) {
  array.forEach(emoji => {
    array.push(emoji)
  })
  return array
}

function shuffleEmojis(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function makeEmojis(number) {
  let myEmojis = randomEmojis(number / 2)
  let moreEmojis = doubleEmojis(myEmojis)
  let randEmojis = shuffleEmojis(moreEmojis)
  return randEmojis
}


function makeCards(number) {
  let cards = []
  let emojis = makeEmojis(number)
  emojis.forEach(emoji => {
    let card = {
      id: Math.random(),
        emoji: emoji,
        faceUp: false,
        found: false
    }
    cards.push(card)
  });
  console.log(cards);
}

makeCards(16)






  

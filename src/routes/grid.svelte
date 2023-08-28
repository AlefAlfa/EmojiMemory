<script>
import Card from "./card.svelte";
import { createEventDispatcher } from "svelte";

export let cards;
let flipped = []

const dispatch = createEventDispatcher();

const handleFlip = (flip) => {
  let temp = []
  console.log(flip.detail)
  flipped = [...flipped, flip.detail.emoji]
  console.log(flipped);
  if (flipped.length > 1) {
  setTimeout(() => {
      if (flipped[0] === flipped[1]) {
        console.log(flipped[0], flipped[1])
        console.log("you found a pair")
        cards.forEach(card => {
          if (card.emoji === flipped[0])
          card.found = true
        })
        
      }

      flipped = []
      cards.forEach(card => {
        card.faceUp = false
      })

      let cardsFound = []
      cards.forEach(card => {
        if (card.found) {
          cardsFound = [...cardsFound, card]
        }
      })
      if (cardsFound.length === cards.length)  {
        dispatch("foundAll", true)
      }

    }, 2000)
  }
}
  
</script>

<div class="grid grid-cols-4 grid-rows-4 gap-4">
  {#each cards as card (card.id)}
    <Card on:flip={handleFlip} {card} flipped={flipped.length} />
  {/each} 
</div>
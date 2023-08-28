<script>
  import Grid from "./grid.svelte";
  import { makeEmojis } from "$lib/index"

  export let cards = []
  let foundAll = false

  function handleFoundAll(event) {
    foundAll = true
  }

  function makeCards() {
    cards = []
    let emojis = makeEmojis(16)
    emojis.forEach(emoji => {
      let card = {
        id: Math.random(),
        emoji: emoji,
        faceUp: false,
        found: false
      }
      cards = [...cards, card]
    });
    console.log(cards);
  }
</script>



{#if cards.length !== 0 && foundAll == false}
  <div class="flex h-screen items-center justify-center">
    <Grid cards={cards} on:foundAll={handleFoundAll}/>
  </div>

{:else if foundAll === true}
  <div class="flex w-screen items-center justify-center mt-20">
    <div class="flex flex-col x-screen">
      <h1 class="text-3xl font-bold">🎉You Won!!!🎉</h1>
    </div>
  </div>
  <div class="flex justify-center mt-20">
    <button on:click={makeCards} class="py-2 px-5 bg-gray-200 rounded-lg">New Game</button>

  </div>

{:else}
  <div class="flex w-screen items-center justify-center mt-20">
    <div class="flex flex-col x-screen">
      <h1 class="text-6xl font-bold">😂Emoji Memory😂</h1>
    </div>
  </div>
  <div class="flex justify-center mt-20">
    <button on:click={makeCards} class="py-2 px-5 bg-gray-200 rounded-lg">New Game</button>
  
  </div>
    
{/if}

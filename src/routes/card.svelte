<script>
import { createEventDispatcher } from "svelte";
  
  export let card
  export let flipped = 0

  const dispatch = createEventDispatcher()

  function flip() {
    card.faceUp = !card.faceUp
    dispatch("flip", card)
  }
</script>

{#if card.found}
  <div class="h-40 aspect-square bg-opacity-0 ">

  </div>
{:else if card.faceUp}
  <button class="h-40 aspect-square border border-gray-300 shadow-lg rounded-lg ">
    <div class="flex h-full justify-center items-center text-5xl" >{card.emoji}</div>
  </button>
{:else if flipped > 1}
  <button class="h-40 aspect-square border border-gray-300 shadow-lg rounded-lg ">
    <img src="/img/card.png" alt="card" class="h-full w-full object-cover shadow-lg rounded-lg">
  </button>
{:else}
  <button class="h-40 aspect-square border border-gray-300 shadow-lg rounded-lg " on:click={flip}>
    <img src="/img/card.png" alt="card" class="h-full w-full object-cover shadow-lg rounded-lg">
  </button>
{/if}

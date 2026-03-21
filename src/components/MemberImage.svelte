<script>
  import Modal from "./Modal.svelte";

  let { imageSource, name, bio } = $props();

  let showModal = $state(false);
</script>

<button onclick={() => (showModal = true)} class="cursor-pointer">
  <div
    class="w-60 h-80 flex flex-col items-start justify-between overflow-hidden hover:scale-110 hover:shadow-md hover:transition-all duration-150 ease-in-out rounded-md border-2 border-black p-4"
  >
    <img
      src={imageSource}
      alt={`Image of ${name}`}
      class="object-contain w-full h-64"
    />

    <div class="text-left px-2 py-1 text-xl">
      {name}
    </div>
  </div>
</button>

<Modal bind:showModal>
  <img src={imageSource} alt={`Image of ${name}`} class="w-fit h-auto" />
  <h1 class="text-2xl mt-2">{name}</h1>
  <hr class="border-2 border-black" />
  <p class="mt-2">{bio}</p>
</Modal>

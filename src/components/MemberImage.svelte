<script>
  import Modal from "./Modal.svelte";

  let { imageSource, name, bio } = $props();

  let showModal = $state(false);
</script>

<button onclick={() => (showModal = true)} class="cursor-pointer">
  <img
    src={imageSource}
    alt={`Image of ${name}`}
    class="object-contain w-72 h-auto"
  />
</button>

<Modal bind:showModal>
  <img src={imageSource} alt={`Image of ${name}`} class="w-fit h-auto" />
  <h1 class="text-2xl mt-2">{name}</h1>
  <hr class="border-2 border-black" />
  <p class="mt-2">{bio}</p>
</Modal>

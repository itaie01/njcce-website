<script>
  import Modal from "./Modal.svelte";

  let { imageSource, name, bio } = $props();

  let showModal = $state(false);
</script>

<button onclick={() => (showModal = true)}>
  <img
    src={imageSource}
    alt={`Image of ${name}`}
    class="object-contain w-72 h-auto"
  />
</button>

<Modal bind:showModal>
  <img src={imageSource} alt={`Image of ${name}`} />
  <h1>{name}</h1>
  <p>{bio}</p>
</Modal>

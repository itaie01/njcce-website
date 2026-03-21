<script>
  import CaretRight from "phosphor-svelte/lib/CaretRight";

  let { title = "Recording", src = "" } = $props();
  let open = $state(false);

  function getYouTubeId(url) {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    );
    return match ? match[1] : null;
  }

  const youtubeId = $derived(getYouTubeId(src));
  const isYouTube = $derived(!!youtubeId);
</script>

<div class="wrapper">
  <button
    class="toggle hover:bg-[#F3BA1A] hover:text-[#F9FAF9]"
    onclick={() => (open = !open)}
  >
    <span class="arrow" class:rotated={open}>
      <CaretRight size={14} weight="bold" />
    </span>
    <span class="title">{title}</span>
  </button>
  <hr />
  {#if open}
    {#if isYouTube}
      <div class="embed-wrapper">
        <iframe
          src="https://www.youtube.com/embed/{youtubeId}"
          {title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    {:else}
      <audio controls {src} class="player"></audio>
    {/if}
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 20rem;
  }

  .toggle {
    display: flex;
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 0.75rem 0.5rem;
    border-radius: 4px;
    width: 100%;
    transition: background 0.15s ease;
  }

  .toggle:hover {
    background: #f3ba1a;
  }

  .toggle:hover .title {
    color: #fff;
  }

  .toggle:hover .arrow {
    color: #fff;
  }

  .wrapper:hover hr {
    border-color: #fff;
  }

  .arrow {
    color: #999;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;
  }

  .arrow.rotated {
    transform: rotate(90deg);
  }

  .title {
    font-size: 1.05rem;
    font-weight: 400;
    color: #1a1a1a;
    letter-spacing: 0.01em;
  }

  hr {
    border: none;
    border-top: 2.5px solid #1a1a1a;
    margin: 0 0 0.85rem;
  }

  .player {
    width: 100%;
  }

  .embed-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
  }

  .embed-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
</style>

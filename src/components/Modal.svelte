<script>
  import X from "phosphor-svelte/lib/X";
  let {
    showModal = $bindable(),
    imageSrc = "",
    name = "",
    bio = "",
  } = $props();
  let dialog = $state();

  $effect(() => {
    if (showModal) dialog.showModal();
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialog}
  onclose={() => (showModal = false)}
  onclick={(e) => {
    if (e.target === dialog) dialog.close();
  }}
>
  <div class="header">
    <button class="close" onclick={() => dialog.close()}><X size={16} /></button
    >
  </div>

  <div class="body">
    <img class="profile-img" src={imageSrc} alt={name} />
    <p class="name">{name}</p>
    <p class="bio">{bio}</p>
  </div>

  <div class="footer">
    <button class="close-btn" onclick={() => dialog.close()}>Close</button>
  </div>
</dialog>

<style>
  dialog {
    background: #fff;
    border: 0.5px solid #ddd;
    border-radius: 12px;
    padding: 0;
    max-width: 460px;
    width: calc(100vw - 2rem);
    max-height: 80vh;
    margin: auto;
    overflow: hidden;
    box-shadow: none;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  dialog[open] {
    animation: rise 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  dialog[open]::backdrop {
    animation: fade 0.2s ease;
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 0.6rem 0.8rem 0;
    background-color: #fefdfd;
  }

  .close {
    background: none;
    border: none;
    cursor: pointer;
    color: #888;
    display: flex;
    align-items: center;
    padding: 2px;
    transition: color 0.15s;
  }

  .close:hover {
    color: #111;
  }

  .body {
    padding: 0.5rem 1.4rem 1.2rem;
    overflow-y: auto;
    max-height: calc(80vh - 80px);
    background-color: #fefdfd;
  }

  .body::after {
    content: "";
    display: table;
    clear: both;
  }

  .profile-img {
    float: left;
    width: auto;
    height: 260px;
    object-fit: cover;
    object-position: top;
    border-radius: 6px;
    margin: 0 16px 0 0;
    border: 0.5px solid #e5e5e5;
    display: block;
  }

  .name {
    font-size: 24px;
    font-weight: 500;
    color: #111;
    margin: 0 0 0.4em;
    line-height: 1.3;
  }

  .bio {
    font-size: 16px;
    line-height: 1.75;
    color: #555;
    margin: 0;
  }

  .footer {
    padding: 0.25rem 1.4rem 0.25rem 1.4rem;
    border-top: 0.5px solid #e5e5e5;
    display: flex;
    justify-content: flex-end;
    background-color: #fefdfd;
  }

  .close-btn {
    background: none;
    border: 0.5px solid #ddd;
    border-radius: 8px;
    padding: 6px 16px;
    font-size: 13px;
    cursor: pointer;
    color: #666;
    transition: background 0.15s;
  }

  .close-btn:hover {
    background: #f5f5f5;
  }
</style>

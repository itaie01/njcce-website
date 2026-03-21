<script>
  import X from "phosphor-svelte/lib/X";
  let { showModal = $bindable(), children } = $props();
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
    <span class="title">Michelle Teplitz</span>
    <button class="close" onclick={() => dialog.close()}><X size={16} /></button
    >
  </div>

  <div class="body">
    {@render children?.()}
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
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem 1.4rem;
    border-bottom: 0.5px solid #e5e5e5;
  }

  .title {
    font-size: 15px;
    font-weight: 500;
    color: #111;
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
    padding: 1.2rem 1.4rem;
    overflow-y: auto;
    max-height: calc(80vh - 110px);
    font-size: 14px;
    line-height: 1.75;
    color: #555;
  }

  .footer {
    padding: 0.85rem 1.4rem;
    border-top: 0.5px solid #e5e5e5;
    display: flex;
    justify-content: flex-end;
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

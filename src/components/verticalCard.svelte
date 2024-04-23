<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="verticalCard" class:active={$hover} on:mouseover={() => hover.set(true)} on:mouseout={() => hover.set(false)}>
  <div class="iconContainer" class:active={$hover}>
    <img src={image} class="icon" alt="logo"/>
  </div>
  <div class="content" class:active={$hover}>
    <div class="line"></div>
    <p class="desc">{description}</p>
  </div>
  <h1 class="headline" class:active={$hover}>{title}</h1>
</div>

<script lang="ts">
  import { writable } from "svelte/store";
  export let title: string;
  export let description: string;
  export let image: string;
  const hover = writable(false);
</script>

<style>
  @media (min-width: 768px) {
      .verticalCard {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 250px;
    height: 350px;
    padding: 28px 20px;
    background-color: var(--bg-color-secondary);
    border-radius: 16px;
    overflow: hidden;
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: none;
    cursor: pointer;
  }

  .verticalCard.active {
    background-color: var(--primary-color);
    box-shadow: 0 0 20px rgba(57, 167, 255, 0.8);
  }

  .iconContainer {
    position: absolute;
    top: 20px;
    left: 30px;
    transition: transform 0.3s ease-in-out;
  }
  
  .iconContainer.active {
    transform: translateY(-100%);
  }

  .icon {
    width: 200px;
    height: auto;
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
    padding: 20px;
  }

  .content.active {
    transform: translateY(0);
  }

  .headline {
    font-size: 24px;
    font-weight: 550;
    color: var(--text-color);
    transition: transform 0.3s ease-in-out;
  }

  .headline.active {
    transform: translateY(-200%);
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: var(--text-color);
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .content.active .line {
    transform: scaleX(1);
    transition-delay: 0.2s;
  }

  .desc {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-color);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .content.active .desc {
    opacity: 1;
    transition-delay: 0.3s;
  }
  } 

  @media (max-width: 480px) {
  .verticalCard {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 350px;
    padding: 28px 20px;
    background-color: var(--bg-color-secondary);
    border-radius: 16px;
    overflow: hidden;
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: none;
    cursor: pointer;
  }

  .verticalCard.active {
    background-color: var(--primary-color);
    box-shadow: 0 0 20px rgba(57, 167, 255, 0.8);
  }

  .iconContainer {
    position: absolute;
    top: 20px;
    left: 30px;
    transition: transform 0.3s ease-in-out;
  }
  
  .iconContainer.active {
    transform: translateY(-100%);
  }

  .icon {
    width: 100%;
    height: 220px;
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
    padding: 20px;
  }

  .content.active {
    transform: translateY(0);
  }

  .headline {
    font-size: 24px;
    font-weight: 550;
    color: var(--text-color);
    transition: transform 0.3s ease-in-out;
  }

  .headline.active {
    transform: translateY(-200%);
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: var(--text-color);
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .content.active .line {
    transform: scaleX(1);
    transition-delay: 0.2s;
  }

  .desc {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-color);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .content.active .desc {
    opacity: 1;
    transition-delay: 0.3s;
  }
  }
</style>
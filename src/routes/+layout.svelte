<div class="navBox">
  {#if screenWidth !== undefined && screenWidth <= 768}
  <div class={$mobileNavOpen ? "mobileNavBar" : "mobileNavBarClosed"}>

      <div class="sidebarHeader">
        <a href="/">
          <p class="logo">digitaluzb</p>
        </a>
         <!-- svelte-ignore a11y-click-events-have-key-events -->
         <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
         <img class="close" src="/close.svg" alt="close" on:click={()=> {
            mobileNavOpen.set(false)
          
         }}/>
      </div>
       <div class='mobileNavs'>
         <a href="/darslar">
          <p>Darslar</p>
        </a>
         <p>Loyiha Haqida</p>
       </div>

       <div class="pageTopics">
         {#if course}
         {#each course.topics as topic}
         <a href={`/${course.url}/${topic.url}`}>
          <p class={topic.url === $page.params.topicName ? 'selectedTopic' : ''}>
            {topic.title}
          </p>
        </a>
       
       {/each}
         {/if}
       </div>
     </div>  
  {/if}


<div class='navContainer'>
  {#if screenWidth !==undefined && screenWidth > 768}
    <div class='logo'>
      <a href="/">
        <p class="logo">digitaluzb</p>
      </a>
    </div>
    {:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img class="menu" src="/menu.svg" alt="menu" on:click={()=> {
      mobileNavOpen.set(true)
    }}/>
  {/if}
  <div class='searchWithItems'>
    <input class="searchBar" type="text" placeholder='Izlash...'/>
    {#if screenWidth !== undefined && screenWidth > 768}
      <div class='navItems'>
      {#if $initialMode == 'dark'}
      <button class="toggleButton">
        <img src="/images/moon.svg" alt="sun"/>
      </button>
      {/if}

      {#if $initialMode == 'light'}
        <button class="toggleButton">
          <img src="/images/sun.svg" alt="sun"/>
        </button>
      {/if}
        <a href='/darslar'>
          <p>Darslar</p>
        </a>
        <p>Loyiha Haqida</p>
    </div>
    {/if}

  </div>

</div>
</div>
<div class="pageContent">
  <slot/>
</div>

<script lang='ts'>
	import { onMount } from "svelte";
  import "../app.css"
	import type { CourseType } from "../data/courseTypes";
	import { courses } from "../data/courses";
	import { page } from "$app/stores";
	import { writable } from "svelte/store";
  let screenWidth: number;

  const mobileNavOpen = writable(false);
  const initialMode = writable(document.body.getAttribute('mode'))

  let course: CourseType | undefined;

  function toggleMode(mode:string) {
        document.body.setAttribute('mode', mode);
    }
  onMount(()=> {
      let slug = $page.params.courseName;
      course = courses.find((course:CourseType) => course.url === slug);

  })


</script>

<svelte:window bind:innerWidth={screenWidth} />
<style>
  @media (max-width:768px) {
    .navBox {
      top: 0;
      left: 0;
      width: 100%;
      height: fit-content;
      position: sticky;
      border-bottom: 1px solid #484646;
      background-color: #080D11;
      z-index: 3;
    }

    .mobileNavBar {
      z-index: 5;
      background-color: #080808;
      position: absolute;
      width: 85%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 20px;
      left: 0;
      border-right: 1px solid #484646;
      transition: ease all 0.5s;
    }

    .mobileNavBarClosed {
      left:-100%;
      z-index: 5;
      background-color: #080808;
      position: absolute;
      width: 85%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 20px;
      border-right: 1px solid #484646;
      transition: ease-in-out 0.4s all;
    }

    .sidebarHeader {
      z-index: 6;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .selectedTopic {
        opacity: 1;
        padding: 10px;
        border-radius: 8px;
        color: #39A7FF;
        font-weight: 600;
        background-color: #122635;
    }

    .navContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
    }

    .searchWithItems {
      display: flex;
      flex-direction: row;
      width: auto;
      justify-content: space-between;
    }

    .logo {
      width: 180px;
    }

    .searchBar {
      width: 220px;
      padding: 16px;
      height: 32px;
      border: 1px solid #484646;
      background-color: transparent;
      border-radius: 8px;
    }

    .navItems {
      display: none;
      flex-direction: row;
      align-items: center;
      gap: 36px;
    }

    .pageContent {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between ;
      
    }

    p {
      color: white;
      font-size: 16px;
      padding: 10px;
    }

    a {
      text-decoration: none;
    }

  }

  @media (min-width:768px) {
    
  .navBox {
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    position: sticky;
    border-bottom: 1px solid #48464672;
    background-color: #080D11;
    position: fixed;
    z-index: 4;
  }

 .navContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 60px;
  
  } 

  .searchWithItems {
    display: flex;
    flex-direction: row;
    width: 900px;
    justify-content: space-between;
  }

  .logo {
    width: 180px;
  }

    .searchBar {
      width: 384px;
      padding: 16px;
      height: 36px;
      border: 1px solid #484646;
      background-color: transparent;
      border-radius: 8px;
  }


  .navItems {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 36px;
  }

  

  .pageContent {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }


  p {
    color: white;
    font-size: 14px;
  }

  
  a {
      text-decoration: none;
    }
  }
</style>


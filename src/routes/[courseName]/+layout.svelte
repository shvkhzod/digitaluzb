{#if $html !=='Error fetching file'}
<div class='course'>
   {#if screenWidth !== undefined && screenWidth > 768}
   <div class="courseSideBars">
    <div class="innerBar">
        <p class="topicHeading">{convertToRegular(data.courseName)}</p>
        {#each $html.split('\n') as line}
        {#if line.trim().length !== 0} <!-- Check if the trimmed line is not empty -->
          <a href={`/${data.courseName}/${convertToDashedWords(line)}`}>
            <p class={convertToDashedWords(line) === $page.params.topicName ? 'selectedTopic' : ''}>
              {line}
            </p>
          </a>
        {/if}
      {/each}
      
 
    </div>
     
 
 </div>
   {/if} 
     <div class='courseContent'>
        <slot/>
     </div>
</div>

{:else}
    <div class="course">
        <div class="courseSideBars">
            <div class="innerBar">
               <p>404</p>
            </div>
    </div>
    </div>
{/if}



<script lang='ts'>
	import { onMount } from "svelte";
    import { page } from '$app/stores';
    import type {CourseType} from '../../data/courseTypes'
    import {courses} from '../../data/courses'
	import { writable } from "svelte/store";
	import { convertToDashedWords, convertToRegular } from "$lib/utils";
	import { marked } from "marked";
    let screenWidth: number;
    let course: CourseType | undefined;
    export let data; 
    const html = writable<string>('')
    


  
  
    onMount(async()=> {
    console.log('data', data.courseName)
    const filePath = `/darslar/${data.courseName}/mundarija.md`;
     
    try {
      const response = await fetch(filePath);
      const markdown = await response.text();

      const compiled = await marked(markdown);
      console.log(compiled)
      html.set(markdown);
    } catch (err) {
      console.error(`Error fetching file ${filePath}:`, err);
      html.set('Error fetching file');
    }
    })
</script>
<svelte:window bind:innerWidth={screenWidth} />
<style>

   @media (max-width: 768px) {
    .course {
        display: flex;
        flex-direction: row;
         align-items: flex-start; 
        justify-content: center;
    }

    .courseContent {
        min-height: 100vh;
        position: relative; /* Add padding to prevent content from being hidden under sidebar */
    }

 
    .courseSideBars {
        top: 20px;
        position: sticky;
        width: 180px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 8px;
        border-right: 1px solid #484646;
    }

    .innerBar {
        padding: 20px 8px;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow-y: scroll;
        height: 100vh;

    }

   p {
        opacity: 1;
        padding: 12px;
        border-radius: 8px;
        color: var(--text-color);
        font-weight: 550;
   }

    .selectedTopic {
        opacity: 1;
        padding: 12px;
        border-radius: 8px;
        color: var(--text-color);
        font-weight: 600;
        background-color: var(--secondary-color);
    }

    .topicHeading {
        font-weight: 550;
        opacity: 1;
        color: var(--text-color)
    } 

   

    /* Customize the scrollbar */
.innerBar::-webkit-scrollbar {
    display: block;
    width: 8px; /* Set the width of the scrollbar */
}

.innerBar::-webkit-scrollbar-track {
    background-color: #080808; /* Set the background color of the scrollbar track */
}

.innerBar::-webkit-scrollbar-thumb {
    background-color: #080808; /* Set the color of the scrollbar thumb */
    border-radius: 6px; /* Set the border radius of the scrollbar thumb */
}


.innerBar::-webkit-scrollbar-track-piece:start {
    background-color: transparent;
}

.innerBar::-webkit-scrollbar-track-piece:end {
    background-color: transparent;
    margin-bottom: 600px; /* Set the color of the scrollbar thumb on hover */
}
   }

   @media (min-width:768px) {
    .course {
        display: flex;
        flex-direction: row;
        align-items: flex-start; 
        justify-content: center;
        background-color: var(--bg-color);
    }

    .courseContent {
        min-height: 100vh;
        position: relative;
        padding-left: 20px; /* Add padding to prevent content from being hidden under sidebar */
    }

    .selectedTopic {
        opacity: 1;
        padding: 12px;
        border-radius: 8px;
        color: var(--text-color);
        font-weight: 600;
        background-color: var(--secondary-color);
        font-size: 14px;
    }

    .courseSideBars {
        position: fixed;
        left: 0;
        top: 0;
        margin-top: 64px;
        margin-left: 44px;
        width: 288px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: var(--bg-color);
    }

    .innerBar {
        padding: 20px 8px;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 2px;
        overflow-y: scroll;
        min-height: 100vh;
        background-color: var(--bg-color);

    }
    p {
        opacity: 0.7;
        padding: 12px;
        border-radius: 8px;
        color: var(--text-color-secondary);
        font-weight: 500;
        font-size: 14px;
     
   }

    .topicHeading {
        font-weight: 600;
        opacity: 1;
        color: var(--text-color);
    } 

    a {
        text-decoration: none;
    }

    /* Customize the scrollbar */
.innerBar::-webkit-scrollbar {
    display: block;
    width: 8px; /* Set the width of the scrollbar */
}

.innerBar::-webkit-scrollbar-track {
    background-color: var(--bg-color); /* Set the background color of the scrollbar track */
}

.innerBar::-webkit-scrollbar-thumb {
    background-color: var(--bg-color);/* Set the color of the scrollbar thumb */
    border-radius: 6px; /* Set the border radius of the scrollbar thumb */
}


.innerBar::-webkit-scrollbar-track-piece:start {
    background-color: transparent;
}

.innerBar::-webkit-scrollbar-track-piece:end {
    background-color: transparent;
    margin-bottom: 600px; /* Set the color of the scrollbar thumb on hover */
}
   }
</style>
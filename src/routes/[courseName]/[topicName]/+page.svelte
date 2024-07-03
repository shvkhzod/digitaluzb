<script lang='ts'>
    import { onMount } from 'svelte';
    import { convertToRegular, extractSummary } from '$lib/utils';
    import { marked } from 'marked';
    import '../../../components/tip.js';
    import Prism from '$lib/prism';

    export let data;

    let screenWidth: number;
    let html: Promise<string> | string ;
    let htmlSummary: Promise<string> | string ;

    $: html = marked(data.markdown);
    $: extractSummary(marked(data.markdown)).then((summary) => {
        htmlSummary = summary;
    });


    onMount(async() => {
        setTimeout(() => {
            Prism.highlightAll();
        }, 1);
    });
</script>

<layout>
    <div class="topicWrap">
        <div class='topicContainer'>
            <div class='crumbs'>
                {convertToRegular(data.courseName)}
            </div>
            {@html html}
        </div>
        <div class="topicSummary">
            {@html htmlSummary}
        </div>
    </div>
</layout>

<svelte:window bind:innerWidth={screenWidth} />


<style>
 @media (min-width:768px) {

   
    :global(pre[class*="language-"]) {
      background-color: var(--secondary-color);
      padding: 20px;
      border-radius: 20px;
      margin-top: 20px;

    }

    :global(:not(pre) > code[class*="language-"]) {
      padding: 2px 4px;
      border-radius: 4px;
    
    }

    :global(code[class*="language-"]),
    :global(pre[class*="language-"]) {
      color: var(--text-color);
      text-shadow: none;
    }
    
    :global(pre[class*="language-"] .token.tag),
    :global(pre[class*="language-"] .token.selector),
    :global(pre[class*="language-"] .token.attr-name) {
    color: var(--primary-color);
    }

    :global(pre[class*="language-"] .token.attr-value) {
    color: var(--attr-value-color, #ff7b00);
    }
    .topicWrap {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .topicContainer {
        display: flex;
        flex-direction: column;
        width:780px;
        padding: 96px 36px;
    }
    .topicContainer :global(h1) {
        color: var(--text-color);
        font-size: 28px;
        margin-bottom: 8px;
    }

    .topicContainer :global(h3) {
        margin-top: 40px;
        color: var(--text-color);
    }

    .topicSummary :global(h3) {
        color: var(--text-color-secondary);
        font-size: 14px;
        font-weight: 500;
        margin-top: 8px;

    }

    .topicContainer :global(p) {
        color: var(--text-color-secondary)
    }

    .topicContainer :global(img) {
        width: 100%;
        border-radius: 20px;
        margin-top: 20px;
    }

    .topicContainer :global(.footer) {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 80px;
        flex-direction: row;
    }

    .subheading {
        color: white;
        font-size: 20px;
        font-weight: 550;
        margin-bottom: 4px;
    }

    p {
        color: var(--text-color-secondary);
        opacity: 1;
        font-size: 16px;
        font-weight: 400;
    }




    .topicSummary {
        margin-top: 64px;
        margin-right: 28px;
        top: 0;
        right: 0;
        position: fixed;
        display: flex;
        flex-direction: column;
        width: 304px;
        min-height: 100vh;
        padding-top: 20px;
        padding-left: 20px;
    }

    .topicSummary p {
        padding: 6px;
        font-size: 14px;
    }

    .crumbs {
        color: var(--primary-color);
        font-size: 14px;
        font-weight: 600;
    
    }

    .contentImage {
        border-radius: 20px;
    }
    
    :global(li) {
        color: var(--text-color-secondary);
        opacity: 1;
        font-size: 16px;
        font-weight: 400;
        
      
    }

    :global(ul) {
        margin-top: 8px;
        padding-left: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px
        
    }

    :global(strong) {
        opacity: 1;
        color:var(--text-color);
    }

    :global(ol) {
        margin-top: 8px;
        padding-left: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px
        
    }


    :global(a) {
        color: var(--primary-color)
    }

 }

 @media (max-width: 768px) {
    
    :global(pre[class*="language-"]) {
      background-color: var(--secondary-color);
      padding: 20px;
      border-radius: 20px;
      margin-top: 20px;

    }

    :global(:not(pre) > code[class*="language-"]) {
        
      padding: 2px 4px;
      border-radius: 4px;
    
    }

    :global(code[class*="language-"]),
    :global(pre[class*="language-"]) {
      color: var(--text-color);
      text-shadow: none;
    }
    
    :global(pre[class*="language-"] .token.tag),
    :global(pre[class*="language-"] .token.selector),
    :global(pre[class*="language-"] .token.attr-name) {
    color: var(--primary-color);
    }

    :global(pre[class*="language-"] .token.attr-value) {
    color: var(--attr-value-color, #ff7b00);
    }

    .topicWrap {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .topicContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px;
        overflow: scroll;
    }
    .heading {
        color: var(--text-color);
        font-size: 28px;
        font-weight: 550;
        margin-bottom: 4px;
    }

    .subheading {
        color: var(--text-color);
        font-size: 20px;
        font-weight: 550;
        margin-bottom: 4px;
    }

    p {
        color: var(--text-color-secondary);
        opacity: 1;
        font-size: 16px;
        font-weight: 400;
    }

    

    .topicSummary {
        display: none;
        flex-direction: column;
        width: 180px;
        min-height: 100vh;
        padding-top: 20px;
        padding-left: 20px;
    }

    .crumbs {
        color: var(--primary-color);
        font-size: 16px;
        font-weight: 600;
    
    }

    
    .contentImage {
        width: 100%;
        border-radius: 20px;
    }


    .topicContainer :global(h1) {
        color: var(--text-color);
        font-size: 28px;
    }

    .topicContainer :global(h3) {
        margin-top: 40px;
        color: var(--text-color);
    }

    .topicContainer :global(p) {
        color: var(--text-color-secondary)
    }

    .topicContainer :global(img) {
        width: 100%;
        border-radius: 20px;
        margin-top: 20px;
    }

}

 
</style>
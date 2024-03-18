<div class='programmingCourse'>
    <h1 class='heading'>Umumiy resurslar ro'yhati</h1>
    <div class='searchFilters'>
        <button 
          on:click={() => searchFilter.set('dasturlash')}
          class={$searchFilter == 'dasturlash' ? 'active' : ''}
        > 
        Dasturlash
        </button>

        <button 
        on:click={() => searchFilter.set('dizayn')}
        class={$searchFilter == 'dizayn' ? 'active' : ''}
      > 
      Dizayn
      </button>

      <button 
      on:click={() => searchFilter.set('marketing')}
      class={$searchFilter == 'marketing' ? 'active' : ''}
    > 
    Marketing
    </button>

    </div>
    {#if $searchFilter == 'dasturlash'}
    <div class="cardList">
        <a href="/kompyuter-asoslari/kompyuter-haqida">
            <Card heading='Kompyuter Asoslari' subheading="Kompyuterlar haqida aniq va chuqurroq bilimga ega bo'ling" img='settings'/>
        </a>
        <a href="/webAsoslari/internet">
            <Card heading='Web Dasturlash Asoslari' subheading="Dizayn olamiga shong'ishdan oldin eng kerakli fundamental bilimlarni ko'rib chiqing  " img='design'/>
        </a>
       </div>
    {/if}

    {#if $searchFilter == 'dizayn'}
    <Card heading='Dizayn Asoslari' subheading="Kompyuter haqida aniq ma'lumotga ega bo'ling " img='design'/>

    {/if}

    {#if $searchFilter == 'marketing'}
       <a href="/marketing-asoslari/marketing-nima">
            <Card heading='Marketing Asoslari' subheading="Kompyuter haqida aniq ma'lumotga ega bo'ling " img='notification'/>
        </a>
    {/if}
</div>

<script lang='ts'>
	import { writable } from 'svelte/store';
    import Card from '../../components/card.svelte'

    const searchFilter = writable<string>('dasturlash');
</script>

<style>
    @media (min-width:768px) {
        .searchFilters {
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 20px;
            justify-content: center;
            align-items: center;
        }

        .active {
            color: var(--text-color);
            font-size: 16px;
            padding: 10px;
            background-color: var(--primary-color);
            border-radius: 20px;
            border: none;
            transition: ease-in-out 0.3s;
            border: 1px solid var(--primary-color);
        }

        button {
            color: var(--text-color);
            font-size: 16px;
            padding: 10px;
            border: 1px solid var(--text-color);
            background-color: transparent;
            border-radius: 20px;
            transition: ease-in-out 0.3s;
        }
 

   

        a {
            text-decoration: none;
        }
        .programmingCourse {
            padding-top: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .heading {
            color: white;
            font-size: 28px;
        }

        .cardList {
            width: 720px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            align-items: baseline;
        }
    }

    @media (max-width:768px) {
        .searchFilters {
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 20px;
            justify-content: center;
            align-items: center;
        }

        .active {
            color: var(--text-color);
            font-size: 16px;
            padding: 10px;
            background-color: var(--primary-color);
            border-radius: 20px;
            border: none;
            transition: ease-in-out 0.3s;
            border: 1px solid var(--primary-color);
        }

        button {
            color: var(--text-color);
            font-size: 16px;
            padding: 10px;
            border: 1px solid var(--text-color);
            background-color: transparent;
            border-radius: 20px;
            transition: ease-in-out 0.3s;
        }
 

   

        a {
            text-decoration: none;
        }
        .programmingCourse {
            padding: 80px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .heading {
            color: white;
            font-size: 28px;
        }

        .cardList {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            align-items: baseline;
        }
    }
</style>
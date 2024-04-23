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
            <VerticalCard image="/images/computer2.svg" title="Kompyuter Asoslari" description="Dasturlashni umuman bilmasangiz, kompyuterning hayotingizda faqat televizorda ko'rgan bo'lsangiz, IT - hayvon deb bilsangiz bu kurs aynan siz uchun"/>
        </a>
        <a href="/web-asoslari/internet">
            <VerticalCard image="/images/www2.svg" title="Web Dasturlash Asoslari" description="Python boyicha ko'p kitob o'qigandan jinni bo'lyabsiz, agar o'zgina pulingiz bo'lsa Abdullajonni izlab Marsga raketa yasardingizmi? Unda bu kurs siz uchun"/>
        </a>
       </div>
    {/if}

    {#if $searchFilter == 'dizayn'}
    <VerticalCard image="/images/marketing.svg" title={`Yolg'onsiz Marketing`} description={`Bu darslik yana bitta ish topa olmagan "SMM"-shik tomonidan yaratilmagan. Infolottibozliksiz, botlar va yolg'on "SHOK" habarlasiz brendni rivojlantirish`}/>
   
    {/if}

    {#if $searchFilter == 'marketing'}
       <a href="/marketing-asoslari/marketing-nima">
        <VerticalCard image="/images/marketing.svg" title={`Yolg'onsiz Marketing`} description={`Bu darslik yana bitta ish topa olmagan "SMM"-shik tomonidan yaratilmagan. Infolottibozliksiz, botlar va yolg'on "SHOK" habarlasiz brendni rivojlantirish`}/>
        </a>
    {/if}
</div>

<script lang='ts'>
	import { writable } from 'svelte/store';
    import Card from '../../components/card.svelte'
	import VerticalCard from '../../components/verticalCard.svelte';

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
            color: var(--bg-color);
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
            color: var(--bg-color);
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
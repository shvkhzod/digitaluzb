
<div class='landingPage'>
    {#if mode == 'dark'}
    <img class="landingImageDark" src="/images/landingDark.svg" alt="landing"/>
    {/if}
    {#if mode == 'light'}
    <img class="landingImageLight" src="/images/landingLight.svg" alt="landing"/>
    {/if}
    <h1 class='intro'>O'zingizga o'zingiz ta'lim bering</h1>
    <p class='subHeading'>Sizning ta'limingiz - 100% sizning ma'suliyatingiz</p>
    <div class='landingButtons'>
        <a href="/darslar">
            <button class="primaryButton">Darslar</button>
        </a>
        <a href="/loyiha-haqida">
            <button class="secondaryButton">Loyiha Haqida</button>
        </a>
    </div>
    <p class="promise">Registratsiyasiz.   To'lovsiz.   Reklamasiz</p>
    <div class="cardList">
        <VerticalCard image="/images/settings.svg" title="Choynaklar Uchun Dasturlash" description="Dasturlashni umuman bilmasangiz, kompyuterning hayotingizda faqat televizorda ko'rgan bo'lsangiz, IT - hayvon deb bilsangiz bu kurs aynan siz uchun"/>
        <VerticalCard image="/images/settings.svg" title="Ilon Masklar Uchun Python" description="Python boyicha ko'p kitob o'qigandan jinni bo'lyabsiz, agar o'zgina pulingiz bo'lsa Abdullajonni izlab Marsga raketa yasardingizmi? Unda bu kurs siz uchun"/>
        <VerticalCard image="/images/settings.svg" title={`Yolg'onsiz Marketing`} description={`Bu darslik yana bitta ish topa olmagan "SMM"-shik tomonidan yaratilmagan. Infolottibozliksiz, botlar va yolg'on "SHOK" habarlasiz brendni rivojlantirish`}/>
    </div>

</div>

<script lang='ts'>
	import { onMount } from 'svelte';
    import VerticalCard from '../components/verticalCard.svelte';

    let mode = 'dark';
    function handleModeChange(event: CustomEvent<string>) {
    mode = event.detail;
}   

    onMount(() => {
    mode  = document.body.getAttribute('mode')!;
    console.log('currentMode', mode)
    window.addEventListener('modeChange', handleModeChange as EventListener);

    return () => {
        window.removeEventListener('modeChange', handleModeChange as EventListener);
    };

});

</script>

<style>
    @media (min-width: 768px) {
        .projectName {
        font-size: 16px;
        color: var(--text-color);
        font-weight: 500;
        border: 1px solid var(--border-color);
        padding: 10px 20px;
        background-color: var(--secondary-color);
        border-radius: 30px;
    }

    .landingPage {
        z-index: 2;
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .intro {
        margin-top: -60px;
        font-size: 52px;
        font-weight: 550;
        line-height: 56px;
        color: var(--text-color);
        text-align: center;
        width: 60%;
        
    }

    .subHeading {
        margin-top: 8px;
        font-size: 18px;
        font-weight: 400;
        color: var(--text-color-secondary);
        }

    .cardList {
        margin-top: 20px;
        width: min-content;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
    }

    .landingImageDark {
        width: 300px;
        height: 300px;
    }

    .landingImageLight {
        width: 170px;
        height: 170px;
        margin-top: 72px;
        margin-bottom: 60px;
    }

    a {
        text-decoration: none;
        
    }

    .landingButtons {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-top: 24px;
        margin-bottom: 24px;
    }

    .primaryButton {
        padding: 10px 20px;
        background-color: var(--primary-color);
        color: var(--text-solid-color);
        border: none;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 0 0 20px rgba(57, 167, 255, 0.8);
    }

    .secondaryButton {
        padding: 10px 20px;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        background-color: transparent;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }

    .primaryButton:hover {
        background-color: var(--solid-hover);
        transition: ease 0.4s;
    }

    .secondaryButton:hover {
        background-color: var(--solid-hover);
        color: var(--text-color);
        transition: ease 0.4s;
    }

    .promise {
        margin-top: 0px;
        font-size: 15px;
        font-weight: 400;
        color: var(--text-color-secondary);
    }
    }

    @media (max-width: 768px) {
        .projectName {
        font-size: 18px;
        color: var(--primary-color);
        font-weight: 500;
        border: 1px solid var(--border-color);
        padding: 10px 20px;
        background-color: var(--secondary-color);
        border-radius: 30px;
    }

    .landingPage {
        margin-top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .landingImageLight {
        width: 100%;
    }

    .landingImageDark {
        width:300px;
    }

    .intro {
        margin-top: -48px;
        font-size: 28px;
        font-weight: 550;
        color: var(--text-color);
        width: 100%;
        text-align: center;
        
    }

    .subHeading {
        font-size: 18px;
        font-weight: 400;
        color: var(--text-color-secondary);
        margin-bottom: 20px;
        text-align: center;
    }

    .landingButtons {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-top: 24px;
        margin-bottom: 24px;
    }

    .primaryButton {
        padding: 10px 20px;
        background-color: var(--primary-color);
        color: var(--text-solid-color);
        border: none;
        border-radius: 30px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
    }

    .secondaryButton {
        padding: 10px 20px;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        background-color: transparent;
        border-radius: 30px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
    }

    .cardList {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 0px 20px;
        justify-content: center;
    }

    a {
        text-decoration: none;
        
    }

    .promise {
        margin-top: 40px;
        font-size: 15px;
        font-weight: 400;
        color: var(--text-color-secondary);
    }
    }
</style>

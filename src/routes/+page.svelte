
<div class='landingPage'>
    {#if mode == 'dark'}
    <img class="landingImageDark" src="/images/newlogo.svg" alt="landing"/>
    {/if}
    {#if mode == 'light'}
    <img class="landingImageLight" src="/images/newlogo.svg" alt="landing"/>
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
    <div class='telegramLink'>
        <div class="telegramIntro">
            <p class="tHeadline">Digitaluzb Community</p> 
            <p class="tSub">Boshqa o'rganuvchilar bilan suhbatlashing. Mavzular haqida samimiy fikringizni bildiring va ma'lumotlarni yaxshishga hissa qo'shing</p>
            <p class="tSubMobile">Boshqa o'rganuvchilar bilan suhbatlashing </p>
            <a href="https://t.me/digitaluzb_tg" target="_blank" class="normalBtn">Qo'shilish</a> <!-- Add link to telegram group -->
        </div>
        <img src="/images/tgIcon.svg" alt="telegram" class="tgIcon"/>
    </div>
    <h1>Bu loyiha kimlar uchun ?</h1>
    <div class="benefits-container">
        <div class="audience">
          <img src="/images/school.svg" class="audience-icon" alt="Icon 1">
          <div class="audience-content">
            <p class="audience-headline">An'anaviy ta'limni yoqtirmaydiganlar</p>
            <p class="audience-p">Ko'p odamlar atrofida vaqt o'tkazmaydiganlar va o'z tezligida o'qishni afzal ko'radiganlar</p>  
        </div>
        </div>
        <div class="audience">
         <img src="/images/book.svg" class="audience-icon" alt="Icon 1">
          <div class="audience-content">
            <p class="audience-headline">Kitob sevarlar</p>
            <p class="audience-p">Video yoki audio formatdan kora matndan o'qib tushunishi osonroq bo'lganlar uchun</p>  
          </div>
        </div>
        <div class="audience">
            <img src="/images/search.svg" class="audience-icon" alt="Icon 1">
             <div class="audience-content">
               <p class="audience-headline">O'zini o'zi etaklab biladiganlar</p>
               <p class="audience-p">Har qanday mavzuni haqida o'zi izlanib, topib, o'rganib biladiganlar uchun </p>  
             </div>
           </div>
      </div>
    <div class="from">
        <div class="from-text">
            <h2 class="from-headline">
                Dasturchilar, Dizaynerlar va Marketologlardan
            </h2>
            <p class="from-p">
                Yangi Dasturchi, Dizaynerlar va Marketologlarga
            </p>
            <button class="primaryButton">Hissa qoshish</button>
        </div>
        <div class="circles">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
    <h1>Darslar</h1>
    <div class="cardList">
       <a href="/kompyuter-asoslari/kompyuter-haqida">
        <VerticalCard image="/images/comp3.svg" title="Kompyuter Asoslari" description="Dasturlashni umuman bilmasangiz, kompyuterning hayotingizda faqat televizorda ko'rgan bo'lsangiz, IT - hayvon deb bilsangiz bu kurs aynan siz uchun"/>
        </a>
        <a href="/web-asoslari/internet">
            <VerticalCard image="/images/web3.svg" title="Web Dasturlash Asoslari" description="Python boyicha ko'p kitob o'qigandan jinni bo'lyabsiz, agar o'zgina pulingiz bo'lsa Abdullajonni izlab Marsga raketa yasardingizmi? Unda bu kurs siz uchun"/>
        </a>
       <a href="/marketing-asoslari/marketing-nima">
        <VerticalCard image="/images/brand3.svg" title={`Yolg'onsiz Marketing`} description={`Bu darslik yana bitta ish topa olmagan "SMM"-shik tomonidan yaratilmagan. Infolottibozliksiz, botlar va yolg'on "SHOK" habarlasiz brendni rivojlantirish`}/>
       </a>
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
    
    h1 {
        width: 100%;
        color: var(--text-color);
        font-weight: 550;
        text-align: center;
    }

    .telegramLink {
        width: 720px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        border-radius: 20px;
        background-color: var(--bg-color-secondary);
        margin-bottom: 80px;
        overflow: hidden;
        padding: 20px 32px;
    }

    .telegramIntro {
        width: 65%;
    }

    .tHeadline {
        font-size: 24px;
        font-weight: 550;
        color: var(--text-color);
    }

    .tSub {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 400;
        color: var(--text-color-secondary);
        margin-bottom: 20px;
    }

    .tSubMobile {
        display: none;
    }

    .tgIcon {
        width: 160px;
        height: 160px;
        overflow: hidden;
    }
    .subHeading {
        margin-top: 8px;
        font-size: 18px;
        font-weight: 400;
        color: var(--text-color-secondary);
        }
    .normalBtn {
        padding: 10px 20px;
        background-color: var(--primary-color);
        color: var(--text-solid-color);
        border: none;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }
    .from {
        width: 720px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 80px;
        margin-bottom: 80px;
    }
    
    .from-headline {
        font-size: 32px;
        width: 400px;
        font-weight: 550;
        color: var(--text-color);
    }
    .from-p {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 32px;
        color: var(--text-color-secondary);
    }
    .circles {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    .circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--secondary-color);
        transition: background-color 0.3s ease;
        cursor: pointer;
    }

    .circle:hover {
      background-color: var(--primary-color);
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
        width: 180px;
        height: 180px;
        margin-top: 72px;
        margin-bottom: 60px;
    }

    .landingImageLight {
        width: 180px;
        height: 180px;
        margin-top: 72px;
        margin-bottom: 60px;
    }

    a {
        text-decoration: none;
        
    }

    .landingButtons {
        display: flex;
        flex-direction: row;
        align-items: center;
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
        margin-bottom: 80px;
        font-size: 15px;
        font-weight: 400;
        color: var(--text-color-secondary);
     }
 
.benefits-container {
   margin-top: 40px;
   margin-bottom: 40px;
   width: 460px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 40px;
   position: relative;
   padding-right: 20px;

 }
 
 .audience {
   display: flex;
   flex-direction: flex;
   gap: 32px;
 }
 
 .audience img {
   width: 60px;
   height: 60px;
   
 }
 
 .audience-p {
  margin-top: 8px;
  color: var(--text-color-secondary);
}

.audience-headline {
    margin-top: 12px;
    color: var(--text-color);
    font-size: 18px;
    font-weight: 600;
}

.audience::after {
  content: '';
  position: absolute;
  left: 6%;
  top: 40px;
  width: 2px;
  height: 200px;
  opacity: 1;
  background-color: var(--primary-color);
  z-index: -1;
}

.audience:last-child::after {
  display: none;
}

.audience-icon {
    background-color: var(--primary-color);
    padding: 15px;
    border-radius: 22px;
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
        width: 160px;
    }

    .landingImageDark {
        width:160px;
    }

    .intro {
        margin-top: -10px;
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

    .telegramLink {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        border-radius: 20px;
        background-color: var(--bg-color-secondary);
        margin-top: 40px;
        margin-bottom: 80px;
        overflow: hidden;
        padding: 24px 20px;
    }

    .telegramIntro {
        width: 70%;
    }

    .tHeadline {
        font-size: 18px;
        font-weight: 550;
        color: var(--text-color);
    }

    .tSubMobile {
        margin-top: 8px;
        font-size: 14px;
        font-weight: 400;
        color: var(--text-color-secondary);
        margin-bottom: 20px;
    }

    .tSub {
        display: none;
    }

    .tgIcon {
        width: 80px;
        height: 80px;
        overflow: hidden;
    }
    .subHeading {
        margin-top: 8px;
        font-size: 18px;
        font-weight: 400;
        color: var(--text-color-secondary);
        }
    .normalBtn {
        padding: 10px 20px;
        background-color: var(--primary-color);
        color: var(--text-solid-color);
        border: none;
        border-radius: 30px;
        font-size: 16px;
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
        margin-top: 20px;
        font-size: 15px;
        font-weight: 400;
        color: var(--text-color-secondary);
    }
    

  h1 {
    margin-top: 40px;
    color:var(--text-color);
    font-size: 28px;
  }
    .benefits-container {
   margin-top: 20px;
   margin-bottom: 40px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 40px;
   position: relative;
   padding: 16px;
 }
 
 .audience {
   display: flex;
   flex-direction: flex;
   gap: 32px;
 }
 
 .audience img {
   width: 60px;
   height: 60px;
   
 }
 
 .audience-p {
  margin-top: 8px;
  color: var(--text-color-secondary);
}

.audience-headline {
    margin-top: 12px;
    color: var(--text-color);
    font-size: 18px;
    font-weight: 600;
}

.audience::after {
  content: '';
  position: absolute;
  left: 13%;
  top: 40px;
  width: 2px;
  height: 300px;
  opacity: 1;
  background-color: var(--primary-color);
  z-index: -1;
}

.audience:last-child::after {
  display: none;
}

.audience-icon {
    background-color: var(--primary-color);
    padding: 15px;
    border-radius: 22px;
}

.from {
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        margin-top: 80px;
        gap: 20px;
        margin-bottom: 80px;
    }
    
    .from-headline {
        font-size: 28   px;
        width: 100%;
        font-weight: 550;
        color: var(--text-color);
    }
    .from-p {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 32px;
        color: var(--text-color-secondary);
    }
    .circles {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        display: none;
    }

    .circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: var(--secondary-color);
        transition: background-color 0.3s ease;
        cursor: pointer;
    }

    .circle:hover {
      background-color: var(--primary-color);
    }
    }
</style>

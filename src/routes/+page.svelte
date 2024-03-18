<img class='grid' alt='grid' src='/images/grid.svg'/>
<div class='landingPage'>
    <p class='projectName'>digitaluzb</p>
    <h1 class='intro'>O'zingizga o'zingiz ta'lim bering</h1>
    <p class='subHeading'>Kerakli sohalar boyicha open source bilim markazi</p>
    <div class='landingButtons'>
        <a href="/darslar">
            <button class="primaryButton">Darslar</button>
        </a>
        <a href="/loyiha-haqida">
            <button class="secondaryButton">Loyiha Haqida</button>
        </a>
    </div>
    <div class='cardList'>
        <a href="/kompyuter-asoslari/kompyuter-haqida">
            <Card heading='Kompyuter Asoslari' subheading="Kompyuterlar haqida aniq va chuqurroq bilimga ega bo'ling " img='settings'/>
        </a>
        <Card heading='Dizayn Asoslari' subheading="Dizayn olamiga shong'ishdan oldin eng kerakli fundamental bilimlarni ko'rib chiqing" img='design'/>
        <Card heading='Marketing Asoslari' subheading="Kompyuter haqida aniq ma'lumotga ega bo'ling " img='notification'/>
    </div>

</div>

<script lang='ts'>
    import Card from '../components/card.svelte'
</script>

<style>
    @media (min-width: 768px) {
        .projectName {
        font-size: 16px;
        color: var(--primary-color);
        font-weight: 500;
        border: 1px solid var(--primary-color);
        padding: 10px 20px;
        background-color: var(--secondary-color);
        border-radius: 30px;
    }

    .landingPage {
        z-index: 2;
        margin-top: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .intro {
        margin-top: 12px;
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
        width: 780px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    a {
        text-decoration: none;
        
    }

    .grid {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
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
        color: var(--text-color);
        border: none;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
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
    }

    @media (max-width: 768px) {
        .projectName {
        font-size: 18px;
        color: var(--primary-color);
        font-weight: 500;
        border: 1px solid var(--primary-color);
        padding: 10px 20px;
        background-color: var(--secondary-color);
        border-radius: 30px;
    }

    .landingPage {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .intro {
        margin-top: 12px;
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
        color: var(--text-color);
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
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    a {
        text-decoration: none;
        
    }

    .grid {
        position: absolute;
        width: 200%;
        z-index: -1;
        left: -200px;
    }
    }
</style>


<div class='landingPage'>
    <p class='projectName'>digitaluzb</p>
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
    <div class='cardList'>
        <VisualCard title="Dasturlash" image='settings'/>
        <VisualCard title="Dizayn" image='design'/>
        <VisualCard title="Marketing" image='notification'/>
    </div>
    <p class="promise">Registratsiyasiz.   To'lovsiz.   Reklamasiz</p>

</div>

<script lang='ts'>
    import VisualCard from '../components/visualCard.svelte'
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
        width: min-content;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        justify-content: center;
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
        color: var(--bg-color);
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

    .promise {
        margin-top: 40px;
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
        color: var(--bg-color);
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

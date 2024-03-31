<div class="visualCard">
    <div class="card">
        <div class="cardImage">
            <img src={`/images/${image}.svg`} alt='programming' />
        </div>
        <div class="cardContent">
            <div class="cardTitle">
                {title}
            </div>
        </div>
    </div>
</div>

<script lang="ts">
    export let title: string;
    export let image: string;
</script>
<style>
    @media (min-width: 768px) {
        .visualCard {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .card {
        width: 160px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 24px 0px;
        border-radius: 20px;
        background-color: var(--secondary-color);
        border: var(--border-color) solid 1px;
    }

    .cardImage {
        width: 64px;
        border-radius: 20px;
        overflow: hidden;
    }

    .cardImage img {
        width: 100%;
        border-radius: 20px;
    }

    .cardContent {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .cardTitle {
        font-size: 20px;
        font-weight: 550;
        color: var(--text-color);
    }

    .cardDescription {
        font-size: 16px;
        font-weight: 400;
        color: var(--text-color-secondary);
    }
    }

    @media (max-width: 768px) {
        .visualCard {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }

    .card {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 24px 20px;
        border-radius: 20px;
        background-color: var(--secondary-color);
        border: var(--border-color) solid 1px;
    }

    .cardImage {
        width: 32px;
        border-radius: 20px;
        overflow: hidden;
    }

    .cardImage img {
        width: 100%;
        border-radius: 20px;
    }

    .cardContent {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cardTitle {
        font-size: 18px;
        font-weight: 550;
        color: var(--text-color);
    }

    }
</style>
<div class="card">
    <img src={`/images/${img}.svg`} alt="programming" />
    <h1 class="heading">{heading}</h1>
    <p class="subheading">{subheading}</p>
</div>

<script lang='ts'>
    export let heading: string;
    export let subheading: string;
    export let img: string;
</script>

<style>

    @media (min-width: 768px) {
        .card {
        width: 300px;
        height: 160px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 20px;
        background-color: #0b161f;
        border: 1px solid #ffffff39;
        border-radius: 18px;
    }

    .card:hover {
         background-color: #0D1D29;
    }

    .card img {
        width: 2rem;
        height: 2rem;
    }

    .heading {
        font-size: 16px;
        color: white;
        font-weight: 550;
    }

    .subheading {
        font-size: 14px;
        color: #a2a2a2;

    }
    } 

    @media (max-width: 768px) {
        .card {
        width: 100%;
        height: 160px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 20px;
        background-color: #0b161f;
        border: 1px solid #ffffff39;
        border-radius: 18px;
    }

    .card:hover {
         background-color: #0D1D29;
    }

    .card img {
        width: 2rem;
        height: 2rem;
    }

    .heading {
        font-size: 18px;
        color: white;
        font-weight: 550;
    }

    .subheading {
        font-size: 14px;
        color: #a2a2a2;

    }
    }

</style>
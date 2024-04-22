<div class="about">
    <h2>digitaluzb</h2>
    <p>
        Digitaluzb - dasturlash, dizayn va marketing bilan 
        bog'liq keng qamrovli ma'lumotlar va manbalarni 
        taqdim etishga qaratilgan open source loyiha. 
    </p>
    <p>
        Loyihadagi ma'lumotlarni 
        yaratish va yangilash boshqa ishtirokchilarning jamoaviy harakatlariga asoslanadi. 
        Hamkorlikdagi sa'y-harakatlar IT sohalarida imkoniyatlarini kengaytirish uchun keng ko'lamli g'oyalar va o'quv qo'llanmalarini yaratishga qaratilgan.
    </p>
    <p>
        Siz tajribali mutaxassis 
        bo'lasizmi yoki intiluvchan ishqiboz bo'lasizmi, digitaluzb
        barchani o'z hissasini qo'shishga va kerakli bilimlarni o'rganishga
        taklif qiladi. Texnologiya va ijodkorlikning uzluksiz o'sishiga 
        yordam beradigan dinamik axborot omborini yaratishda bizga qo'shiling
    </p>
    <button class="primaryButton">Hissa qo'shish</button>
</div>

<style>
    @media (min-width: 768px) {
        .about {
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 620px;


    }

    h2 {
        font-size: 24px;
        font-weight: 550;
        color: var(--text-color);
    }

    p {
        font-size: 16px;
        font-weight: 400;
        padding-left: 40px;
        color: var( --text-color-secondary);
    }

    .primaryButton {
        padding: 10px 20px;
        font-size: 16px;
        background-color: var(--primary-color);
        color: var(--text-solid-color);
        border: none;
        border-radius: 30px;
        cursor: pointer;
        box-shadow: 0 0 20px rgba(57, 167, 255, 0.8);
    }
}

    @media (max-width: 768px) {
        .about {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        gap: 20px;
        width: 100%;


    }

    h2 {
        font-size: 24px;
        font-weight: 550;
        color: var(--text-color);
    }

    p {
        font-size: 16px;
        font-weight: 400;
        color: var( --text-color-secondary);
    }
    }
</style>
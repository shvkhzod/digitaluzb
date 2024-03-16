    <div class="tip">
        <img src="/images/lamp.svg" alt="tip" />
        <p class="tipText">{tipText}</p>
    </div>

    <script lang='ts'>
        export let tipText: string;
    </script>

    <style>
        .tip {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 20px;
            background-color: #0D1D29;
            border: 1px solid #39A7FF;
            border-radius: 18px;
        }

        .tip img {
            width: 2rem;
            height: 2rem;
        }

        .tipText {
            font-size: 14px;
            color: #73C1FF;
            font-weight: 500;
        }
    </style>
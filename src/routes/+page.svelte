<script>
    import Contentblock from "$lib/components/contentblock.svelte";
</script>

<!-- <div class="bubbles">
            <p class="narrow">
                +31 6 44 98 45 71
            </p>

            <p class="narrow-flipped">
                book@shepherdtours.nl
            </p>
            <p>
                More website content coming soon!
            </p>
        </div> -->
<Contentblock title="Private Tour Offerings">
    <ul>
        <ul>Best of The Hague Tour</ul>
        <ul>Best of Food Tour</ul>
        <ul>Newcomers Tour</ul>
        <ul>Politics of The Hague Tour</ul>
        <ul>Secrets of Laakkwartier Tour</ul>
        <ul>Dutch Royal Family Tour</ul>
        <ul>Beer and Spirits Tasting Tour</ul>
    </ul>
    We also offer Custom Bespoke Tours!
</Contentblock>

<style>
    ul {
        padding: 0px;
        line-height: 25pt;
        font-size: 18px;
        margin-top: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    /*

    .bubbles {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 20px;
        width: fit-content;
        font-weight: bold;
        font-style: italic;
    }

    .bubbles p:nth-child(even) {
        align-self: flex-end;
    }

     .bubbles p {
    background-image: url("./bubble_tetriery.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 12% 7% 15% 7%;
    width: fit-content;
    color: white;
}

.bubbles p:last-child {
    background-image: url("./bubble_primary.png");
}

.bubbles p.narrow {
    background-image: url("./bubble_narrow.png");
}

.bubbles p.narrow-flipped{
    background-image: url("./bubble_narrow_flipped.png");
} */
</style>

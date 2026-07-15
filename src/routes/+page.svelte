<script lang="ts">
    import Contentblock from "$lib/components/contentblock.svelte";
    import Polaroidlink from "$lib/components/polaroidlink.svelte";
    import SignupForm from "$lib/components/signupForm.svelte";
    import bespokeImage from "$lib/assets/polaroids/bespoke tour.jpg?enhanced";
    import bestOfImage from "$lib/assets/polaroids/best of The Hague.jpg?enhanced";
    import foodImage from "$lib/assets/polaroids/food tour.jpg?enhanced";
    import newcomersImage from "$lib/assets/polaroids/newcomers tour.jpg?enhanced";
    import beerAndSpiritsImage from "$lib/assets/polaroids/drink tour.jpg?enhanced";
    import politicsImage from "$lib/assets/polaroids/politics tour.jpg?enhanced";
    import laakImage from "$lib/assets/polaroids/laak tour.jpg?enhanced"
    import contactImage from "$lib/assets/polaroids/contact us.jpg?enhanced"
</script>

<svelte:head
    ><meta
        name="description"
        content="Discover The Hague with Shepherd's tailor-made tours. From food & drink walks to royal‑family and bespoke experiences"
    />
    <title>Shepherd's tours</title>
</svelte:head>

<div class="polalinks">
    <Polaroidlink src={bestOfImage} title="Best of The Hague Private Tour" rotation={4}
    ></Polaroidlink>
    <Polaroidlink src={foodImage} title="Food of The Hague Private Food Tour" rotation={2}
    ></Polaroidlink>
    <Polaroidlink src={newcomersImage} title="Newcomers Private Tour" rotation={-2}
    ></Polaroidlink>
    <Polaroidlink src={beerAndSpiritsImage} title="Beer and Spirits Private Tasting Tour" rotation={6}
    ></Polaroidlink>
    <Polaroidlink src={politicsImage} title="Politics of The Hague Private Tour" rotation={-1}
    ></Polaroidlink>
    <Polaroidlink src={laakImage} title="Laak Uncovered Private Tour" rotation={-3}
    ></Polaroidlink>
    <Polaroidlink src={bespokeImage} title="Bespoke Tours" rotation={-2}
    ></Polaroidlink>
    <Polaroidlink src={contactImage} title="Contact Us" href="#contact" rotation={5}
    ></Polaroidlink>
</div>
<div class="testemonials">
    <div>
        <Contentblock
            >"You absolutely made our trip! The girls said that saying goodbye
            to you was like saying goodbye to family"</Contentblock
        >
    </div>
    <div>
    <Contentblock
        >“Julia went above and beyond to customise our itinerary and organize
        meetings for us. So glad we found such a passionate guide!”</Contentblock
    >
    </div>
</div>

<div class="row">
    <div class="contact-block">
        <p>book your tour now</p>
        <Contentblock
            ><a href="tel:+31644984571">+31 6 44 98 45 71</a>
        </Contentblock>
        <Contentblock
            ><a href="mailto:book@shepherdtours.nl">book@shepherdtours.nl</a
            ></Contentblock
        >
    </div>
    <div class="form" id="contact">
        <SignupForm></SignupForm>
    </div>
</div>

<style>
    .polalinks {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 100%;
        gap: 10px;
        margin: 10px;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    .contact-block {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        gap: 5px;
        flex: 1 1 320px;
        min-width: 280px;
    }
    .contact-block p {
        font-size: 72px;
        font-family: "playfair display variable";
        font-weight: bold;
        text-transform: uppercase;
        margin: 0px;
    }

    .form {
        flex: 2 1 320px;
        min-width: 280px;
    }

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }
    .testemonials  {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px

    }


        @media (max-width: 800px) {
        .polalinks {
            grid-template-columns: 1fr 1fr;
        }

        .testemonials {
            grid-template-columns: 1fr;
        }
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

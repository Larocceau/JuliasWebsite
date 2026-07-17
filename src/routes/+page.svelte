<script lang="ts">
    import Polaroidlink from "$lib/components/polaroidlink.svelte";
    import SignupForm from "$lib/components/signupForm.svelte";
    import bespokeImage from "$lib/assets/polaroids/bespoke tour.jpg?enhanced";
    import bestOfImage from "$lib/assets/polaroids/best of The Hague.jpg?enhanced";
    import foodImage from "$lib/assets/polaroids/food tour.jpg?enhanced";
    import newcomersImage from "$lib/assets/polaroids/newcomers tour.jpg?enhanced";
    import beerAndSpiritsImage from "$lib/assets/polaroids/drink tour.jpg?enhanced";
    import politicsImage from "$lib/assets/polaroids/politics tour.jpg?enhanced";
    import laakImage from "$lib/assets/polaroids/laak tour.jpg?enhanced";
    import contactImage from "$lib/assets/polaroids/contact us.jpg?enhanced";
    import Bookingdetails from "$lib/components/bookingdetails.svelte";
    import Widget from "$lib/components/widget.svelte";
</script>

<svelte:head
    ><meta
        name="description"
        content="Discover The Hague with Shepherd's tailor-made tours. From food & drink walks to royal‑family and bespoke experiences"
    />
    <title>Shepherd's tours</title>
</svelte:head>

<div class="polalinks">
    <Polaroidlink
        src={bestOfImage}
        title="Best of The Hague Private Tour"
        rotation={4}
        href="/tours/best_of"
    ></Polaroidlink>
    <Polaroidlink
        src={foodImage}
        title="Food of The Hague Private Food Tour"
        rotation={2}
        href="/tours/food"
    ></Polaroidlink>
    <Polaroidlink
        src={newcomersImage}
        title="Newcomers Private Tour"
        rotation={-2}
        href="/tours/newcomers"
    ></Polaroidlink>
    <Polaroidlink
        src={beerAndSpiritsImage}
        title="Beer and Spirits Private Tasting Tour"
        rotation={6}
        href="/tours/drinks"
    ></Polaroidlink>
    <Polaroidlink
        src={politicsImage}
        title="Politics of The Hague Private Tour"
        rotation={-1}
        href="/tours/politics"
    ></Polaroidlink>
    <Polaroidlink
        src={laakImage}
        title="Laak Uncovered Private Tour"
        rotation={-3}
        href="/tours/laak"
    ></Polaroidlink>
    <Polaroidlink
        src={bespokeImage}
        title="Bespoke Tours"
        rotation={-2}
        href="/tours"
    ></Polaroidlink>
    <Polaroidlink
        src={contactImage}
        title="Contact Us"
        href="#contact"
        rotation={5}
    ></Polaroidlink>
</div>
<div class="testemonials">
    <div>
        <Widget
            >"You absolutely made our trip! The girls said that saying goodbye
            to you was like saying goodbye to family"</Widget
        >
    </div>
    <div>
        <Widget
            >“Julia went above and beyond to customise our itinerary and
            organize meetings for us. So glad we found such a passionate guide!”</Widget
        >
    </div>
</div>
<Bookingdetails></Bookingdetails>

<style>
    .polalinks {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 100%;
        gap: 10px;
        margin: 10px;
    }

    .testemonials {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
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

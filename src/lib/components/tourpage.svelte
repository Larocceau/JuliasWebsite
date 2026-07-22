<script lang="ts">
    import Bookingdetails from "$lib/components/bookingdetails.svelte";
    import Contentblock from "$lib/components/contentblock.svelte";
    import Polaroidlink from "$lib/components/polaroidlink.svelte";
    import type { Tour } from "$lib/domain";
    import type { Picture } from "@sveltejs/enhanced-img";
    import type { Snippet } from "svelte";

    export type SidebarImage = {
        picture: Picture;
        description: string;
    };

    let rotations = [-3, 4, -2];

    let {
        children,
        title,
        pretitle,
        price,
        images,
        preselection,
        iMadeAStupidException,
        callForAction = "Book this tour now"
    }: {
        children: Snippet;
        pretitle?: string;
        title: string;
        price?: string;
        images: SidebarImage[];
        preselection?: Tour;
        iMadeAStupidException?: boolean;
        callForAction?: string,
    } = $props();
</script>

<svelte:head>
    <title>{title + (iMadeAStupidException ? "" : " Tour")}</title>
</svelte:head>

<div class="title">
    {#if pretitle}
        <p class="preamble">{pretitle}</p>
    {/if}
    <h1 style="text-transform: uppercase">{title}</h1>
    {#if price}
        <p style="text-transform: uppercase">{price}</p>
    {/if}
</div>

<div class="content-and-shizzle">
    <div class="content-blocks">
        <Contentblock>
            {@render children()}
        </Contentblock>
        <Contentblock>
            <p>
                Book through the form below, email, or phone (+31 6 44 98 45
                71). You can expect an email confirmation within 24 hours.
            </p>
            <p>
                After receiving your preferred date, available time slots,
                number of people, ages, and preferred email, we'll take care of
                the rest!
            </p>
            <p>
                Payment on confirmation of booking. Tours can be cancelled for a
                full refund 48 hours prior to the beginning of the tour.
            </p>
            <p>
                Bookings should be made at least 48 hours in advance. Hours of
                operation in the office are between 9:30-18h every day except
                Monday.
            </p>
        </Contentblock>
    </div>
    <div class="picture-bar">
        {#each images.map( (image, index) => ({ ...image, index: index }), ) as image}
            <Polaroidlink
                src={image.picture}
                title={image.description}
                rotation={rotations[image.index]}
            ></Polaroidlink>
        {/each}
    </div>
</div>
<Bookingdetails {preselection} {callForAction}
></Bookingdetails>

<style>
    .content-and-shizzle {
        display: grid;
        grid-template-columns: 1fr 200px;
        gap: 20px;
        width: 100%;
    }

    .content-blocks {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 20px;
        max-width: 950px;
    }

    .picture-bar {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 600px) {
        .content-and-shizzle {
            grid-template-columns: 1fr;
        }

        .picture-bar {
            flex-direction: row;
        }
    }

    .title {
        background-color: var(--color-detail);
        color: var(--color-secondary);
        border-radius: 30px;
        text-align: center;
        width: 100%;
    }
    .title * {
        margin: 8px;
    }

    .preamble {
        font-family: "Playfair Display Variable", serif;
        font-style: italic;
        font-weight: bold;
        font-size: x-large;
    }

    h1 {
        font-family: "Playfair Display Variable";
        font-size: xx-large;
    }
</style>

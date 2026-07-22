<script lang="ts">
    import Polaroidlink from "$lib/components/polaroidlink.svelte";
    import SignupForm from "$lib/components/signupForm.svelte";

    import localDelicaties from "$lib/assets/polaroids/food/food tour 2.png?enhanced";
    import market from "$lib/assets/polaroids/best_of/both_3.png?enhanced";
    import hiddenGems from "$lib/assets/polaroids/contact us.jpg?enhanced";
    import type { PageProps } from "./$types";
    import Contentblock from "$lib/components/contentblock.svelte";

</script>

<Contentblock>
    <p>
        Haven’t found what you’re looking for in any of our recommended tours?
    </p>
    <p>
        <b
            >Fill in the form below or contact us for a bespoke tour that covers
            everything you want.</b
        >
    </p>
    <p>
        Groups can be any size, but with over 20 people, we will add another
        guide to your group - both for the comfort of our guests and for the
        best personalised experience.
    </p>
    <p>
        <b
            >Bookings for bespoke tours should be made at least one week in
            advance.</b
        > Hours of operation in the office are between 9:30-18h every day except
        Monday.
    </p>
</Contentblock>
<div class="content-and-shizzle">
    <div class="form">
        <SignupForm preselection="Bespoke tour"></SignupForm>
    </div>

    <div class="picture-bar">
        <Polaroidlink src={hiddenGems} title={"Hidden Gems"} rotation={3}
        ></Polaroidlink>
        <Polaroidlink
            src={localDelicaties}
            title={"Local Delicacies"}
            rotation={-1}
        ></Polaroidlink>
        <Polaroidlink src={market} title={"Markets"} rotation={2}
        ></Polaroidlink>
    </div>
</div>

<style>
    .content-and-shizzle {
        display: grid;
        grid-template-columns: 1fr 200px;
        gap: 20px;
        width: 100%;
    }

    .form {
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
</style>

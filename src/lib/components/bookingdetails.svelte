<script lang="ts">
    import type { Tour } from "$lib/domain";
    import SignupForm from "./signupForm.svelte";
    import Widget from "./widget.svelte";

    let {callForAction = "book your tour now", preselection}: {callForAction?: string, preselection?: Tour} = $props();

</script>
<div class="row">
    <div class="contact-block">
        <p>{callForAction}</p>
        <Widget
            ><a href="tel:+31644984571">+31 6 44 98 45 71</a>
        </Widget>
        <Widget
            ><a href="mailto:book@shepherdtours.nl">book@shepherdtours.nl</a
            ></Widget
        >
    </div>
    <div class="form" id="contact">
        <SignupForm {preselection}></SignupForm>
    </div>
</div>

<style>
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
</style>
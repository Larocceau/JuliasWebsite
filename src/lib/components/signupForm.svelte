<script lang="ts">
    import type { Tour } from "$lib/domain";
    import { invertRecord } from "$lib/helpers";

    let { preselection }: { preselection?: Tour } = $props();

    let keyToTour: Record<string, Tour> = {
        best: "Best of The Hague Tour",
        food: "Best of Food Tour",
        newcomers: "Newcomers Tour",
        politics: "Politics of The Hague Tour",
        laak: "Secrets of Laakkwartier Tour",
        royal: "Dutch Royal Family Tour",
        drink: "Beer and Spirits Tasting Tour",
        bespoke: "Bespoke tour",
    };

    let tourToKey = invertRecord(keyToTour);

    let rawSelectedTour = $state<string>("");

    $effect(() => {
        if (preselection) {
            rawSelectedTour = tourToKey[preselection];
        }
    });

    const doSubmit = (
        event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
    ) => {
        const data = new FormData(event.currentTarget);

        const tour = rawSelectedTour && keyToTour[rawSelectedTour];

        const content = `Dear Shepherd Tours team,

        I'm interested in booking a ${tour}. Here are the details:

        ${data
            .entries()
            .filter(([key, _]) => {
                return key != "type";
            })
            .map(([key, value]) => `${key.replace(/-/g, " ")}: ${value}`)
            .reduce((acc, value) => acc + "\n" + value)}
        
        `;
        const url = encodeURI(
            `mailto:book@shepherdtours.nl?subject=New Tour Request&body=${content}`,
        );

        window.open(url, "_self");
        event.currentTarget.reset();
    };
</script>

<form onsubmit={doSubmit}>
    <label for="name"> What is your name? </label>
    <input name="name" type="text" required />
    <label for="type">Which tour would you like to book?</label>
    <select bind:value={rawSelectedTour} name="type" required>
        <option value="" disabled selected>Pick a tour...</option>
        <option value="best">Best of The Hague Tour</option>
        <option value="food">Best of Food Tour</option>
        <option value="newcomers">Newcomers Tour</option>
        <option value="politics">Politics of The Hague Tour</option>
        <option value="laak">Secrets of Laakkwartier Tour</option>
        <option value="royal">Dutch Royal Family Tour</option>
        <option value="drink">Beer and Spirits Tasting Tour</option>
        <option value="bespoke">Bespoke tour</option>
    </select>

    {#if rawSelectedTour == "bespoke"}
        <label for="what-to-include">
            What would you like to have included in your tour?
        </label>
        <textarea name="what-to-include" required></textarea>
    {/if}

    <label for="when">
        When would you like to have this tour?
        <p class="tip">
            You can provide multiple options; please also include time of day
        </p>
    </label>
    <textarea name="when" required></textarea>
    <label for="group-size"> How many people will be joining you? </label>
    <input name="group-size" type="text" required />
    <label for="age-range"> What is the age range of your group? </label>
    <input name="age-range" type="text" required />
    <label for="dietary"> Any food allergies or preferences? </label>
    <input name="dietary" type="text" required />
    <label for="anything-else"> Anything else you'd like to mention? </label>
    <textarea name="anything-else"></textarea>
    <button>Submit</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        color: var(--color-detail);
        background-color: white;
        border-color: var(--color-detail);
        border-width: 2px;
        border-radius: 10px;
        border-style: solid;
        padding: 20px;
        gap: 5px;
    }

    .tip {
        margin: 0px;
        font-size: small;
    }

    option,
    input,
    select,
    textarea {
        border-style: solid;
        border-color: var(--color-detail);
        font: inherit;
        background-color: #fff;
        border-radius: 5px;
        padding: 8px;
        margin-bottom: 8px;
    }

    button {
        background-color: var(--color-secondary);
        color: var(--color-detail);
        border: none;
        border-radius: 10px;
        padding: 8px;
        font-size: larger;
        font-weight: 700;
    }

    button:hover {
        cursor: pointer;
    }
</style>

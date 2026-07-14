<script lang="ts">
    const doSubmit = (
        event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
    ) => {
        const data = new FormData(event.currentTarget);

        const content = `Dear Shepherd Tours team,

            I'm interested in booking one of your tours. Here are the details:

            ${data
                .entries()
                .map(([key, value]) => `${key.replace("-", " ")}: ${value}`)
                .reduce((acc, value) => acc + "\n" + value)}
        
        `;
        const url = encodeURI(
            `mailto:book@shepherdtours.nl?subject=New Tour Request&body=${content}`,
        );

        window.open(url, "_current");
        event.currentTarget.reset();
    };
</script>

<form onsubmit={doSubmit}>
    <label for="name"> What is your name? </label>
    <input name="name" type="text" required />
    <label for="type">Which tour would you like to book?</label>
    <select name="type" required>
        <option disabled selected>Pick a tour...</option>
        <option value="best of">Best of The Hague Tour</option>
        <option value="food">Best of Food Tour</option>
        <option value="newcomers">Newcomers Tour</option>
        <option value="politics">Politics of The Hague Tour</option>
        <option value="laak">Secrets of Laakkwartier Tour</option>
        <option value="royal family">Dutch Royal Family Tour</option>
        <option value="beer and siprits">Beer and Spirits Tasting Tour</option>
        <option value="bespoke">Bespoke tour</option>
    </select>

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
    <textarea name="anyting-else"></textarea>
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
        border-radius: 5px;
        border-color: var(--color-detail);
        background-color: white;
        font: inherit;
        padding: 2px;
    }

    button {
        background-color: var(--color-secondary);
        border: none;
        border-radius: 10px;
        padding: 5px;
        font-weight: bold;
        font-size: larger;
        color: var(--color-detail);
    }

    button:hover {
        cursor: pointer;
    }
</style>

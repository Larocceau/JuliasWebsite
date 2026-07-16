<script>
    import Tourpage from "$lib/components/tourpage.svelte";
    import picture1 from "$lib/assets/polaroids/best_of/best of The Hague 1.png?enhanced";
    import picture2 from "$lib/assets/polaroids/best_of/best of the hague 2.png?enhanced";

    import picture3 from "$lib/assets/polaroids/best_of/best of The Hague 3.png?enhanced";
</script>

<Tourpage
    title="More tours"
    images={[
        {
            picture: picture1,
            description: "Peace Palace",
        },
        {
            picture: picture2,
            description: "Hofvijver",
        },
        {
            picture: picture3,
            description: "Dunne Bierkade",
        },
    ]}
>
    <p>At Shepherd Tours, we offer private tours to individuals and groups.</p>
    <p>What can you expect on your tour?</p>
    <ul>
        <li>
            3 hours of taking in the sights, with a well-deserved break in
            themiddle.
        </li>
        <li>Maximum 10 people per guide.</li>
        <li>
            Knowledgeable private local guide with an international
            backgroundwho speaks both Dutch and English.
        </li>
        <li>
            Pick up and drop off from location on foot or by public transport.
        </li>
        <li>Follow up thank you email with a picture for memories!</li>
    </ul>

    <p>
        We have the following tours available. More details about them on here
        soon, for now, just reach out for more information.
    </p>
    <ul>
        <li>Best of The Hague Private Tour</li>
        <li>Food of The Hague Private Food Tour</li>
        <li>Newcomers Private Tour</li>
        <li>Beer and Spirits Private Tasting Tour</li>
        <li>Politics of The Hague Private Tour</li>
        <li>Laak Uncovered Private Tour</li>
        <li>Bespoke tours</li>
    </ul>
</Tourpage>

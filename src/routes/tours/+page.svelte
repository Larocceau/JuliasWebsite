<script>
    import Tourpage from "$lib/components/tourpage.svelte";
    import picture1 from "$lib/assets/polaroids/best_of/best of The Hague 1.png?enhanced";
    import picture2 from "$lib/assets/polaroids/best_of/best of the hague 2.png?enhanced";

    import picture3 from "$lib/assets/polaroids/best_of/best of The Hague 3.png?enhanced";
</script>

<svelte:head
    ><meta
        name="description"
        content="Make the most of your time in The Hague and choose your own adventure with the only tour company specialized in private tours"
    />
</svelte:head>

<Tourpage
    title="Discover Our Tours"
    callForAction="Book your tour now"
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
    iMadeAStupidException={true}
>
    <p>At Shepherd Tours, we offer private tours to individuals and groups.</p>
    <p>What can you expect on your tour?</p>
    <ul>
        <li>
            3 hours of taking in the sights, with a well-deserved break in the
            middle.
        </li>
        <li>Maximum 10 people per guide.</li>
        <li>
            Knowledgeable private local guide with an international background
            who speaks both English and Dutch.
        </li>
        <li>
            Pick up and drop off from location on foot or by public transport.
        </li>
        <li>Follow up thank you email with a picture for memories!</li>
    </ul>
</Tourpage>

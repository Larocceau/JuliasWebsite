<script>
    import Tourpage from "$lib/components/tourpage.svelte";
    import picture1 from "$lib/assets/polaroids/laak/photo_1.png?enhanced";
    import picture2 from "$lib/assets/polaroids/laak/photo_2.png?enhanced";
    import picture3 from "$lib/assets/polaroids/laak/photo_3.png?enhanced";
</script>

<Tourpage
    pretitle="Private Walking Tour"
    title="Laakkwartier Uncovered"
    price="€300 flat per hour + €10 per person"
    images={[
        {
            picture: picture1,
            description: "Station Moerwijk",
        },
        {
            picture: picture2,
            description: "Local Celebrities",
        },
        {
            picture: picture3,
            description: "Nieuwe Haagse School Architecture",
        },
    ]}
>
    <p>
        The cost for a 3 hour tour is <b
            >€300 per tour, + €10 per person aged 3+.</b
        > This includes food and drink at the scheduled locations.
    </p>
    <p><b>This tour is not available on Mondays. </b></p>
    <p>This tour includes:</p>
    <ul>
        <li>
            Guided tour of the Laakkwartier and Spoorwijk neighbourhoods of The
            Hague
        </li>
        <li>
            Exploring undiscovered areas such as a hidden wine vineyard, the old
            cinema, the writer streets, and the best cafes and places to eat.
        </li>
        <li>
            Admiring the historical architecture from the 1930s, designed by
            Berlage
        </li>
    </ul></Tourpage
>

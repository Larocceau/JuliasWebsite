<script>
    import Tourpage from "$lib/components/tourpage.svelte";
    import picture1 from "$lib/assets/polaroids/royals/photo_1.png?enhanced";
    import picture2 from "$lib/assets/polaroids/royals/photo_2.png?enhanced";
    import picture3 from "$lib/assets/polaroids/royals/photo_3.png?enhanced";
</script>

<svelte:head
    ><meta
        name="description"
        content="Discover the stories of the Dutch royal family in their past and present on the Dutch Royal Family Tour. The only tour guide company in The Hague specialised in private tours."
    />
</svelte:head>

<Tourpage
    preselection="Dutch Royal Family Tour"
    pretitle="Private Walking Tour"
    title="Dutch Royal Family"
    price="€300 flat per hour + €10 per person"
    images={[
        {
            picture: picture1,
            description: "Paleis Noordeinde",
        },
        {
            picture: picture2,
            description: "Paleistuin",
        },
        {
            picture: picture3,
            description: "Orkest Koninklijke Marechaussee",
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
        <li>Exterior views of three Palaces, the Royal Stables, and more</li>
        <li>
            A break at a pub, cafe, or restaurant that is a supplier to the
            royal family
        </li>
        <li>
            A journey through the Royal Family’s history of The Hague, covering
            over 800 years of sights and stories
        </li>
        <li>The option to add tickets to museums of your choosing</li>
    </ul></Tourpage
>

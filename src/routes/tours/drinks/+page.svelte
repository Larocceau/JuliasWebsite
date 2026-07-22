<script>
    import Tourpage from "$lib/components/tourpage.svelte";
    import picture1 from "$lib/assets/polaroids/drinks/drink tour 1.png?enhanced";
    import picture2 from "$lib/assets/polaroids/drinks/drink tour 2.png?enhanced";
    import picture3 from "$lib/assets/polaroids/drinks/drink tour 3.png?enhanced";
</script>

<svelte:head
    ><meta
        name="description"
        content="Discover the best drinks the city has to offer on the Beer and Spirits of The Hague Tasting Tour! The only tour company in The Hague specialised in private food and drink tours. "
    />
</svelte:head>
<Tourpage
    preselection="Beer and Spirits Tasting Tour"
    pretitle="Private Walking and  Public Transport Tour"
    title="Beers and Spirits"
    price="€300 flat per hour + 65€ per person"
    images={[
        {
            picture: picture1,
            description: "Beers",
        },
        {
            picture: picture2,
            description: "Advocaat",
        },
        {
            picture: picture3,
            description: "Local Cafes",
        },
    ]}
>
    <p>
        The cost for a 3 hour tour is <b
            >€300 per tour, + €60 per person aged 18+
        </b>
        and <b>€30 for persons under 18.</b> This includes food and drink at the
        scheduled locations.
    </p>
    <p>
        This tour can be booked to start anytime between 13-16h, ending between
        16 and 19h.
    </p>
    <p><b>This tour is not available on Mondays. </b></p>
    <p>This tour includes:</p>
    <ul>
        <li>Visiting the oldest distillery in The Hague</li>
        <li>Behind the scenes visits of local breweries</li>
        <li>Sampling new, unreleased products</li>
        <li>
            Private guide who escorts you through the city on public transport
        </li>
    </ul></Tourpage
>

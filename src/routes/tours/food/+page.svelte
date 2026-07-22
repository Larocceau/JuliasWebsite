<script>
    import Tourpage from "$lib/components/tourpage.svelte";
    import picture1 from "$lib/assets/polaroids/food/ft_1.png?enhanced";
    import picture2 from "$lib/assets/polaroids/food/ft_2.png?enhanced";
    import picture3 from "$lib/assets/polaroids/food/food tour 3.png?enhanced";
</script>

<svelte:head
    ><meta
        name="description"
        content="Discover the best food the city has to offer with a private guide on our Food Tasting Tour in The Hague.The only tour guide company in The Hague specialised in private food tours."
    />
</svelte:head>

<Tourpage
    preselection="Best of Food Tour"
    pretitle="Private Walking and  Public Transport Tour"
    title="Food of The Hague"
    price="€300 flat per hour + 50€ per person"
    images={[
        {
            picture: picture1,
            description: "Local Delicacies",
        },
        {
            picture: picture2,
            description: "Trendy Restaurants",
        },
        {
            picture: picture3,
            description: "Delicious Drinks",
        },
    ]}
>
    <p>
        The cost for a 3 hour tour is <b
            >€300 per tour, + €50 per person aged 3+.</b
        > This includes food and drink at the scheduled locations.
    </p>
    <p><b>This tour is not available on Mondays. </b></p>
    <p>This tour includes:</p>
    <ul>
        <li>Visiting local suppliers for the royal family</li>
        <li>
            Bonbons, fried snacks, local delicacies, and old and new
            introductions to The Hague’s culinary culture
        </li>
        <li>A drink in a local cafe</li>
        <li>
            Private guide who escorts you through the city on public transport
        </li>
    </ul></Tourpage
>

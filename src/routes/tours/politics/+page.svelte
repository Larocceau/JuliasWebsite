<script>
    import Tourpage from "$lib/components/tourpage.svelte";
    import picture1 from "$lib/assets/polaroids/politics/photo_1.png?enhanced";
    import picture2 from "$lib/assets/polaroids/politics/photo_2.png?enhanced";
    import picture3 from "$lib/assets/polaroids/politics/politics_3.png?enhanced";
</script>

<Tourpage
    preselection="Politics of The Hague Tour"
    pretitle="Private Walking Tour"
    title="Politics in The Hague"
    price="€300 flat per hour + €10 per person"
    images={[
        {
            picture: picture1,
            description: "Hoge Raad",
        },
        {
            picture: picture2,
            description: "World Forum",
        },
        {
            picture: picture3,
            description: "Peace Palace",
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
            Exterior views of Europol, OPCW, Peace Palace, City Hall, and more
        </li>
        <li>
            A break at a pub, cafe, or restaurant - reservations and
            recommendations made by us
        </li>
        <li>
            A journey through the political history of The Hague, covering over
            800 years of sights and stories
        </li>
        <li>The option to add tickets to museums of your choosing</li>
    </ul></Tourpage
>

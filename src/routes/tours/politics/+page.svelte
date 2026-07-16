<script>
    import Tourpage from "$lib/components/tourpage.svelte";
    import picture1 from "$lib/assets/polaroids/politics/photo_1.png?enhanced";
    import picture2 from "$lib/assets/polaroids/politics/photo_2.png?enhanced";
    import picture3 from "$lib/assets/polaroids/politics/photo_3.png?enhanced";
</script>

<Tourpage
    pretitle="Private walking tour"
    title="Politics in The Hague"
    price="300€ flat per hour + 10€ per person"
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
    <p>
        The cost for a this 3 hour tour is <b
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

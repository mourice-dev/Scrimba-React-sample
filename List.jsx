import React from "react"

export default function List() {
    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing() {
        setMyFavoriteThings(prevFavThings => [...prevFavThings, allFavoriteThings[prevFavThings.length]])
        /**
         * Challenge: you do it!
         * Every time "Add item" is clicked, it should add another string
         * "Test" to the list on the page
         */
    }

    return ( 
        <main>
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )
}
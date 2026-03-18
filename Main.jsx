export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]


    const ingredient = ingredients.map((item) => { return (<li key={item}>{item}</li>) })

    function submitHandler(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);


    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button >Add ingredient</button>
            </form>
            <ul>
                {ingredient}
            </ul>
        </main>
    )
}
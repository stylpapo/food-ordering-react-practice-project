import image from "../assets/logo.jpg"

export default function Header({ order }) {
    // calculate cart items count
    const cartCount = Object.values(order).reduce((sum, meal) => sum + meal.count, 0);

    return (
        <div id="main-header">
            <div id="title">
                <img src={image} alt="REACTFOOD Logo" />
                <h1>REACTFOOD</h1>
            </div>
            <button className="text-button">Cart ({cartCount})</button>
        </div>
    )
}
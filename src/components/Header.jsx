import image from "../assets/logo.jpg"

export default function Header() {
    return (
        <div id="main-header">
            <div id="title">
                <img src={image} alt="REACTFOOD Logo" />
                <h1>REACTFOOD</h1>
            </div>
            <button className="text-button">Cart (0)</button>
        </div>
    )
}
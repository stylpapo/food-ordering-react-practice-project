import { server } from "../constants";

export default function Meal({ id, name, price, currency, description, image }) {
    return (
        <div key={id} className="meal-item">
            <img src={`${server}/${image}`} alt={`${name} image`} />
            <h3>{name}</h3>
            <div className="meal-item-price">{price}{currency}</div>
            <p>{description}</p>
            <button className="button">Add to Cart</button>
            {/* this button needs to use context to update the header cart button count */}
            {/* however, it is not only the cound I need to store */}
            {/* it is th actual meal data */}
            {/* therefore, i need to store an order object, and the count will be the obj length */}
          </div>
    )
}
import image from '../assets/greek_salad.jpg'
const ItemCard = () => {
    return (
        <div className="item-card">
            <img src={image} alt=""></img>
            <div className='card-title'>
                <h3>Greek Salad</h3>
                <h3 className='price'>$12.99</h3>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <button>Order delivery</button>
        </div>
    );
}

export default ItemCard;
import ItemCard from "./ItemCard";
const Highlight = () => {
    return(
    <section className="highlight">
        <div class="highlight-header">
            <h2>This weeks specials!</h2>
            <button className="menu-button">Online Menu</button>
        </div>
        <div className="item-cards">
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
        </div>
    </section>
    );
}
export default Highlight;
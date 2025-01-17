import { Container } from "react-bootstrap"
import Product from "./Product";

export default function Home (props) {
    const { products, addToCart, addToWishList } = props;

    return (
        <div>
            <Container className="Container">
                <h2>PRODUCT PAGE</h2>
                <div>
                    {products.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} addToWishList={addToWishList} ></Product>
                    ))}
                </div>
            </Container>
        </div>
    )
};
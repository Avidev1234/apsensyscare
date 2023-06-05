import React, { useEffect, useState } from 'react'
import ProductCard from '../LandingPage/ProductCard/ProductCard'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const ProductByCategory = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const value = useLocation();
    console.log(value.state.val)
    localStorage.setItem("cartId", JSON.stringify(value.state.id));
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // fatching products regarding category id
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
    console.log(product)
    let categoryProducts = [];
    product !== undefined && product.map((val, i) => {
        if (val.category_id === value.state.id) {
            categoryProducts.push(val);
        }
        return true;
    })
    return (
        <div className='w-full flex flex-wrap min-h-[100vh] content-start	justify-between p-5'>
            <Helmet>
                <title>{value.state.val.category_title}</title>
                <meta name="description" content={`${value.state.val.category_title}`} />
            </Helmet>
            {!Products.loading && Products.products.product !== undefined && categoryProducts.length !== 0 ? (
                categoryProducts.map((val, i) => {
                    return (
                            <ProductCard val={val} />
                    )
                })
            ) :
                <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p variant='h1' style={{ fontSize: '20px', fontWeight: '600', color: 'red' }}>No Products.</p>
                </div>
            }
        </div>
    )
}

export default ProductByCategory
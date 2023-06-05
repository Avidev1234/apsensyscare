import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../LandingPage/ProductCard/ProductCard';

const Drawer = ({ categoryid }) => {
  const Products = useSelector((state) => state.product);
  const { product } = Products.products;
  console.log(product)
  let categoryProducts = [];
  product !== undefined && product.map((val, i) => {
    if (val.category_id === categoryid) {
      categoryProducts.push(val);
    }
    return true;
  })
  return (
    <div className='w-[100%] lg:w-[1024px] xl:w-[1440px] flex flex-wrap  content-start	justify-between p-5 bg-white h-auto'>
      {!Products.loading && Products.products.product !== undefined && categoryProducts.length !== 0 ? (
        categoryProducts.slice(0, 6).map((val, i) => {
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
const CategoryLayout = () => {
  const navigate = useNavigate();
  const Category = useSelector((state) => state.category);
  const { category } = Category.category;
  const [isShown, setIsShown] = useState({ categoryid: '', show: false });

  return (
    <div className='w-full flex flex-col flex-nowrap justify-center items-center h-[auto] ' onMouseLeave={() => setIsShown({ categoryid: '', show: false })}>
      <div className='w-full flex flex-row flex-nowrap justify-around  items-center bg-[#0112FE] h-[50px]'>
        <div className='w-full lg:w-[1024px] xl:w-[1440px] flex flex-row flex-nowrap justify-around  items-center bg-[#0112FE] h-[50px]'>
          <h2 className='text-[8px] md:text-[14px] text-white uppercase font-bold cursor-pointer hover:text-[#E34343]' onClick={() => navigate('/')}>Home</h2>
          {!Category.loading && Category.category.category !== undefined ? (
            category.map((val, i) => {
              return (
                <div onMouseEnter={() => setIsShown({ categoryid: val.id, show: true })}
                  >
                  <h2 className='text-[8px] md:text-[14px] text-white uppercase font-bold cursor-pointer hover:text-[#E34343]'
                    onClick={() => navigate(`/category/${val.category_url}`, { state: { id: val.id, val: val } })}>{val.category_name}</h2>
                </div>
              )
            }
            )
          ) : null}
        </div>
      </div>
      {isShown.show && <Drawer categoryid={isShown.categoryid} />}

    </div>
  )

}

export default CategoryLayout
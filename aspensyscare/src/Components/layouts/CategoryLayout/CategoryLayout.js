import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Drawer = ({ categoryid }) => {
  const navigate = useNavigate();
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
    <div className=' hidden lg:flex w-[100%] flex-wrap  content-start	p-5 bg-[#d9d9d9] h-auto justify-center items-center'>
      <div className='w-[100%] lg:w-[1024px] xl:w-[1440px] flex flex-wrap  content-start	justify-start p-5 bg-[#d9d9d9] h-auto'>
        {!Products.loading && Products.products.product !== undefined && categoryProducts.length !== 0 ? (
          categoryProducts.slice(0, 6).map((val, i) => {
            return (
              <ul
                class="px-4 w-1/2 lg:w-1/3 pb-2 md:pb-2 pt-2 md:pt-6 lg:pt-3 cursor-pointer"
                onClick={() => navigate(`/product/${val.category_id}/${val.id}/${val.product_url}`, { state: { product: val } })}
              >
                <div class=" max-w-100">
                  <div class="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden items-center h-[15rem] md:h-56">
                    <div class="w-full md:w-1/3 flex justify-center mt-8 md:m-0">
                      <div class="bg-blue-200 w-[4em] md:w-32 h-[4rem] md:h-32 rounded-full relative shadow-lg">
                        <img src={`https://apsensyscare.com/Image/all_products/${val.product_image}`}
                          class="h-[4rem] md:h-32 w-40 object-contain absolute bottom-[20px]" alt="" />
                      </div>
                    </div>
                    <div class="w-full md:w-2/3 p-2 md:p-4 text-center md:text-left">
                      <h1 class="text-gray-900 font-bold text-base uppercase">{val.brand_name}</h1>
                      <p class="my-4 text-gray-600 text-[10px] md:text-[14px]">{val.name}</p>
                    </div>
                  </div>
                </div>
              </ul>
            )
          })
        ) :
          <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p variant='h1' style={{ fontSize: '20px', fontWeight: '600', color: 'red' }}>No Products.</p>
          </div>
        }
      </div>
    </div >
  )
}
const CategoryLayout = () => {
  const navigate = useNavigate();
  const Category = useSelector((state) => state.category);
  const { category } = Category.category;
  const [isShown, setIsShown] = useState({ categoryid: '', show: false });

  return (
    <div className='w-full flex flex-col flex-nowrap justify-center items-center h-[auto] ' onMouseLeave={() => setIsShown({ categoryid: '', show: false })}>
      <div className='w-full flex flex-col flex-nowrap justify-around  items-center bg-[#CEEDFF] h-[50px]'>
        <div className='w-full lg:w-[1024px] xl:w-[1440px] flex flex-row flex-nowrap justify-around  items-center bg-[#CEEDFF] h-[50px] '
        onMouseEnter={() => setIsShown({ categoryid: '', show: false })}
        >
          <h2 className='text-[8px] md:text-[16px] text-black  font-bold cursor-pointer hover:text-[#E34343]' onClick={() => navigate('/')} onMouseEnter={() => setIsShown({ categoryid: '', show: false })}>Home</h2>
          {!Category.loading && Category.category.category !== undefined ? (
            category.map((val, i) => {
              return (
                <div
                >
                  <h2 className='text-[8px] md:text-[16px] text-black  font-bold cursor-pointer hover:text-[#E34343]'
                    onMouseEnter={() => setIsShown({ categoryid: val.id, show: true })}
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
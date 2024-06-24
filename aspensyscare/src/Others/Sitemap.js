import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Sitemap = () => {
    const navigate = useNavigate();
    useEffect(() => { 
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      })
      console.log("hello")
    return (
            <div className='mt-[20px] mb-[20px]'>

                <h3 className='text-[24px] text-black font-bold mt-[20px] mb-[20px cursor-pointer underline' onClick={() =>navigate('/category/home-care/c/1?categoryId=1')}>Home Care</h3>
                <p><a href="https://apsensyscare.com/product/1/1/sanitus-toilet-cleaner">Sanitus toilet cleaner</a></p>
                <p><a href="https://apsensyscare.com/product/1/3/nexpro-citrus-floor-cleaner">Nexpro citrus floor cleaner</a></p>
                <p><a href="https://apsensyscare.com/product/1/5/nexpro-floral-floor-cleaner">Nexpro floral floor cleaner</a></p>
                <p><a href="https://apsensyscare.com/product/1/6/nexpro-jasmine-floor-cleaner">Nexpro jasmine floor cleaner</a></p>
                <p><a href="https://apsensyscare.com/product/1/15/nexpro-glass-and-multi-surface-cleaner">Nexpro glass and multi surface cleaner</a></p>
                <p><a href="https://apsensyscare.com/product/1/25/nexpro-phenyl">Nexpro all in one phenyl white</a></p>

                <h3 className='text-[24px] text-black font-bold mt-[20px] mb-[20px] cursor-pointer underline' onClick={() =>navigate('/category/kitchen-care/c/2?categoryId=2')}>Kitchen Care</h3>
                <p><a href="https://apsensyscare.com/product/2/17/stainpro-lemon-dish-wash-gel">Stainpro lemon dish wash gel</a></p>

                <h3 className='text-[24px] text-black font-bold mt-[20px] mb-[20px] cursor-pointer underline' onClick={() =>navigate('/category/skin-care/c/5?categoryId=5')}>Skin Care</h3>
                <p><a href="https://apsensyscare.com/product/5/11/hopelife-lemon-grass-sanitizer-gel">Hopelife lemon grass sanitizer gel</a></p>
                <p><a href="https://apsensyscare.com/product/5/13/hopelife-sandal-wood-sanitizer-gel">Hopelife sandal wood
                    sanitizer gel</a></p>
                <p><a href="https://apsensyscare.com/product/5/14/hopelife-green-apple-sanitizer-liquid">Hopelife green apple
                    sanitizer liquid</a></p>
                <p><a href="https://apsensyscare.com/product/5/19/hopelife-green-apple-hand-wash">Hopelife green apple hand
                    wash</a></p>
                <p><a href="https://apsensyscare.com/product/5/20/hopelife-sandal-wood-hand-wash">Hopelife sandal wood hand
                    wash</a></p>
                <p><a href="https://apsensyscare.com/product/5/21/hopelife-aqua-mint-hand-wash">Hopelife aqua mint hand wash</a></p>
                <h3 className='text-[24px] text-black font-bold mt-[20px] mb-[20px] cursor-pointer underline' onClick={() =>navigate('/category/body-care/c/7?categoryId=7')}>Body Care</h3>
                <p><a href="https://apsensyscare.com/product/7/22/clearsoft-alovera-with-neem-body-wash">Clearsoft alovera with
                    neem body wash</a></p>
                <p><a href="https://apsensyscare.com/product/7/23/clearsoft-lemon-oil-with-cool-mint-body-wash">Clearsoft
                    lemon oil with cool mint body wash</a></p>
                <p><a href="https://apsensyscare.com/product/7/24/clearsoft-frangi-pani-with-glycerine-body-wash">Clearsoft frangi
                    pani with glycerine body wash</a></p>
            </div>
    )
}

export default Sitemap









// import React, { useEffect } from 'react';
// import { useNavigate } from "react-router-dom";

// const Sitemap = () => {
//     const navigate = useNavigate();
//     useEffect(() => { 
//         window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//     }, []);

//     return (
//         <div className="container mx-auto p-6">
//             <div className="bg-white shadow-md rounded-lg p-6">
//                 <h2 className="text-3xl font-bold text-center mb-8">Sitemap</h2>

//                 <section className="mb-8">
//                     <h3 className="text-2xl text-indigo-600 font-bold cursor-pointer underline mb-4" onClick={() => navigate('/category/home-care/c/1?categoryId=1')}>Home Care</h3>
//                     <ul className="list-disc pl-5">
//                         <li><a href="https://apsensyscare.com/product/1/1/sanitus-toilet-cleaner" className="text-blue-600 hover:underline">Sanitus toilet cleaner</a></li>
//                         <li><a href="https://apsensyscare.com/product/1/3/nexpro-citrus-floor-cleaner" className="text-blue-600 hover:underline">Nexpro citrus floor cleaner</a></li>
//                         <li><a href="https://apsensyscare.com/product/1/5/nexpro-floral-floor-cleaner" className="text-blue-600 hover:underline">Nexpro floral floor cleaner</a></li>
//                         <li><a href="https://apsensyscare.com/product/1/6/nexpro-jasmine-floor-cleaner" className="text-blue-600 hover:underline">Nexpro jasmine floor cleaner</a></li>
//                         <li><a href="https://apsensyscare.com/product/1/15/nexpro-glass-and-multi-surface-cleaner" className="text-blue-600 hover:underline">Nexpro glass and multi surface cleaner</a></li>
//                         <li><a href="https://apsensyscare.com/product/1/25/nexpro-phenyl" className="text-blue-600 hover:underline">Nexpro all in one phenyl white</a></li>
//                     </ul>
//                 </section>

//                 <section className="mb-8">
//                     <h3 className="text-2xl text-indigo-600 font-bold cursor-pointer underline mb-4" onClick={() => navigate('/category/kitchen-care/c/2?categoryId=2')}>Kitchen Care</h3>
//                     <ul className="list-disc pl-5">
//                         <li><a href="https://apsensyscare.com/product/2/17/stainpro-lemon-dish-wash-gel" className="text-blue-600 hover:underline">Stainpro lemon dish wash gel</a></li>
//                     </ul>
//                 </section>

//                 <section className="mb-8">
//                     <h3 className="text-2xl text-indigo-600 font-bold cursor-pointer underline mb-4" onClick={() => navigate('/category/skin-care/c/5?categoryId=5')}>Skin Care</h3>
//                     <ul className="list-disc pl-5">
//                         <li><a href="https://apsensyscare.com/product/5/11/hopelife-lemon-grass-sanitizer-gel" className="text-blue-600 hover:underline">Hopelife lemon grass sanitizer gel</a></li>
//                         <li><a href="https://apsensyscare.com/product/5/13/hopelife-sandal-wood-sanitizer-gel" className="text-blue-600 hover:underline">Hopelife sandal wood sanitizer gel</a></li>
//                         <li><a href="https://apsensyscare.com/product/5/14/hopelife-green-apple-sanitizer-liquid" className="text-blue-600 hover:underline">Hopelife green apple sanitizer liquid</a></li>
//                         <li><a href="https://apsensyscare.com/product/5/19/hopelife-green-apple-hand-wash" className="text-blue-600 hover:underline">Hopelife green apple hand wash</a></li>
//                         <li><a href="https://apsensyscare.com/product/5/20/hopelife-sandal-wood-hand-wash" className="text-blue-600 hover:underline">Hopelife sandal wood hand wash</a></li>
//                         <li><a href="https://apsensyscare.com/product/5/21/hopelife-aqua-mint-hand-wash" className="text-blue-600 hover:underline">Hopelife aqua mint hand wash</a></li>
//                     </ul>
//                 </section>

//                 <section className="mb-8">
//                     <h3 className="text-2xl text-indigo-600 font-bold cursor-pointer underline mb-4" onClick={() => navigate('/category/body-care/c/7?categoryId=7')}>Body Care</h3>
//                     <ul className="list-disc pl-5">
//                         <li><a href="https://apsensyscare.com/product/7/22/clearsoft-alovera-with-neem-body-wash" className="text-blue-600 hover:underline">Clearsoft alovera with neem body wash</a></li>
//                         <li><a href="https://apsensyscare.com/product/7/23/clearsoft-lemon-oil-with-cool-mint-body-wash" className="text-blue-600 hover:underline">Clearsoft lemon oil with cool mint body wash</a></li>
//                         <li><a href="https://apsensyscare.com/product/7/24/clearsoft-frangi-pani-with-glycerine-body-wash" className="text-blue-600 hover:underline">Clearsoft frangi pani with glycerine body wash</a></li>
//                     </ul>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Sitemap;

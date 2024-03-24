import React, { useEffect } from 'react'

const Sitemap = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      })
      console.log("hello")
    return (
            <div className='mt-[20px] mb-[20px]'>

                <h3 className='text-[24px] text-black font-bold mt-[20px] mb-[20px]'>Home Care</h3>
                <p><a href="https://apsensyscare.com/product/1/1/sanitus-toilet-cleaner">sanitus toilet cleaner</a></p>
                <p><a href="https://apsensyscare.com/product/1/3/nexpro-citrus-floor-cleaner">nexpro citrus floor cleaner</a></p>
                <p><a href="https://apsensyscare.com/product/1/3/nexpro-citrus-floor-cleaner">nexpro floral floor cleaner</a></p>
                <p><a href="https://apsensyscare.com/product/1/3/nexpro-citrus-floor-cleaner">nexpro jasmine floor cleaner</a></p>
                <p><a href="https://apsensyscare.com/product/1/3/nexpro-citrus-floor-cleaner">nexpro glass and multi surface cleaner</a></p>

                <h3 className='text-[24px] text-black font-bold mt-[20px] mb-[20px]'>Kitchen Care</h3>
                <p><a href="https://apsensyscare.com/product/2/17/stainpro-lemon-dish-wash-gel">stainpro lemon dish wash gel</a></p>

                <h3 className='text-[24px] text-black font-bold mt-[20px] mb-[20px]'>Skin Care</h3>
                <p><a href="https://apsensyscare.com/product/5/11/hopelife-lemon-grass-sanitizer-gel">hopelife lemon grass sanitizer gel</a></p>
                <p><a href="https://apsensyscare.com/product/5/13/hopelife-sandal-wood-sanitizer-gel">hopelife sandal wood
                    sanitizer gel</a></p>
                <p><a href="https://apsensyscare.com/product/5/14/hopelife-green-apple-sanitizer-liquid">hopelife green apple
                    sanitizer liquid</a></p>
                <p><a href="https://apsensyscare.com/product/5/19/hopelife-green-apple-hand-wash">hopelife green apple hand
                    wash</a></p>
                <p><a href="https://apsensyscare.com/product/5/20/hopelife-sandal-wood-hand-wash">hopelife sandal wood hand
                    wash</a></p>
                <p><a href="https://apsensyscare.com/product/5/21/hopelife-aqua-mint-hand-wash">hopelife aqua mint hand wash</a></p>
                <h3 className='text-[24px] text-black font-bold mt-[20px] mb-[20px]'>Body Care</h3>
                <p><a href="https://apsensyscare.com/product/7/22/clearsoft-alovera-with-neem-body-wash">clearsoft alovera with
                    neem body wash</a></p>
                <p><a href="https://apsensyscare.com/product/7/23/clearsoft-lemon-oil-with-cool-mint-body-wash">clearsoft
                    lemon oil with cool mint body wash</a></p>
                <p><a href="https://apsensyscare.com/product/7/24/clearsoft-frangi-pani-with-glycerine-body-wash">clearsoft frangi
                    pani with glycerine body wash</a></p>
            </div>
    )
}

export default Sitemap
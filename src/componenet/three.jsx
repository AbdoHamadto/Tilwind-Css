import productOne from '../image/product-1.jpg'
import productTwo from '../image/product-2.jpg'
import productThree from '../image/product-3.jpg'
import productFour from '../image/product-4.jpg'


const ProjectThree = () => {
    return (
        <>
            <div className='px-24 py-20 max-sm:p-8'>
                <div className='grid grid-cols-3 gap-6 max-sm:block'>
                    <img className='h-full rounded-2xl max-sm:hidden' src={productOne}/>
                    <div>
                        <img className='rounded-2xl max-sm:hidden' src={productTwo}/>
                        <img className='mt-4 rounded-2xl max-sm:hidden' src={productThree}/>
                    </div>
                    <img className='h-full rounded-2xl' src={productFour}/>
                </div>
                <div className='flex mt-16 max-sm:block max-sm:mt-8'>
                    <div className='w-9/12 mr-10 border-r border-gray-300 max-sm:border-none max-sm:w-full'>
                        <p className='font-bold text-3xl'>Basic Tee 6-Pack</p>
                        <p className='mt-4 mb-8'>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                        <p>Highlights</p>
                        <ul className='list-disc mt-2 ml-4'>
                            <li className='text-gray-500'>Hand cut and sewn locally</li>
                            <li className='text-gray-500'>Dyed with our proprietary colors</li>
                            <li className='text-gray-500'>Pre-washed & pre-shrunk</li>
                            <li className='text-gray-500'>Ultra-soft 100% cotton</li>
                        </ul>
                        <p className='mt-8 mb-4'>Details</p>
                        <p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>
                    </div>
                    <div className='w-3/12 max-sm:w-full max-sm:mt-8'>
                        <p className='text-3xl'>$192</p>
                        <p className='my-2'>
                            <span className='text-2xl'>★★★★☆</span>
                            <span className='text-sm text-purple-800 ml-2 cursor-pointer hover:text-purple-600'>117 reviews</span>
                        </p>
                        <p className='text-lg'>color</p>
                        <div className='flex my-3 ml-2'>
                            <div className='w-8 h-8 rounded-full bg-slate-300 cursor-pointer'></div>
                            <div className='w-8 h-8 rounded-full bg-slate-600 mx-3 cursor-pointer'></div>
                            <div className='w-8 h-8 rounded-full bg-black cursor-pointer'></div>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <p>Size</p>
                            <p className='text-purple-900 cursor-pointer hover:text-purple-600'>Size guide</p>
                        </div>
                        <div className='grid grid-cols-4 gap-2'>
                            <div className='p-4 border border-gray-500 rounded-md cursor-not-allowed flex justify-center hover:bg-gray-100'>XXS</div>
                            <div className='p-4 border border-gray-500 rounded-md cursor-pointer flex justify-center hover:bg-gray-100'>XS</div>
                            <div className='p-4 border border-gray-500 rounded-md cursor-pointer flex justify-center hover:bg-gray-100'>S</div>
                            <div className='p-4 border border-gray-500 rounded-md cursor-pointer flex justify-center hover:bg-gray-100'>M</div>
                            <div className='p-4 border border-gray-500 rounded-md cursor-pointer flex justify-center hover:bg-gray-100'>L</div>
                            <div className='p-4 border border-gray-500 rounded-md cursor-pointer flex justify-center hover:bg-gray-100'>XL</div>
                            <div className='p-4 border border-gray-500 rounded-md cursor-pointer flex justify-center hover:bg-gray-100'>2XL</div>
                            <div className='p-4 border border-gray-500 rounded-md cursor-pointer flex justify-center hover:bg-gray-100'>3XL</div>
                        </div>
                        <button className='py-2 bg-purple-600 w-full mt-4 text-white font-bold rounded-lg hover:bg-purple-800'>Add to bag</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectThree;
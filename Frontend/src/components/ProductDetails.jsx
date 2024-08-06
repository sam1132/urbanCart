import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
    const {id} = useParams()
    const [data,setData] = useState({})
    const [error,setError] = useState()
    useEffect(()=>{
        console.log("dd",id)
       const details = async ()=>{
        try {
            const response = await axios.get(`http://localhost:4000/product/products/${id}`)
            setData(response.data)
            
        } catch (error) {
            console.log(error)
        }
       }
       details()
    },[id])
    return (
        <section className="py-5 my-5">
            <div className="container mx-auto lg:px-8">
                <div className="flex flex-wrap -mx-4">
                    <aside className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                        <div className="border rounded-lg mb-3 flex justify-center">
                            <a href='#' rel="noopener noreferrer">
                                <img className="align-middle rounded-lg max-w-[25rem] max-h-[25rem]" src={data.image} alt="Product" />
                            </a>
                        </div>
                        {/* <div className="flex justify-center mb-3 space-x-1">
                            {['big1', 'big2', 'big3', 'big4', 'big'].map((img, idx) => (
                                <a key={idx} href={`https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/${img}.webp`} target="_blank" rel="noopener noreferrer" className="border rounded">
                                    <img width="60" height="60" className="rounded" src={`https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/${img}.webp`} alt="Thumb" />
                                </a>
                            ))}
                        </div> */}
                    </aside>
                    <main className="w-full lg:w-1/2 px-4">
                        <div className="pl-0 lg:pl-3">
                            <h4 className="text-2xl font-semibold text-dark">
                              {data.title}
                            </h4>
                            <div className="flex items-center my-3 space-x-2">
                                <div className="text-yellow-500">
                                    {[...Array(4)].map((_, i) => <i key={i} className="fa fa-star"></i>)}
                                    <i className="fas fa-star-half-alt"></i>
                                    <span className="ml-1">{data.ratings}</span>
                                </div>
                                <span className="text-gray-500"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                <span className="text-green-500 ml-2">In stock</span>
                            </div>

                            <div className="mb-3">
                                <span className="text-2xl font-bold">&#x20B9; {data.price}</span>
                            </div>

                            <p>
                                {data.description}
                            </p>

                            <div className="flex items-center mt-3 space-x-2">
                                <label className="form-label" htmlFor="quantity">Quantity</label>
                                <input type="number" className="form-control w-16 border border-gray-300 rounded px-2 py-1" defaultValue={1} min={1} />
                            </div>

                            <div className="flex items-center mt-3 space-x-2">
                                <a href="#" className="btn bg-blue-500 text-white shadow-0 px-4 py-2 rounded">Add to cart</a>
                            </div>

                            <div className="flex items-center mb-2 mt-4">
                                <img className="mr-2" src="https://images.bewakoof.com/web/ic-prod-desc.svg" alt="accordion_img" loading="lazy" decoding="async" />
                                <div className="flex flex-col">
                                    <div className="flex flex-row pl-1">
                                        <h2 className='font-bold'>Product Description</h2>
                                    </div>
                                    <div className="pl-1 pt-1 text-gray-500">Manufacture, Care and Fit</div>
                                </div>
                                <p className="ml-auto text-xl font-semibold">+</p>
                            </div>
                            <div className="flex items-center mb-2 mt-4">
                                <img className="mr-2" src="https://images.bewakoof.com/web/ic-return.svg" alt="accordion_img" loading="lazy" decoding="async" />
                                <div className="flex flex-col">
                                    <div className="flex flex-row pl-1">
                                        <h2 className='font-bold'>15 Day Returns</h2>
                                    </div>
                                    <div className="pl-1 pt-1 text-gray-500">Know about return & exchange policy</div>
                                </div>
                                <p className="ml-auto text-xl font-semibold">+</p>
                            </div>
                        </div>
                    </main>
                </div>

                {/* <----- This is Reviews Components -----> */}

                {/* <div className="ratings-wrapper">
                    <div className="recommendText">
                        <div className="verifiedIcon">
                            <img src="https://images.bewakoof.com/web/ic-shield--check.svg" alt="Verified Icon" />
                        </div> */}
                        {/* <div className="percentageText">
                            <p className="percentage">91%</p>
                            <p>of verified buyers recommend this brand</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="ratings d-flex flex-column mx-3">
                            <span className="rtng">4.5</span>
                            <div className="total-ratings">
                                <p>7M+ ratings</p>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <img className="mr-1" src="https://images.bewakoof.com/web/ic-star-mb-filled.svg" alt="full star icon" width="16" />
                                    <img className="mr-1" src="https://images.bewakoof.com/web/ic-star-mb-filled.svg" alt="full star icon" width="16" />
                                    <img className="mr-1" src="https://images.bewakoof.com/web/ic-star-mb-filled.svg" alt="full star icon" width="16" />
                                    <img className="mr-1" src="https://images.bewakoof.com/web/ic-star-mb-filled.svg" alt="full star icon" width="16" />
                                    <img className="mr-1" src="https://images.bewakoof.com/web/ic-star-mb--half.svg" alt="half star icon" width="16" />
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="flex-grow-1">
                            <div className="bar-wrpr">
                                <div className="rtng-txt-wrpr">
                                    <span className="rtng-txt">5</span>
                                    <img className="star-img" src="https://images.bewakoof.com/web/fill-1-2x-1622112875.webp" alt="Star Icon" />
                                </div>
                                <div className="middle">
                                    <div className="bar-container" style={{ width: '66%' }}></div>
                                </div>
                                <span className="noOfReviews">(5M+)</span>
                            </div>
                            <div className="bar-wrpr">
                                <div className="rtng-txt-wrpr">
                                    <span className="rtng-txt">4</span>
                                    <img className="star-img" src="https://images.bewakoof.com/web/fill-1-2x-1622112875.webp" alt="Star Icon" />
                                </div>
                                <div className="middle">
                                    <div className="bar-container" style={{ width: '24%' }}></div>
                                </div>
                                <span className="noOfReviews">(2M+)</span>
                            </div>
                            <div className="bar-wrpr">
                                <div className="rtng-txt-wrpr">
                                    <span className="rtng-txt">3</span>
                                    <img className="star-img" src="https://images.bewakoof.com/web/fill-1-2x-1622112875.webp" alt="Star Icon" />
                                </div>
                                <div className="middle">
                                    <div className="bar-container" style={{ width: '7%' }}></div>
                                </div>
                                <span className="noOfReviews">(558k+)</span>
                            </div>
                            <div className="bar-wrpr">
                                <div className="rtng-txt-wrpr">
                                    <span className="rtng-txt">2</span>
                                    <img className="star-img" src="https://images.bewakoof.com/web/fill-1-2x-1622112875.webp" alt="Star Icon" />
                                </div>
                                <div className="middle">
                                    <div className="bar-container" style={{ width: '3%' }}></div>
                                </div>
                                <span className="noOfReviews">(150k+)</span>
                            </div>
                            <div className="bar-wrpr">
                                <div className="rtng-txt-wrpr">
                                    <span className="rtng-txt">1</span>
                                    <img className="star-img" src="https://images.bewakoof.com/web/fill-1-2x-1622112875.webp" alt="Star Icon" />
                                </div>
                                <div className="middle">
                                    <div className="bar-container" style={{ width: '0%' }}></div>
                                </div>
                                <span className="noOfReviews">(1k+)</span>
                            </div>
                        </div> */}
                    {/* </div>
                </div> */}
            </div>
        </section>
    );
}

export default ProductDetails;

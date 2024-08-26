import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { handleCart } from './CartNavigation';
import toast from 'react-hot-toast'
const ProductDetails = () => {
    const BaseUrl = "https://urbancart-b989.onrender.com"
    const {id} = useParams()
    const [data,setData] = useState({})
    const [products, setProducts] = useState([]); 
    const navigate = useNavigate()
    useEffect(()=>{
       const details = async ()=>{
        try {
            const response = await axios.get(`${BaseUrl}/product/products/${id}`)
            setData(response.data)
            
        } catch (error) {
            console.log(error)
        }
       }
       details()
    },[id])

    const fetchProductById = async (id) => {
        try {
            const response = await axios.get(`${BaseUrl}/product/products/${id}`);
            const data =  response.data;
            return data; 
        } catch (error) {
            console.error('Error fetching product:', error);
            return null; 
        }
    };

    const addToCartProduct = async (id) => {
        const product = await fetchProductById(id);
        toast.success('Product added to cart')
        if (product) {
            setProducts(prevProducts => [...prevProducts, product]);
        }
    };

    const goToCart = () => {
        handleCart(navigate,products)
    };
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
                                <button className="btn bg-blue-500 text-white shadow-0 px-4 py-2 rounded" onClick={() => addToCartProduct(id)}>Add to cart</button>
                                <button className="btn bg-blue-500 text-white shadow-0 px-4 py-2 rounded" onClick={goToCart}>Go to cart</button>
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
            </div>
        </section>
    );
}

export default ProductDetails;

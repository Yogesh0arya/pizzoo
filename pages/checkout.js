import CheckoutProducts from '../components/CheckoutProduct'

import {useSelector} from 'react-redux'
import {selectItems} from '../src/slices/basketSlice'
import {selectTotal} from '../src/slices/basketSlice'
import Currency from 'react-currency-formatter'

import dynamic from "next/dynamic"
const Header = dynamic(()=>import('../components/Header'),{ssr: false})


function checkout(){
    const items = useSelector(selectItems)
    
    const total = useSelector(selectTotal)

    return(
        <div className="pt-14 md:pt-24 h-screen">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                <img className="object-contain" src="/images/offer1.jpg" />
                <img className="hidden md:inline object-contain" src="/images/offer2.jpg" />
                <img className="hidden lg:inline object-contain" src="/images/offer3.jpg" />
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-y-8 gap-x-12">
                <div className="lg:col-span-4">
                    <div className="mb-2 text-xl md:text-3xl font-bold ml-5">{items.length ===0 ? <p>Your Basket is empty</p>: <p>Shopping basket</p>}</div>
                    <hr/>
                    <div className="gap-5">
                        {items.map((item, i)=>(
                            <CheckoutProducts  
                                key={i}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                isVeg={item.isVeg}
                                rating={item.rating}
                                price={item.price}
                                img_url={item.img_url}
                                size={item.size}
                                toppings={item.toppings}
                                itemCount={item.itemCount}
                            />
                        ))}
                    </div>
                </div>

                <div className="px-5">     
                        {items.length > 0 &&
                            (<>
                            <h1 className="font-bold text-xl border-t-2 border-black lg:border-none">Checkout</h1>
                            <h2 className="">Subtotal ({items.reduce((total, item) => total + item.itemCount, 0)} items): 
                                <span className="font-bold">
                                    <Currency quantity={total} currency="INR"/>
                                </span>
                            </h2>

                            <button className="rounded-sm my-4 px-2 py-2 shadow-md text-white bg-black">Proceed to checkout</button>
                            </>)
                        }
                </div>
            </div>
        </div>
    )
}

export default checkout
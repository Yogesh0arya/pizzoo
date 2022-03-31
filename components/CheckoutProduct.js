import Image from "next/image"
import {useDispatch} from 'react-redux'
import {removeFromBasket} from '../src/slices/basketSlice'

function CheckoutProduct({id, name, description, isVeg, rating, price, img_url, size, toppings, itemCount}) {
    const dispatch = useDispatch()

    const removeItemFromBasket=()=>{
        dispatch(removeFromBasket({ id }))

    }

    return (
        <div>
            <div className="flex flex-col space-y-2 md:grid md:grid-cols-5 mx-5 mb-6 border-b border-gray-300">
                <Image src={img_url}  height={200} width={250} objectFit='contain'/>

                <div className="flex md:mx-3 flex-col md:col-span-3 justify-center">
                    <h1>{name}</h1>
                    <p className="font-bold">Rs. {price} <span className='text-gray-500 text-xs line-through'>Rs. {(price/0.7).toFixed(2)}</span> <span className="text-red-500 font-normal">(30% OFF)</span></p>
                    <p>{description}</p>

                    <div className={`mt-2 rounded-lg p-2 ${isVeg ? 'bg-green-100':'bg-red-100'}`}>
                        <div className="flex p-1 text-xs font-bold">
                            <div className={`mr-2 rounded-full w-3 h-3 ${isVeg ? 'bg-green-500':'bg-red-500'}`}/>
                            {isVeg ? <p>VEG</p>:<p>NON-VEG</p>}
                        </div>
                        <p><span className="md:text-lg text-gray-400">SIZE:</span> {size}</p>
                        {console.log(size[0].items)}
                        <div className="md:flex gap-2 md:gap-4 text-black">
                            <h1 className="md:text-lg text-gray-400">TOPPINGS: {toppings.length <= 0 && <span className="text-base text-black">No toppings</span>}</h1>
                            {toppings.length > 0 && 
                            toppings.map(({name},i)=>(
                                <p key={i}>● {name}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-2">
                    <p className="text-center font-bold text-black">{itemCount} items</p>
                    <button onClick={removeItemFromBasket} className="px-2 py-1 rounded-md border-2 text-white bg-red-600 hover:bg-white hover:text-black hover:border-red-500">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
import Image from "next/image"
import { StarIcon } from '@heroicons/react/solid'
import {useState} from 'react'
import Model from "./Model"

const MAX_RATING = 1
const MIN_RATING = 5

function MenuDisplay({id, name, description, isVeg, rating, price, img_url, size, toppings}) {
    // const [rating]=useState(
    //     Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    // )

    // const [hasPrime] = useState(Math.random() < 0.5)

    const [openModel, setOpenModel] = useState(false)

    return (
        <div className="group shadow-md w-max rounded-b-md mx-auto overflow-hidden">
            <div className="relative">
                <Image src={img_url} layout="responsive" height={200} width={250} objectFit='fill'/>
                <p className="hidden group-hover:flex absolute left-0 right-0 bottom-4 items-center pl-4 bg-white bg-opacity-70 h-10"><StarIcon className="w-4 mr-1 text-red-400"/> {rating}</p>
            </div>

            <div>
                <div className="flex p-1 border-b border-red-200 text-xs font-bold">
                    <div className={`mr-2 rounded-full w-3 h-3 ${isVeg ? 'bg-green-500':'bg-red-500'}`}/>
                    {isVeg ? <p>VEG</p>:<p>NON-VEG</p>}
                </div>

                <div className="px-5 pb-5 items-center flex flex-col">
                <h1>{name}</h1>
                
                <p className="font-bold">Rs. {price} <span className='text-gray-500 text-xs line-through'>Rs. {(price/0.7).toFixed(2)}</span> <span className="text-red-500 font-normal">(30% OFF)</span></p>
                <button onClick={()=>setOpenModel(true)} className="mt-2 mx-auto bg-gradient-to-b from-red-500 to-red-600 text-white font-bold border-2 border-transparent hover:bg-gradient-to-b hover:from-white hover:to-white hover:border-red-600 hover:text-red-600 px-2 py-1 lg:px-2 xl:text-lg rounded-full">Add to cart</button>
                {openModel && 
                    <Model 
                        closeModel={setOpenModel}  
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        isVeg={isVeg}
                        rating={rating}
                        price={price}
                        img_url={img_url}
                        size={size}
                        toppings={toppings}
                    />
                }
                </div>
            </div>
        </div>
    )
}

export default MenuDisplay
import {useEffect, useState, useRef} from 'react'
import Image from "next/image"
import { StarIcon } from '@heroicons/react/solid'
import {useDispatch} from 'react-redux'
import {addToBasket} from '../src/slices/basketSlice'

function Model({closeModel, id, name, description, isVeg, rating, price, img_url, size, toppings}) {
    useEffect(() => {
        let handler = (event)=>{
            if(!cardRef?.current?.contains(event.target)){
                closeModel(false)
            }
               
        }
        document.addEventListener('mousedown', handler)

        document.body.style.overflow = 'hidden';
        return ()=> {
            document.removeEventListener('moousedown',handler)
            document.body.style.overflow = 'unset';
        }
     }, []);

    const dispatch = useDispatch()

    const [itemCount, setItemCount] = useState(1)

    const [checkToppingState, setCheckToppingState] = useState(new Array(5).fill(false))
    const [isChecked, setIsChecked] = useState([false, true, false])
    const [isCheckedTopping, setIsCheckedTopping] = useState(new Array(5).fill(false))

    const addItemsToBasket=()=>{
        let updateTopping = toppings

        let updateSize = size[0].items.filter((item,i)=>isChecked[i]) 

        if(toppings[0].isRadio){
            updateTopping = toppings[0].items.filter((item,i)=>isCheckedTopping[i])  
        }else{
            updateTopping = toppings[0].items.filter((item,i)=>checkToppingState[i])  
        }
        
        toppings = updateTopping
        size = updateSize[0].size

        const product = {
            id, 
            name, 
            description, 
            isVeg, 
            rating, 
            price, 
            img_url, 
            size, 
            toppings,
            isChecked,
            itemCount  
        }

        dispatch(addToBasket(product))
        closeModel(false)
    }

    const selectSize=(ind)=>{
        const update = isChecked.map((item,i)=> i===ind ? !item : item=false
        )

        setIsChecked(update)
        // console.log(isChecked)
    }

    const selectTopping=(ind)=>{
        const update = isCheckedTopping.map((item,i)=> i===ind ? !item : item=false
        )

        setIsCheckedTopping(update)
        // console.log(isCheckedTopping)
    }

    const selectToppingState=(ind)=>{
        const update = checkToppingState.map((item,i)=> i===ind ? !item : item)

        setCheckToppingState(update)
        // console.log(checkToppingState)
    }

    const updateAddItem=(ind)=>{
        if(ind ===1){
            if(itemCount < 10){
                setItemCount(itemCount + 1)
            }
        }else{
            if(itemCount > 1){
                setItemCount(itemCount - 1)
            }
        }
    }

    let cardRef = useRef()

    return(
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-80 flex items-center justify-center ">
            <div ref={cardRef} className="p-2 md:p-5 mx-3 bg-white rounded-lg">
                <button className="text-right text-lg rounded-full p-2 w-8 h-8 text-white flex items-center justify-center bg-red-700" onClick={()=>closeModel(false)}>x</button>

                <div className="flex justify-center items-center">
                    <h1 className="text-lg md:text-2xl lg:text-3xl">{name}</h1>
                    <div className={`ml-2 rounded-full w-5 h-5 ${isVeg ? 'bg-green-500':'bg-red-500'}`}/>
                </div>
                <div className="flex relative items-center justify-center">
                  <Image src={img_url} height={200} width={250} objectFit='contain'/>
                  <div className='absolute bottom-0  bg-opacity-80 left-0 right-0 flex justify-center bg-white'>
                      <button onClick={()=>updateAddItem(0)} className="w-10 h-6 md:h-8 border-2 border-gray-600 text-center md:w-12 md:text-lg bg-white">-</button>
                      <p className="w-10 h-6 md:h-8 text-center border-2 md:w-12 md:text-lg bg-white">{itemCount}</p>
                      <button onClick={()=>updateAddItem(1)} className="w-10 h-6 md:h-8 border-2 border-gray-600 text-center md:w-12 md:text-lg bg-white">+</button>
                  </div>
                </div>
                

                <div className="flex flex-col items-center">
                    <p className="font-bold md:text-xl">Rs. {price} <span className='text-gray-500 text-xs line-through'>Rs. {(price/0.7).toFixed(2)}</span> <span className="text-red-500 font-normal">(30% OFF)</span></p>
                    <p className="whitespace-wrap text-gray-600">{description}</p>
                    
                    <div className="text-center text-xs md:text-base">
                        
                        <div className={`grid grid-cols-3 mt-3 gap-3 ${isVeg ? 'bg-green-100': 'bg-red-100'} rounded-lg p-2`}>
                            <p className="text-gray-400 text-left align-center">{size[0].title}</p>
                            <div className="col-span-2">
                            {size[0].items.map((s,i)=>(
                               <div className="flex items-center">
                                <input 
                                    type= 'radio'
                                    id={i}
                                    name={s.size}
                                    value={s.size}
                                    checked={isChecked[i]}
                                    onChange={()=>selectSize(i)}
                                />
                                <p>{s.size}</p>
                                </div>
                            ))}
                            </div>
                        </div>

                        <div className={`grid grid-cols-3 gap-3 mt-2 ${isVeg ? 'bg-green-100': 'bg-red-100'} rounded-lg p-2`}>
                            <p className="text-gray-400 text-left">{toppings[0].title}</p>
                            <div className="col-span-2">
                            {toppings[0].items.map((s,i)=>(
                                <div className="flex items-center">
                                {toppings[0].isRadio ?
                                (<input 
                                    type= 'radio'
                                    id={`selectTopping - ${i}`}
                                    name='selectTopping'
                                    value={s.name}
                                    checked={isCheckedTopping[i]}
                                    onChange={()=>selectTopping(i)}
                                />):
                                (<input 
                                    type='checkbox'
                                    id={`selectTopping - ${i}`}
                                    name='selectTopping'
                                    value={s.name}
                                    checked={checkToppingState[i]}
                                    onChange={()=>selectToppingState(i)}
                                />)}
                                <p>{s.name}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    <button onClick={addItemsToBasket} className="w-full mt-2 mx-auto bg-gradient-to-b from-red-500 to-red-600 text-white font-bold border-2 border-transparent hover:bg-gradient-to-b hover:from-white hover:to-white hover:border-red-600 hover:text-red-600 px-2 py-1 lg:px-2 xl:text-lg rounded-full">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Model
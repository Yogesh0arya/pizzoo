import {
    SearchIcon,
    MenuIcon,
    ChevronDownIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'
import {useSelector} from 'react-redux'
import {selectItems} from '../src/slices/basketSlice'
import { useState, useEffect } from "react";
import {useRouter } from 'next/router'

function Header() {

    const router = useRouter()

    const [colorChange, setColorchange] = useState(false);
    const [yScroll, setYScroll] = useState(window.scrollY);

    useEffect(()=>{

        const changeNavbarColor = () =>{
            if(window.scrollY >= 100){
            setColorchange(true);         
            }else{
            setColorchange(false);
            }
        };

        window.addEventListener('scroll', changeNavbarColor);
        
        return function unMount() {
            window.removeEventListener("scroll", changeNavbarColor);
        };
    },[yScroll])

   const items = useSelector(selectItems)

    return (
        <div className={` ${!colorChange ? ('bg-black bg-opacity-80') : ('bg-red-700 shadow-md')} z-50 fixed top-0 left-0 right-0`}>
             {/* <div className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white text-center py-3 overflow-hidden">
                <p className="animate-ping spin-slow duration-900">Carestack sees uptake of 47% on close rate after adding Convin&apos;s Conversation Intelligence in their sales stack.</p>
             </div> */}
            <div className="">
                <div className="flex justify-between max-w-screen-2xl xl:mx-auto items-center mx-5 py-5 md:py-8 xl:px-24">

                    <p onClick={()=>router.push('/')} className={` ${!colorChange ? ('text-red-700') : ('text-black')} cursor-pointer font-bold  text-lg sm:text-xl md:text-4xl flex-shrink-0`} >PIZZOO</p>
                    
                    <div className="flex space-x-8 text-white">
                        <div className="hidden lg:flex space-x-6 text-xl">

                            <button className="hover:opacity-80 border-b border-transparent hover:border-white">Home</button>

                            <div className="relative flex items-center group">
                                <button className="flex items-center hover:opacity-80">Order Online<ChevronDownIcon className="w-4 ml-1"/></button>
                                <div className="absolute top-0 w-24 hidden group-hover:inline-block">
                                    <div className="text-gray-700 mt-12 -ml-24 grid grid-cols-2 gap-3 w-max p-5 bg-white shadow-md rounded-lg text-base">
                                        <div className="space-y-3">
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Home Delivery</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Take Away</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Multiple Payment Mode</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Party Orders</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Amenities</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Explore More</p>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Best Quality</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">On Time</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Master Chef</p>
                                            <p className="hover:bg-blue-100 p-2 cursor-pointer">Tast Food</p>
                                        </div>  
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="relative flex items-center group">
                                <button className="flex items-center hover:opacity-80">Book A Table<ChevronDownIcon className="w-4 ml-1"/></button>
                                <div className="absolute top-0 w-24 hidden group-hover:inline-block">
                                    <div className="text-gray-700 mt-12 -ml-6 w-max p-5 bg-white shadow-md rounded-lg text-base space-y-3">
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">2 Members</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">4 Members</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Big family</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Book A Hall</p>
                                        <p className="hover:bg-blue-100 p-2 cursor-pointer">Birthday Party</p>
                                    </div>
                                    
                                </div>
                            </div>
                      
                            <button className="hover:opacity-80 border-b border-transparent hover:border-white">Gallery</button>
                            <button className="hover:opacity-80 border-b border-transparent hover:border-white">About Us</button>
                        </div> 

                        <div className="flex text-xs md:text-lg space-x-4 xl:space-x-6">
                            <button className={` border-2 ${!colorChange ? ('border-red-600 bg-red-600  text-white') : ('border-black bg-black  text-white')} px-3 py-1 rounded-full `}>Sign In</button>
                            <div className="relative  cursor-pointer">
                                <ShoppingCartIcon onClick={()=>router.push('/checkout')} className={`w-8 ${!colorChange ? ('hover:text-red-600 text-white') : ('text-white hover:text-black')}`}/>
                                {items.length > 0 && <p className="absolute text-xs -top-3 -right-2 flex items-center justify-center p-1 rounded-full w-5 h-5 bg-white text-black">{items.reduce((total, item) => total + item.itemCount, 0)}</p>}
                            </div>
                        </div>
                    </div>

                
                </div>
                
                
            </div>
        </div>
    )
}

export default Header

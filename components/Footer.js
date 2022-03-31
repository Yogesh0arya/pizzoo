import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="bg-[url('/images/horizontal.jpg')] bg-cover text-center text-white">
                <div className="bg-black bg-opacity-40 py-12">
                    <h1 className="text-xl font-bold md:text-2xl xl:text-4xl 2xl:text-5xl mb-3">We Offer You an Unforgettable </h1>
                    <h1 className="text-xl font-bold md:text-2xl xl:text-4xl 2xl:text-5xl mb-3">Delivery Experience</h1>
                    <button className=" bg-gradient-to-r from-red-600 to-red-800 py-1 px-2 lg:px-3 lg:py-2 xl:text-lg rounded-full">Order Online</button>
                </div>
            </div>

            <div className="bg-[rgb(27,22,22)] text-white py-24">
                <div className="max-w-6xl mb-6 mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-12 text-center">
                    <div>
                        <h1 className="text-2xl lg:text-4xl mb-3 font-bold">Contact Us</h1>
                        <p>207, 1st Floor, 4th Cross, CMR Road, 3rd Block</p>
                        <p>HRBR Layout, Kalyan Nagar, Bangalore - 560043</p>
                        <p className="cursor-pointer mt-4">+91 6360266160</p>
                        <p className="cursor-pointer">franchise@uspizza.in</p>
                    </div>
                
                    <div>
                        <h1 className="text-2xl lg:text-4xl mb-3 font-bold">Stay Connected</h1>
                        <p>Follow us on social media channels</p>
                        <div className="flex gap-3 sm:space-x-1 mt-4 justify-center">
                            <FaYoutube className="w-10 h-10 p-3 bg-red-700 text-white hover:bg-white hover:text-red-500 rounded-full"/>
                            <FaTwitter className="w-10 h-10 p-3 bg-red-700 text-white hover:bg-white hover:text-blue-500 rounded-full"/>
                            <FaInstagram className="w-10 h-10 p-3 bg-red-700 text-white hover:bg-white hover:text-pink-500 rounded-full"/>
                            <FaLinkedinIn className="w-10 h-10 p-3 bg-red-700 text-white hover:bg-white hover:text-blue-500 rounded-full"/>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl lg:text-4xl mb-3 font-bold">Timings</h1>
                        <p>Monday - Sunday</p>
                        <p>11:00 AM - 10:00 PM</p>
                    </div>
                </div> 

                <hr/>

                <div className="max-w-6xl mx-auto px-5 flex flex-wrap lg:text-lg justify-center mt-12 gap-x-5 text-red-500">
                    <p className="cursor-pointer">● HOME</p>
                    <p className="cursor-pointer">● ABOUT US</p>
                    <p className="cursor-pointer">● MENU</p>
                    <p className="cursor-pointer">● GALLERY</p>
                    <p className="cursor-pointer">● FRANCHISE</p>
                    <p className="cursor-pointer">● STORE LOCATOR</p>
                    <p className="cursor-pointer">● CONTACT US</p>
                    <p className="cursor-pointer">● ORDER NOW</p>           
                </div>
                <p className="max-w-6xl mx-5 lg:mx-auto text-center mt-3 md:text-lg">Copyright © 2021 US Pizza All Rights Reserved Designed By Petpooja.</p>
            </div>
        </>
    )
}

export default Footer
function FrontPage() {
    return (
        <div className="bg-[url('/images/piza3.jpg')] h-screen bg-cover text-white">
            <div className="max-w-6xl mx-auto px-5 lg:mx-24 pt-44">
                <button className="bg-red-600 rounded-md text-xs md:text-base p-1 lg:p-2">MENU</button>
                <p className="text-lg md:text-2xl xl:text-4xl md:w-[600px] 2xl:w-[820px] 2xl:text-5xl my-5">The only Pizza made from </p>
                <h1 className="text-lg md:text-2xl xl:text-4xl md:w-[600px] 2xl:w-[820px] 2xl:text-5xl my-5"> Fresh Dough for Fresh Pizza</h1>

                <div className="bg-white rounded-sm p-2 w-full md:w-max" >
                    <input type="email" className="w-full md:mr-12 outline-none md:w-80 lg:w-96 text-black" placeholder="Serach your location..." />  
                    <button className="hidden md:inline bg-gradient-to-r from-red-600 to-red-800 p-1 lg:p-3 xl:text-lg rounded-sm">Order Online</button>
                </div>
                <button className="mt-8 md:hidden w-full bg-gradient-to-r from-red-600 to-red-800 p-1 lg:p-3 xl:text-lg rounded-full">Order Online</button>

            </div>
            
        </div>
    )
}

export default FrontPage
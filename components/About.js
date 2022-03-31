function About() {
    return (
        <>
            <div className="py-10 md:py-24 bg-black text-white text-center">
                <h1 className="text-xl font-bold md:text-2xl xl:text-4xl 2xl:text-5xl mb-3">Welcome To PIZZOO...</h1>
                <p className="text-gray-200 md:w-[500px] lg:w-[700px] mx-auto">USPizza is all about quality you can trust. As one of the original founding Pizza brands and the 3rd largest Pizza chain in India, our sole mission is making the freshest, tastiest and funnest Pizza around.</p>
            </div>

            <div className="grid grid-cols-5">
                <img className="h-full" src="/images/step0.jpg"/>
                <img className="h-full" src="/images/step1.jpg"/>
                <img className="h-full" src="/images/step2.jpg"/>
                <img className="h-full" src="/images/step3.jpg"/>
                <img className="h-full" src="/images/step4.jpg"/>
            </div> 
        </>
    )
}

export default About
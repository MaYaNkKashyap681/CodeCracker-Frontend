

const Hero = () => {
    return (
        <section className='h-screen w-screen relative'>
            <div className="w-[14rem] h-[14rem] bg-blue-300 blur-[10rem] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className=' container mx-auto flex items-center justify-center h-full flex-col'>
                <div className="relative inline-flex  before:inset-0 ">
                    <span className="relative px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.primary.900),_theme(colors.primary.900))_padding-box,_conic-gradient(theme(colors.primary.400),_theme(colors.primary.700)_25%,_theme(colors.primary.700)_75%,_theme(colors.primary.400)_100%)_border-box] before:absolute before:inset-0 before:bg-zinc-800/30 before:rounded-full before:pointer-events-none">
                        Github Workflow Becomes Easier Now{" "}
                        <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                        </span>
                    </span>
                </div>
                <h1
                    className="pb-4 text-center font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl  bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60"
                    data-aos="fade-down"
                >
                    Increase your Productivity by 10x using CodeCrack
                </h1>
                <div className="mt-[4rem]">
                    <button className="w-full transition duration-150 ease-in-out bg-opacity-25 text-zinc-100 hover:text-white  hover:bg-opacity-30 bg-primary rounded-lg p-2">
                        Get Started for Free Today!
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
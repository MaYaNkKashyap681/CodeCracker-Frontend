const Navbar = () => {
    return (
        <nav className="max-h-[5rem] sticky top-0 z-[50]">
            <div className="flex justify-between items-center h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-[8rem] bg-opacity-10 shadow-sm px-12 py-3 ">
                <div>
                    <span className=" text-secondary text-xl font-bold">CodeCraker.io</span>
                </div>
                <div>
                    <button className="p-1 bg-primary px-4 rounded-sm text-white font-semibold text-sm">Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
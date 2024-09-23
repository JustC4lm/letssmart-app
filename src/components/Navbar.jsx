const Navbar = () => {
    return (
        <div 
            className="navbar fixed w-full transition-all py-4 bg-slate-100 bg-opacity-75 shadow" 
            style={{ zIndex: 1000 }}
        >
            <div className="container mx-auto px-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo">
                        <h1 className="text-2xl font-bold  text-blue-500 [text-shadow:_0_0_26px_purple]">LetsSmart🎓</h1>
                    </div>
                    <ul className="flex gap-12">
                        <li>
                            <a href="#Home" className="font-medium opacity-85 hover:text-violet-950 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:[text-shadow:_0_0_10px_purple]">Home</a>
                        </li>
                        <li>
                            <a href="#About" className="font-medium opacity-85 hover:text-violet-950 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:[text-shadow:_0_0_10px_purple]">About Us</a>
                        </li>
                        <li>
                            <a href="#Services" className="font-medium opacity-85 hover:text-violet-950 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:[text-shadow:_0_0_10px_purple]">Our Services</a>
                        </li>
                    </ul>
                    <div className="sosmed">
                        <a href="#Sosmed" className="bg-violet-600 px-5 py-2 rounded text-white font-bold hover:bg-violet-500 transition-all">Social Media</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar   
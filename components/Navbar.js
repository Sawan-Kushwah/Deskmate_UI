import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar flex justify-between pt-5 pb-7 w-4/5 mx-auto items-center max-sm:w-11/12">
            <div className="heading">
                <h1 className=' text-3xl font-bold max-md:text-xl'>Room Managment</h1>
            </div>
            <div className="searchBox flex border bg-white rounded-lg items-center">
                <img src="/frameIcons/search.png" alt="" width="30" height="30" className=' ml-2 cursor-pointer' />
                <input type="text" placeholder="Search Room no" className=' border-none outline-none p-3 max-md:w-20' />
                <img src="/frameIcons/bar.png" alt="" width="30" height="30" className=' mr-2 cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar
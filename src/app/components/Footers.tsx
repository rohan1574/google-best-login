import React from 'react';

const Footers = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1444492696363-332accfd40c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyZWUlMjBvbiUyMGJvZHklMjBvZiUyMHdhdGVyJTIwbmVhcnxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover bg-no-repeat h-[100vh] relative mx-auto w-[1440px] ">
           <div className='w-[1440px] mx-auto h-[100vh] bg-black opacity-50 absolute top-0 left-0 flex items-center'>
            <div className='relative text-white text-center flex flex-col gap-4 mx-auto border-2 rounded-md px-4 w-[30%] py-6 shadow-xl shadow-purple-500 '>
              <h1 className='text-2xl uppercase font-semibold'>Login Page</h1>
              <div className='flex flex-col gap-2 w-[70%] mx-auto'>
                <label className='text-xl font-semibold text-left' >Username</label>
                <input className='outline-none px-4 rounded-full bg-transparent border-2 text-white' type="text" placeholder='Enter Your Name' />
              </div>
              <div className='flex flex-col gap-2 w-[40%] mx-auto'>
                <label className='text-xl font-semibold text-left' >Password</label>
                <input className='outline-none px-4 rounded-full ' type="text" placeholder='Enter Your Password' />
              </div>
              <button className='bg-purple-700 px-4 py-2 rounded-md text-xl w-[200px] mx-auto hover:bg-transparent hover:border-purple-600 border-2 '>Login</button>
            </div>
            
            </div> 
        </div>
    );
};

export default Footers;
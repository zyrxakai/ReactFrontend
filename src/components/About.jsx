import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full p-20 bg-white rounded-tl-3xl rounded-tr-3xl text-black'>
      <p className='text-[5vw] font-semibold color-black py-5 -mt-7'>WELCOME</p>
        <h1 className="font-[' '] text-2xl leading-[2vw] tracking-tight color-black-300">Welcome to our eCommerce store, where convenience meets variety! Our journey began in 2024, driven by a vision to revolutionize online shopping. What started as a small idea has 
          transformed into a thriving platform that caters to the diverse needs of our customers. With each passing year, we've embraced 
          technology and innovation, expanding our product range to include everything from electronic devices to groceries and clothing. 
          As we navigate the ever-changing eCommerce landscape, our commitment to exceptional service and quality products remains steadfast.</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-bg-[#738146]'>
            <div className="w-1/2">
                <h1 className="text-7xl font-semibold">Our approach:</h1>
                <p className='p-10 -ml-10 color-black-400'>At our core, we believe in making shopping an enjoyable and hassle-free experience for everyone. Our primary purpose is to deliver a wide array of high-quality products at competitive
                   prices while ensuring that our customers can shop from the comfort of their homes. Our goals include expanding our product offerings, enhancing
                    our website for an improved user experience, and fostering a community where customers feel valued and heard. We strive to become the go-to online destination for all your shopping needs.</p>
                <button className="flex gap-10 uppercase items-center px-12 py-4 bg-black mt-10 rounded-full text-white">Read More</button>
                <div className="w-2 h-2 -mt-8 ml-7 bg-white rounded-full"></div>
            </div>
            <div className="w-1/2 h-[70vh]  bg-white">
            <img className='w-full h-full object-cover rounded-3xl ' src="/public/assets/images/ab2.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
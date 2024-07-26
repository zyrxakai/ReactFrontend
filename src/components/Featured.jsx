import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({y: 0});
        
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: 100});
    };
    
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-black-700 pb-20'>
            <h1 className='text-8xl font-semibold tracking-tight'>Featured Products</h1>
            
        </div>
        <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
            <motion.div 
            onHoverStart={() =>handleHover(0)} 
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative  w-1/2 h-[75vh] ">

            <h1 className='absolute flex text-[#a6cc0e] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font[" "] '>
            {"FASHION".split('').map((item, index) => (
                <motion.span
                 initial= {{y: "100%"}} 
                 animate={cards[0]}
                 transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02}}
                className="inline-block ">
                {item}</motion.span>
                ))}
            </h1>

                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full object-cover' src="/public/assets/images/outfit.jpg" alt="" />
                </div>
            </motion.div>

            <motion.div 
            onHoverStart={() =>handleHover(1)} 
            onHoverEnd={() => handleHoverEnd(1)} 
            className="cardcontainer relative w-1/2 h-[75vh] ">

            <h1 className='absolute flex overflow-hidden text-[#a6cc0e] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font[" "] '>
            {"ELECTRONICS".split('').map((item, index) => (
                 <motion.span initial= {{y: "100%"}} animate={cards[1]}
                 transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02}}
                 className="inline-block ">
                 {item}</motion.span>
                ))}
            </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full object-cover' src="/public/assets/images/elegad.jpg" alt="" />
                </div>
            </motion.div>

            
            </div>

            <div 
            className="cardcontainer p-10 -mt1-5 ml-[140px] relative w-[80%] h-[75vh] ">

            <h1 className='absolute flex overflow-hidden text-[#a6cc0e] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font[" "] '>

            </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <video className="w-full h-fill object-cover" src="/public/assets/videos/product_intro.mp4" muted autoPlay loop></video>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Featured
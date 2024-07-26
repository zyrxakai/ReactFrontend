import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-900'>
        <div className='text border-t-2 border-b-2 border-grey-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[15vw] leading-none font-[" "] uppercase font-semibold pr-20'>we are Name</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[15vw] leading-none font-["" ] uppercase font-semibold pr-20'>we are Name</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
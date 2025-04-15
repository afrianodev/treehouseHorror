import { useState } from "react";
import {motion, AnimatePresence, useAnimationControls} from 'framer-motion';

export default function Footer() {
    const [visible, setVisible] = useState(true)
    const [isFlipped, setIsFlipped] = useState(false);
    const flipControls = useAnimationControls()
    const handleClick = () => {
        setIsFlipped((prev) => !prev);
        flipControls.start(isFlipped ? 'initial' : 'flip');
    }
    return (
    <footer className='bg-[#262626] flex gap-4 items-center justify-center w-[100vw] h-[240px] overflow-hidden select-none'>
        <div className="flex flex-col items-center justify-center gap-4">
            <motion.button onClick={() => setVisible(prevState => !prevState)} className="text-white p-2 border rounded-md"
            layout>Click to show/hide</motion.button>
            <AnimatePresence mode="popLayout">
            {visible && <motion.div className='bg-white h-12 w-12'
            initial={{rotate:0, scale:0, y:-100}}
            animate={{rotate:-180, scale:1, y:0}}
            transition={{duration: 1, ease:'easeInOut'}}
            exit={{rotate:0, scale:0}}>
            
            </motion.div>}</AnimatePresence>
        </div>

        <div>
            <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.85}} transition={{duration:0.25}} className="text-white p-2 border rounded-md">Click me</motion.button>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
            <motion.button onClick={handleClick} className="text-white p-2 border rounded-md"
            layout>Click to show/hide</motion.button>
            <motion.div className='bg-white h-12 w-12'
            variants={{
                initial: {
                    rotate:0
                },
                flip: {
                    rotate: 180
                }
            }}
            initial='initial'
            animate={flipControls}
            >
            </motion.div>
        </div>
        <motion.div className='bg-white h-12 w-12 ml-4'
            initial={{x:-10}}
            animate={{x:10}}
            exit={{x:'100%'}}
            transition={{repeat:Infinity, duration:1, ease:'linear', repeatType:'reverse'}}
            >
        </motion.div>

    </footer>
    )
}
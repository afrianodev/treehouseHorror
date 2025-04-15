import { useState } from "react"
import { shortFilms } from "./shortFilms";
import {motion} from 'framer-motion'

const randomNum = () => Math.floor(Math.random() * shortFilms.length)

export default function Recomendations() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [randomMovie, setRandomMovie] = useState(randomNum);
  const [isChanging, setIsChanging] = useState(false);
  
    
    function handlePlay() {
      setIsPlaying(!isPlaying)
    }
    
    function handleRandomMovie() {
      setIsChanging(true);
      setTimeout(() => {
        setRandomMovie(randomNum);
        setIsChanging(false);
      }, 500);
    }

    const backgroundImageStyle = {
      backgroundImage: `url(${shortFilms[randomMovie].cover})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // height: '100vh',
      width: '100vw',
    };

    const collapseExpandVariant = {
      collapsed: {
        height: 0, // Collapse the height
        transition: { duration: 0.5, ease: 'easeInOut' },
      },
      expanded: {
        height: 'auto', // Expand to the full content height
        transition: { duration: 0.5, ease: 'easeInOut' },
      },
    };

    const textFadeVariant = {
      hidden: {
        opacity: 0, // Hide text
        transition: { duration: 0.4, ease: 'easeInOut' },
      },
      visible: {
        opacity: 1, // Show text
        transition: { duration: 0.4, ease: 'easeInOut' },
      },
    };

    return(
<>
{isPlaying ?
  <div className='fixed inset-0 bg-black flex flex-col items-center justify-center'>
    <div className="flex gap-6 mt-4">
      <div className="bg-white cursor-pointer rounded-lg h-8 w-32 text-xl flex items-center justify-center gap-2" onClick={handlePlay}><svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 299.021 299.021" xml:space="preserve" width={15}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M292.866,254.432c-2.288,0-4.443-1.285-5.5-3.399c-0.354-0.684-28.541-52.949-146.169-54.727v51.977 c0,2.342-1.333,4.48-3.432,5.513c-2.096,1.033-4.594,0.793-6.461-0.63L2.417,154.392C0.898,153.227,0,151.425,0,149.516 c0-1.919,0.898-3.72,2.417-4.888l128.893-98.77c1.87-1.426,4.365-1.667,6.461-0.639c2.099,1.026,3.432,3.173,3.432,5.509v54.776 c3.111-0.198,7.164-0.37,11.947-0.37c43.861,0,145.871,13.952,145.871,143.136c0,2.858-1.964,5.344-4.75,5.993 C293.802,254.384,293.34,254.432,292.866,254.432z"></path> </g> </g> </g></svg>Back</div>
      <div className="bg-white cursor-pointer rounded-lg h-8 w-32 text-xl flex justify-center items-center">Info</div>
    </div>
    <iframe
      width="95%" 
      height="95%" 
      src={shortFilms[randomMovie].url}
      title="Movie" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
  </div> : 
  <section style={backgroundImageStyle} className='h-[80vh] pb-[5%]'>
    <div className='w-[90vw] sm:w-[50vw] h-full flex flex-col gap-4 ml-[3%] justify-end text-slate-50 text-justify'>
      <motion.div className='max-w-[100%] sm:max-w-[70%] bg-black bg-opacity-50 p-4 rounded-lg flex flex-col gap-4 overflow-hidden'
      initial="collapsed"
      animate={isChanging ? "collapsed" : "expanded"}
      variants={collapseExpandVariant}>
        <motion.div
                initial="hidden"
                animate={isChanging ? "hidden" : "visible"}
                variants={textFadeVariant} // Animate text opacity
                className="flex flex-col gap-4"
              >
        <h2 className='text-xl '>{shortFilms[randomMovie].name}</h2>
        <p>{shortFilms[randomMovie].synopsis}</p>
        <div className="flex gap-4 sm:gap-8 text-xs text-gray-400">
          <p>{shortFilms[randomMovie].duration} mins</p>
          <p>{shortFilms[randomMovie].director}</p>
          <p>{shortFilms[randomMovie].year}</p>
        </div>
        </motion.div>
      </motion.div>
      <div className='flex gap-6 items-center'>
        <div onClick={handlePlay} className='bg-yellow-500 hover:bg-gray-400 hover:text-gray-800 flex gap-1 items-center justify-center text-black rounded-lg w-32 h-12 text-xl select-none cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
        </svg>Play
        </div>
        <div className='bg-gray-700 hover:bg-gray-800 rounded-lg h-12 flex items-center justify-center w-52 cursor-pointer select-none' onClick={handleRandomMovie}>Another Short</div>
        </div>
      </div>
  </section> }
</>
    )
}
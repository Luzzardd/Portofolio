import sapiq from '../assets/image/sapiq.svg'
import pi from '../assets/image/pi.svg'
import traf from '../assets/image/tafo.svg'
const Work = () => {
  return (

    <div className="max-w-[1200px] mx-auto p-5" id="work">
        <div className="pb-8">
            <p className="text-4xl font-bold mb-3 primary-color">Work</p>
            <p className="text-gray-400">Check out some of my recent work</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
        <img src={sapiq} alt="Project 1" className="w-full h-full object-cover" />
        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
                <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>
                        Live
                    </button>
                </a>
            </div>
        </div>
    </div>
    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
        <img src={traf} alt="Project 2" className="w-full h-full object-cover" />
        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
                <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>
                        Live
                    </button>
                </a>
            </div>
        </div>
    </div>
    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
        <img src={pi} alt="Project 3" className="w-full h-full object-cover" />
        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
                <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-bold text-lg'>
                        Live
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>

            
</div> 

  )
}

export default Work
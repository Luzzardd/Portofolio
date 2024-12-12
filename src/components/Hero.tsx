import {TypeAnimation} from 'react-type-animation'
import profile from '../assets/image/profile.svg'
const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70hv] mx-auto py-8 bg-black'>
        <div className='col-span-1 my-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={profile} alt="hero image" />
        </div>
        <div className='col-span-2 px-5'>
            <h1 className='text-white text-4x1 sm:text-5x1 lg:text-8x1 font-extrabold'>
                <span className='primary-color text-5xl font-bold'>
                    I'm a
                </span > <br />
                <div className='text-4xl font-bold'>
                <TypeAnimation
                sequence ={[
                    "Frontend Dev",
                    1000,
                    "Backend Dev",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
                </div>
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
            Saya Muhammad Naufal Hasyim, seorang Full-Stack Web Developer dengan keahlian di JavaScript, React.js, dan Laravel. Saya mengembangkan solusi web scalable yang mendukung kebutuhan bisnis Anda.
            </p>
            <div className='my-8'>
                {/* <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                Download CV
                </a> */}
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 border-gray-400 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                Contanct
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
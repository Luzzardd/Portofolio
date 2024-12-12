import html from '../assets/image/html.png'
import css from '../assets/image/css.png'
import react from '../assets/image/react.png'
import tailwind from '../assets/image/tailwind.png'

const Skill = () => {
  return (
    <>
        <div className="text-center">
            <h2 className="text-4xl font-bold leading-tight primary-color mb-4"> My Skill</h2>
        </div>
      <div className="bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center">
        <h2 className="text-white text-2x1 md:text-4x1 font-bold m-4">
          Frontend <br /> Dev
        </h2>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={html} alt="html" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={css} alt="css" width={100} height={100} />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={react} alt="react" width={100} height={100} />
          <p className="mt-2">ReactJS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={tailwind} alt="tailwind" width={100} height={100} />
          <p className="mt-2">Tailwind</p>
        </div>
      </div>
      <div className="bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center">
        <h2 className="text-white text-2x1 md:text-4x1 font-bold m-4">
          Backend <br /> Dev
        </h2>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={html} alt="html" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={css} alt="css" width={100} height={100} />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={react} alt="react" width={100} height={100} />
          <p className="mt-2">ReactJS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={tailwind} alt="tailwind" width={100} height={100} />
          <p className="mt-2">Tailwind</p>
        </div>
      </div>

    </>
  );
}

export default Skill;

import trafo from '../assets/image/image 2.svg'
const Experience = () => {
  return (
<div className="text-white max-w-[1200px] mx-auto my-12" id="about">
  <div className="sm:py-16">
    <div className="mt-4 text-left mb-8">
      <h2 className="text-4xl font-bold primary-color">Experience</h2>
    </div>
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8">
      <p className="text-base lg:text-lg mb-4 md:mb-0">
        <strong>Perusahaan:</strong> PT Trafoindo<br />
        <strong>Timeline:</strong> 14 Agustus 2023 - 31 Desember 2023<br />
        <strong>Tanggung Jawab:</strong> Sebagai PIC dalam Project pembuatan website
      </p>
      
      <img 
        className="rounded-xl "
        src={trafo} 
        alt="About Me" 
        width={400} 
        height={400} 
      />
    </div>
  </div>
</div>



  )
}

export default Experience
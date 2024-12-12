import about from '../assets/image/WhatsApp Image 2024-12-12 at 23.37.03.jpeg'
const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
    <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
            <div className="my-auto mx-6">
                <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                <p className="text-base lg:text-lg">
                Saya Muhammad Naufal Hasyim, seorang Full-Stack Web Developer dengan gelar S1 Teknik Informatika dan passion yang mendalam di bidang pengembangan aplikasi web. Saya memiliki keterampilan kuat dalam JavaScript, serta berpengalaman menggunakan React.js untuk pengembangan front-end dan Laravel untuk back-end. Keberhasilan sebuah proyek, menurut saya, sangat bergantung pada kolaborasi tim yang solid, kecepatan bekerja, dan komunikasi yang efektif. Dengan prinsip tersebut, saya selalu berusaha menyelesaikan tugas tepat waktu, menjaga kualitas kerja, serta memastikan alur komunikasi yang jelas di setiap tahap pengembangan. Saya juga selalu bersemangat untuk terus belajar dan berkembang dalam dunia teknologi yang terus berubah.
                </p>
            </div>
        </div>
        <img 
            className="mx-auto rounded-xl py-8 md:py-0" 
            src={about} 
            alt="About Me" 
            width={300} 
            height={300} 
        />
    </div>
</div>

  )
}

export default About
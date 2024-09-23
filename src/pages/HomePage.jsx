import HeroImg from "../assets/img/HeroImg.png";
import BgImg from "../assets/img/BgImg.jpg"; 
import AboutUs from "../assets/img/AboutUs1.png";
import VisiImg from "../assets/img/VisiImg.jpg"
import MisiImg from "../assets/img/MisiImg.jpg"
import facebook from "../assets/img/facebook.png"
import youtube from "../assets/img/youtube.png"
import twitter from "../assets/img/twitter.png"
import whatsapp from "../assets/img/whatsapp.png"

const HomePage = () => {
    return (
        <div className="homepage pb-12">
            {/* Hero Section with Background Image */}
            <div className="relative py-7" id="Home">
                <img src={BgImg} alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="hero grid grid-cols-2 items-center pt-32 gap-40">
                        <div className="box">
                        <h1 className="text-5xl font-extrabold mb-0 text-sky-500 transition-all duration-300 ease-in-out hover:text-sky-300 hover:-translate-y-1 hover:[text-shadow:_0_0_26px_gray]">
  Unlock Your Potential
</h1>
<br />
                            <h1 className="text-5xl font-extrabold mb-7 text-blue-400 transition-all duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-1 hover:[text-shadow:_0_0_26px_gray]">Achieve Your Future</h1>
                            <p className="text-base mb-12 font-medium text-white">Jelajahi dunia pendidikan dengan LetsSmart, memberdayakan generasi Indonesia untuk masa depan yang lebih cerdas.</p>
                            <a href="#" className="bg-violet-600 hover:bg-violet-500 transition-all py-3 px-12 text-white shadow rounded-full font-medium">Learn More</a>
                        </div>
                        <div className="box">
                            <img src={HeroImg} alt="Hero Image" className="w-full transition-all duration-300 ease-in-out transform hover:-translate-y-5 hover:scale-105 hover:brightness-110" />
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-violet-900/60"></div>
            </div>

            {/* About Us Section */}
            <div className="container mx-auto px-4 mt-20" id="About">
                <div className="aboutus mb-8">
                    <h1 className="text-3xl font-bold text-center text-violet-700">About Us</h1>
                </div>
                <div className="about grid grid-cols-2 items-stretch gap-2 pt-16">
                    <div className="box">
                        <img src={AboutUs} alt="About Img" className=" w-11/12 rounded-2xl" />
                    </div>
                    <div className="box2">
                        <h1 className="text-4xl font-bold my-4">Strategic Advisers for Excellence</h1>
                        <p className="text-lg my-10 text-slate-800 font-medium">LetsSmart hadir sebagai platform edukasi dan kursus online terdepan yang memberikan solusi pembelajaran berkualitas untuk setiap individu yang ingin berkembang di era modern. Kami berkomitmen untuk menyediakan akses pembelajaran yang mudah, terjangkau, dan relevan, untuk mendukung perkembangan karier dan potensi setiap pengguna.<br /> <br />

                        Dengan tagline "Unlock Your Potential, Achieve Your Future," LetsSmart menyediakan berbagai kursus dari bidang perbankan, keuangan, human capital, hingga keterampilan digital dan personal development. Kami percaya bahwa setiap orang berhak mendapatkan akses pendidikan terbaik, kapan saja dan di mana saja.<br /> <br />

                        LetsSmart juga didukung oleh pengajar berpengalaman yang sudah bersertifikat dan materi yang selalu diperbarui sesuai dengan kebutuhan industri dan perkembangan zaman. Kami membantu menciptakan komunitas pembelajar yang dinamis, sehingga setiap peserta dapat tumbuh bersama dan saling menginspirasi.</p>
                    </div>
                </div>
            </div>

            {/* Visi */}
            <div className="visi grid grid-cols-2 items-stretch gap-2 pt-16">
                <div className="box mx-14">
                    <h1 className="font-extrabold text-3xl my-2">Visi</h1>
                    <p className="text-lg text-slate-800 font-medium">Menjadi platform belajar online terbaik di Indonesia, yang mendukung setiap individu untuk mengembangkan kemampuan dan siap menghadapi masa depan.

</p>
                    <div className="rectangle bg-violet-600 items-center rounded-2xl py-8 my-5">
                        <h1 className="font-extrabold text-xl text-amber-300 py-0 mx-5">Terbaik</h1>
                        <p className="mx-5 text-white font-medium py-1">Menjadi tempat belajar online yang paling terpercaya dan seru di Indonesia. Menghadirkan kursus yang dibuat oleh para ahli di bidang pendidikan, teknologi, dan keterampilan praktis. Dengan materi yang selalu diperbarui, memastikan kamu bisa belajar dengan cara yang sesuai dengan kebutuhan industri dan perkembangan terbaru.</p>
                    </div>
                    <div className="rectangle2  bg-violet-600 items-center rounded-2xl py-8 my-5">
                        <h1 className="font-extrabold text-xl text-amber-300 py-0 mx-5">Membanggakan</h1>
                        <p className="mx-5 text-white font-medium py-1">Menjadi kebanggaan Pelanggan dengan hasil belajar yang memuaskan. LetsSmart berkomitmen untuk mendukung pencapaian pribadi dan profesional setiap orang. Dengan program belajar yang fleksibel dan efektif, kami percaya kamu bisa mencapai impianmu dan bangga dengan pencapaian yang diraih.</p>
                    </div>
                </div>
                <div className="box2">
                    <img src={VisiImg} alt="VisiImg" className="w-10/12 rounded-2xl" />
                </div>

            </div>
            {/* Misi Section */}
            <div className="misi grid grid-cols-2 gap-2 pt-16 items-center">
                <div className="box mx-14">
                    <img src={MisiImg} alt="" className="w-12/12 rounded-2xl"/>
                </div>
                <div className="box2">
                    <h1 className="font-extrabold text-3xl my-7">Misi</h1>
                    <ul className="font-medium text-lg text-slate-800  my- gap-5">
                        <li className="my-5">1. Menghubungkan Pembelajar dengan Mentor Terbaik</li>
                        <li className="my-5">2. Memberikan pelayanan terbaik yang terpadu dan profesional</li>
                        <li className="my-5">3. Mengembangkan Keterampilan yang Relevan dengan Industri</li>
                        <li className="my-5">4. Menyediakan Kursus Berkualitas</li>
                        <li className="my-5">5. MMendorong Pembelajaran Berkelanjutan</li>
                    </ul>
                </div>
            </div> 
            
            {/* Our Services Section */}
            <div className="ourservices" id="Services">
                <h1 className="text-3xl font-bold text-center text-violet-700 my-24">Our Services</h1>
            </div>

            <div className="container grid grid-cols-3  mx-14 gap-7">
                <div className="box1 bg-violet-600 py-8 rounded-2xl  align-top">
                    <h1 className="text-2xl font-bold   text-amber-400 align-top mx-5">Persiapan dan Latihan Soal UTBK</h1>
                    <p className="mx-5 my-4 font-normal  text-white  my- gap-5"> Dirancang khusus untuk membantu pelajar mempersiapkan diri menghadapi UTBK dengan latihan soal dan strategi belajar. Dengan mengikuti kursus ini, kamu akan mendapatkan:</p>
                    <ul>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">1. Latihan soal UTBK terbaru dan berkualitas</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">2. Pembahasan soal dari berbagai mata pelajaran yang diujikan </li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">3. Strategi mengerjakan soal dengan cepat dan tepat</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">4. Simulasi UTBK untuk mengukur kemampuan</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">5. Bimbingan intensif untuk meningkatkan skor UTBK</li>
                    </ul>
                    <p className="mx-5 my-4 font-normal  text-white   gap-5"> Durasi : 6 Minggu</p>
                    <div className="button bg-amber-400 mx-10 py-2 align-middle text-center rounded-full hover:cursor-pointer hover:bg-amber-200 transition-all my-4">
                        <h1 className="font-medium text-xl align-bottom">Rp. 420.000</h1>
                    </div>
                </div>
                <div className="box2 bg-violet-600 py-8 rounded-2xl  align-top">
                    <h1 className="text-2xl font-bold   text-amber-400 align-top mx-5">Kelas Tatap Muka dan Latihan Soal</h1>
                    <p className="mx-5 my-4 font-normal  text-white  my- gap-5"> Memberikan kesempatan kepada pelajar untuk belajar langsung dengan guru profesional dalam kelas tatap muka yang interaktif. Dengan kursus ini, kamu akan mendapatkan:</p>
                    <ul>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">1. Pembelajaran materi secara langsung di kelas</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">2. Latihan soal harian untuk mengukur pemahaman </li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">3. Diskusi kelompok untuk memecahkan soal-soal sulit</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">4. Bimbingan pribadi untuk siswa yang memerlukan bantuan tambahan</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">5. Review materi ujian secara menyeluruh</li>
                    </ul>
                    <p className="mx-5 my-4 font-normal  text-white  my- gap-5"> Durasi : 8 Minggu</p>
                    <div className="button bg-amber-400 mx-10 py-2 align-middle text-center rounded-full hover:cursor-pointer hover:bg-amber-200 transition-all gap-0 my-">
                        <h1 className="font-medium text-xl">Rp. 500.000</h1>
                    </div>
                    <div className="empty">
                        <h1 className="my-16"></h1>
                    </div>
                </div>
                <div className="box3 bg-violet-600 py-8 rounded-2xl  align-top">
                    <h1 className="text-2xl font-bold   text-amber-400 align-top mx-5">Kursus Bahasa Inggris dengan Native Teachers</h1>
                    <p className="mx-5 my-4 font-normal  text-white  my- gap-5">  Membantu pelajar meningkatkan kemampuan Bahasa Inggris mereka dengan bimbingan langsung dari guru-guru native yang berpengalaman. Dengan kursus ini, kamu akan mempelajari:</p>
                    <ul>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">1. Percakapan sehari-hari dengan native speakers</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">2. Pronounciation dan aksen yang natural </li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">3. Penulisan esai dan tugas akademik dalam Bahasa Inggris</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">4. Pemahaman mendalam tentang tata bahasa (grammar)</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">5. Latihan listening persiapan tes internasional TOEFL dan IELTS</li>
                    </ul>
                    <p className="mx-5 my-4 font-normal  text-white   gap-5"> Durasi : 5 Minggu</p>
                    <div className="button bg-amber-400 mx-10 py-2 align-middle text-center rounded-full hover:cursor-pointer hover:bg-amber-200 transition-all my-4">
                        <h1 className="font-medium text-xl align-bottom">Rp. 550.000</h1>
                    </div>
                </div>
            </div>

            {/* Sosmed  Section */}

            <div className="med" id="Sosmed">
                <h1 className="text-3xl font-bold text-center text-violet-700 my-12">Social Media</h1>
            </div>

            <div className="Medsos grid grid-cols-4 w-3/12 mx-auto my-10 gap-4 text-center">
    <div className="flex justify-center">
        <a href="#"><img src={youtube} alt="YouTube" /></a>
    </div>
    <div className="flex justify-center">
        <a href="#"><img src={facebook} alt="Facebook" /></a>
    </div>
    <div className="flex justify-center">
        <a href="#"><img src={twitter} alt="Twitter" /></a>
    </div>
    <div className="flex justify-center">
        <a href="#"><img src={whatsapp} alt="WhatsApp" /></a>
    </div>
</div>

        </div>
    );
}

export default HomePage;

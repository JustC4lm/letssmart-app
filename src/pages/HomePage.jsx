import HeroImg from "../assets/img/HeroImg.png";
import BgImg from "../assets/img/BgImg.jpeg"; 
import AboutUs from "../assets/img/AboutUs1.jpg";
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
            <div className="relative" id="Home">
                <img src={BgImg} alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="hero grid grid-cols-2 items-center pt-32 gap-40">
                        <div className="box">
                            <h1 className="text-5xl font-extrabold mb-7 text-purple-800">Empowering Growth, Driving Excellence</h1>
                            <p className="text-base mb-12 font-medium">Buka dunia pengetahuan keuangan dengan LetsEducate, mengembangkan kapasitas human capital di Indonesia.</p>
                            <a href="#" className="bg-violet-600 hover:bg-violet-500 transition-all py-3 px-12 text-white shadow rounded-full font-medium">About Us</a>
                        </div>
                        <div className="box">
                            <img src={HeroImg} alt="Hero Image" className="w-full" />
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-violet-100/50"></div>
            </div>

            {/* About Us Section */}
            <div className="container mx-auto px-4 mt-20" id="About">
                <div className="aboutus mb-8">
                    <h1 className="text-3xl font-bold text-center text-violet-700">About Us</h1>
                </div>
                <div className="about grid grid-cols-2 items-stretch gap-2 pt-16">
                    <div className="box">
                        <img src={AboutUs} alt="About Img" className=" w-10/12 rounded-2xl" />
                    </div>
                    <div className="box2">
                        <h1 className="text-4xl font-bold my-4">Strategic Advisers for Excellence</h1>
                        <p className="text-lg my-10 text-slate-800 font-medium">LetsEducate hadir untuk memberikan kontribusi positif dalam memajukan pendidikan di bidang perbankan, keuangan, dan pengembangan human capital di Indonesia. Kami berkomitmen untuk selalu memberikan solusi dan layanan terbaik kepada para profesional dan organisasi yang ingin meningkatkan kemampuan dan pengetahuan mereka di industri ini. <br /> <br />

Dengan tagline ‘Empower, Learn, Grow,’ LetsEducate senantiasa memberikan inspirasi dan nilai tambah kepada para pengguna, baik individu maupun perusahaan, melalui program pembelajaran online yang dirancang khusus untuk menciptakan profesional berkualitas di bidang perbankan, keuangan, dan human capital. <br /> <br />

Kami memiliki komitmen dan kompetensi dalam industri perbankan dan keuangan, serta pengembangan sumber daya manusia. Kami berfokus pada pencapaian hasil belajar yang optimal dan kualitas layanan yang dilakukan dengan penuh integritas, guna menciptakan pengalaman belajar yang efektif dan bermakna bagi semua.</p>
                    </div>
                </div>
            </div>

            {/* Visi */}
            <div className="visi grid grid-cols-2 items-stretch gap-2 pt-16">
                <div className="box mx-14">
                    <h1 className="font-extrabold text-3xl my-7">Visi</h1>
                    <p className="text-lg text-slate-800 font-medium">Memiliki kinerja terbaik di bidang pengembangan kapasitas human capital dan menjadi perusahaan pilihan yang terbaik bagi para pelanggan.</p>
                    <div className="rectangle bg-violet-600 items-center rounded-2xl py-8 my-5">
                        <h1 className="font-extrabold text-xl text-amber-300 py-0 mx-5">Terbaik</h1>
                        <p className="mx-5 text-white font-medium py-1">Menjadi perusahaan yang Terbaik dan Membanggakan dalam pengembangan kapasitas human capital di Indonesia dengan cara Menyediakan kursus yang dirancang oleh para ahli industri yang fokus pada perbankan, keuangan, dan pengembangan human capital, yang terus diperbarui sesuai kebutuhan pasar dan tren terbaru.</p>
                    </div>
                    <div className="rectangle2  bg-violet-600 items-center rounded-2xl py-8 my-5">
                        <h1 className="font-extrabold text-xl text-amber-300 py-0 mx-5">Membanggakan</h1>
                        <p className="mx-5 text-white font-medium py-1">Menjadi kebanggaan Pelanggan dalam pencapaian pengembangan kapasitas human capital dan menjadi kebanggaan Shareholder dalam pencapaian dividen serta menjadi kebanggaan setiap pegawai dalam pencapaian kesejahteraan.</p>
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
                        <li className="my-5">1. Sebagai mitra strategis perusahaan perbankan dan jasa keuangan lainnya</li>
                        <li className="my-5">2. Memberikan pelayanan terbaik yang terpadu dan profesional</li>
                        <li className="my-5">3. Membangun kapasitas SDM perbankan dan jasa keuangan lainnya yang  meliputi:</li>
                        <li className="my-5">4. Kompetensi, Kreatifitas dan Produktifitas</li>
                        <li className="my-5">5. Mampu memberikan nilai tambah bagi seluruh Stakeholder</li>
                    </ul>
                </div>
            </div> 
            
            {/* Our Services Section */}
            <div className="ourservices" id="Services">
                <h1 className="text-3xl font-bold text-center text-violet-700 my-24">Our Services</h1>
            </div>

            <div className="container grid grid-cols-3  mx-14 gap-7">
                <div className="box1 bg-violet-600 py-8 rounded-2xl  align-top">
                    <h1 className="text-2xl font-bold   text-amber-400 align-top mx-5">Fundamental Banking Operations</h1>
                    <p className="mx-5 my-4 font-normal  text-white  my- gap-5"> Kursus ini dirancang untuk memberikan pemahaman mendalam tentang operasi perbankan dasar. Dengan  kursus ini kamu akan menguasai :</p>
                    <ul>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">1. Dasar-dasar manajemen risiko perbankan</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">2. Strategi pengelolaan aset dan likuiditas </li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">3. Proses kredit dan manajemen pinjaman</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">4. Kepatuhan terhadap regulasi dan kebijakan perbankan</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">5. Kepatuhan terhadap regulasi dan kebijakan perbankan</li>
                    </ul>
                    <p className="mx-5 my-4 font-normal  text-white   gap-5"> Durasi : 6 Minggu</p>
                    <div className="button bg-amber-400 mx-10 py-2 align-middle text-center rounded-full hover:cursor-pointer hover:bg-amber-200 transition-all my-10">
                        <h1 className="font-medium text-xl align-bottom">Rp. 500.000</h1>
                    </div>
                </div>
                <div className="box2 bg-violet-600 py-8 rounded-2xl  align-top">
                    <h1 className="text-2xl font-bold   text-amber-400 align-top mx-5">Financial Analysis and Investment Strategies</h1>
                    <p className="mx-5 my-4 font-normal  text-white  my- gap-5"> Kursus ini menawarkan pemahaman mendalam tentang analisis keuangan dan strategi investasi oleh para profesional di industri keuangan. Dengan  kursus ini kamu akan menguasai :</p>
                    <ul>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">1. Metode analisis laporan keuangan</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">2. Strategi pengelolaan aset dan likuiditas </li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">3. Teknik penilaian aset dan investasi.</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">4. Pengembangan strategi investasi berdasarkan analisis pasar</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">5. Pengelolaan portofolio investasi untuk berbagai jenis investor</li>
                    </ul>
                    <p className="mx-5 my-4 font-normal  text-white  my- gap-5"> Durasi : 8 Minggu</p>
                    <div className="button bg-amber-400 mx-10 py-2 align-middle text-center rounded-full hover:cursor-pointer hover:bg-amber-200 transition-all gap-0 my-">
                        <h1 className="font-medium text-xl">Rp. 700.000</h1>
                    </div>
                    <div className="empty">
                        <h1 className="my-16"></h1>
                    </div>
                </div>
                <div className="box3 bg-violet-600 py-8 rounded-2xl  align-top">
                    <h1 className="text-2xl font-bold   text-amber-400 align-top mx-5">Human Capital Development in Financial Institutions</h1>
                    <p className="mx-5 my-4 font-normal  text-white  my- gap-5"> Kursus ini berfokus pada pengembangan sumber daya manusia (Human Capital) para peserta di dalam lembaga keuangan. Dengan  kursus ini kamu akan menguasai :</p>
                    <ul>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">1. Konsep dasar pengembangan SDM</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">2. Strategi untuk rekrutmen dan retensi talenta </li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">3. Teknik pengembangan keterampilan dan karir</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">4. Implementasi program pelatihan dan pengembangan dalam organisasi keuangan</li>
                        <li className="mx-5 my-1 font-medium  text-white  my- gap-5">5. Kepemimpinan dan manajemen perubahan dalam organisasin</li>
                    </ul>
                    <p className="mx-5 my-4 font-normal  text-white   gap-5"> Durasi : 5 Minggu</p>
                    <div className="button bg-amber-400 mx-10 py-2 align-middle text-center rounded-full hover:cursor-pointer hover:bg-amber-200 transition-all my-4">
                        <h1 className="font-medium text-xl align-bottom">Rp. 550.000</h1>
                    </div>
                </div>
            </div>

            {/* Sosmed  Section */}

            <div className="med" id="Sosmed">
                <h1 className="text-3xl font-bold text-center text-violet-700 my-12">Media Social</h1>
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

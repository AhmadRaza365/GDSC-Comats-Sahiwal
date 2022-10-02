import Image from "next/image";
import Header from "../components/Header";
import { IoRocketOutline } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import PartnersCard from "../components/PartnersCard";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Home() {
  const partners = [
    {
      name: "Microsoft Learn Student Ambassadors CUI Sahiwal",
      image: "/images/gdscLogo.svg",
    },
    {
      name: "Microsoft Learn ",
      image: "/images/gdscLogo.svg",
    },
    {
      name: "Microsoft ",
      image: "/images/gdscLogo.svg",
    },
    {
      name: "Microsoft Learn Student Ambassadors CUI Sahiwal",
      image: "/images/gdscLogo.svg",
    },
  ];

  return (
    <main className="grid grid-cols-12 gap-2">
      <Header />
      <section className="col-start-2 col-span-10 flex justify-between items-center py-20">
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-dark-blue">
            Google Developer Student Clubs
            <br />
            Comsats Sahiwal
          </h1>
          <p className="text-xl text-dark-blue w-3/5 text-justify">
            Developer Student Clubs is a Google Developers program for
            university students to learn development, design thinking, and
            leadership skills.
          </p>
          <button className="text-lg font-bold text-white bg-green rounded-lg shadrop-shadow-sm px-5 py-2 w-fit">
            View Upcoming Events
          </button>
        </div>
        <div className="w-1/2">
          <div>
            <Image
              src="/images/gdscAnimation.svg"
              alt="gdsc representation"
              width={1424}
              height={947}
            />
          </div>
        </div>
      </section>
      <section className="col-start-2 col-span-10 py-16">
        <h2 className="text-3xl font-bold text-dark-blue text-center">
          About GDSC
        </h2>
        <section className="flex justify-between gap-12 mt-16">
          <div className="w-1/3 flex flex-col gap-4 p-5 rounded-lg bg-green/50 shadow-2xl">
            <p className="text-6xl text-green drop-shadow-lg">
              <IoRocketOutline />
            </p>
            <h3 className="text-xl font-bold text-dark-blue">
              Concept of GDSC
            </h3>
            <p className="text-lg text-dark-blue">
              The GDSC program is a grassroots channel through which Google
              provides development skills, mobile and web development skills for
              students, towards employability.
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-4 p-5 rounded-lg bg-red/30 shadow-2xl">
            <p className="text-6xl text-red drop-shadow-lg">
              <RiLightbulbFlashLine />
            </p>
            <h3 className="text-xl font-bold text-dark-blue">Why GDSC?</h3>
            <p className="text-lg text-dark-blue">
              For students to learn development skills, solve problems through
              technology and inspire them to be world class developers and
              changemakers.
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-4 p-5 rounded-lg bg-yellow/30 shadow-2xl">
            <p className="text-6xl text-yellow drop-shadow-lg">
              <BsPeople />
            </p>
            <h3 className="text-xl font-bold text-dark-blue">
              Target audience
            </h3>
            <p className="text-lg text-dark-blue">
              GDSC activities are targeted at University students and any others
              including faculty members who want to learn development skills &
              work to solve real-life problems.
            </p>
          </div>
        </section>
      </section>
      <section className="col-start-2 col-span-10 py-16">
        <h2 className="text-3xl font-bold text-dark-blue text-center">
          OUR PARTNERS
        </h2>
        {/* <section className="flex justify-between gap-12 mt-16">
          {partners.map((partner, index) => (
            <PartnersCard
              key={index}
              name={partner.name}
              image={partner.image}
            />
          ))}
        </section> */}
        <section>
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            speed={1000}
            grabCursor={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              10: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              550: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1120: {
                slidesPerView: 3,
                spaceBetween: 45,
              },
            }}
            className=""
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="pt-24 pb-14 h-full">
                <PartnersCard
                  key={index}
                  name={partner.name}
                  image={partner.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </main>
  );
}

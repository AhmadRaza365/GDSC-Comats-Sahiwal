import Image from "next/image";
import { IoRocketOutline } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsPeople,
  BsWhatsapp,
} from "react-icons/bs";
import PartnersCard from "../components/PartnersCard";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import EventsCard from "../components/EventsCard";
import TeamCard from "../components/TeamCard";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [showFaqAnswer, setShowFaqAnswer] = useState(false);
  const hoverColors = [
    "text-light-blue",
    "text-green",
    "text-yellow",
    "text-red",
  ];

  const partners = [
    {
      name: "Comsats Computer Science Society",
      image: "/images/cssLogo.webp",
    },
    {
      name: "Microsoft Learn Student Ambassadors CUI Sahiwal",
      image: "/images/mlsaLogo.webp",
    },
    {
      name: "GitHub",
      image: "/images/githubLogo.webp",
    },
    {
      name: "MetaSchool",
      image: "/images/metaschoolLogo.webp",
    },
  ];

  const teamMembers = [
    {
      name: "Abdul Raheem",
      image: "/images/team/abdulRaheemProfile.webp",
      role: "GDSC Lead",
      bio: "",
      linkedin: "https://www.linkedin.com/in/xfarooqi/",
      twitter: "https://twitter.com/X_Farooqi",
      github: "https://github.com/XFarooqi",
      website: null,
      google: "https://gdsc.community.dev/u/mytnhw/",
    },
    {
      name: "Ahmad Raza",
      image: "/images/team/ahmadRazaProfile.webp",
      role: "Web Development Lead",
      bio: "",
      linkedin: "https://www.linkedin.com/in/ahmadraza365/",
      twitter: "https://twitter.com/AhmadRaza365",
      github: "https://github.com/AhmadRaza365",
      website: "https://ahmadraza365.diveintoskills.com/",
      google: "https://developers.google.com/profile/u/ahmadraza_365",
    },
    {
      name: "Ahmad Chaudhary",
      image: "/images/team/ahmadChProfile.webp",
      role: "Event Management Lead",
      bio: "",
      linkedin: "https://www.linkedin.com/in/muhammad-ahmad-662835153",
      twitter: "https://twitter.com/M_Ahmad_9",
      github: "https://github.com/Ahmad-ProDev",
      website: null,
      google: "https://developers.google.com/profile/u/ahmadch",
    },
    {
      name: "Arslan Khalid",
      image: "/images/team/arslanKhalidProfile.webp",
      role: "Graphics Lead",
      bio: "",
      linkedin: "https://www.linkedin.com/in/arslan4real/",
      twitter: "https://twitter.com/arslaann44",
      github: "https://github.com/arslan4real",
      website: null,
      google: "https://developers.google.com/profile/u/arslan4real",
    },
    {
      name: "Habib ur Rehman",
      image: "/images/team/habib-ur-RehmanProfile.webp",
      role: "Public Relation Lead",
      bio: "",
      linkedin: "https://www.linkedin.com/in/hafiz-habib-ur-rehman-021637205/",
      twitter: "https://twitter.com/thehabiburrehma",
      github: "https://github.com/thehabiburrehman",
      website: null,
      google: "https://developers.google.com/profile/u/thehabiburrehman",
    },
    {
      name: "Hamza Ghafoor",
      image: "/images/team/hamzaGhafoorProfile.webp",
      role: "Creative Lead",
      bio: "",
      linkedin: "https://www.linkedin.com/in/hamza-ghafoor-a2247022a",
      twitter: "https://twitter.com/HZG4H?t=RPNohD9N4W58BkvQTpepBQ&s=08",
      github: null,
      website: null,
      google: "https://developers.google.com/profile/u/106856703235903647967",
    },
    {
      name: "Iqra Mahmood",
      image: "/images/team/iqraMahmoodProfile.webp",
      role: "Machine Learning Lead",
      bio: "",
      linkedin: "https://www.linkedin.com/in/hafiza-iqra-mahmood/",
      twitter: "https://twitter.com/Iqra_Multaji",
      github: "https://github.com/IqraMahmood",
      website: "https://medium.com/@iqramultaji",
      google: "https://developers.google.com/profile/u/iqramahmood",
    },
    {
      name: "Nabeel Ahmad",
      image: "/images/team/nabeelAhmadProfile.webp",
      role: "Competative Programming Lead",
      bio: "",
      linkedin: "https://www.linkedin.com/in/nabeelahmedjh/",
      twitter: "https://twitter.com/nabeelahmedjh",
      github: "https://github.com/nabeelahmedjh",
      website: null,
      google: "https://developers.google.com/profile/u/116285414724361073820",
    },
    {
      name: "Eatsam Ul Haq",
      image: "/images/team/eatsam-ul-HaqProfile.webp",
      role: "Technical Lead",
      bio: "",
      linkedin: "https://www.linkedin.com/in/eatsam-ul-haq-a40b431b5",
      twitter: null,
      github: null,
      website: null,
      google: "https://developers.google.com/profile/u/108213361076294949777",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "What is GDSC?",
      answer:
        "Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
    },
    {
      id: 2,
      question: "What is the purpose of GDSC?",
      answer:
        "The purpose of GDSC is to provide students with the resources they need to learn about Google developer technologies and build solutions for local businesses and their community.",
    },
    {
      id: 3,
      question: "What are the benefits of joining GDSC?",
      answer:
        "As a member of GDSC, you will have access to a community of like-minded students, Google Developer experts, and other industry professionals. You will also have access to Google developer technologies, Google developer training resources, and Google developer events.",
    },
    {
      id: 4,
      question: "How do I join GDSC?",
      answer:
        "To join GDSC, you must be a student at a university or college. You can join by visiting the GDSC website and clicking on the Join button. You will be asked to sign in with your university email address. Once you have signed in, you will be asked to complete a short form. Once you have completed the form, you will be added to the GDSC community.",
    },
    {
      id: 5,
      question: "How do I become a GDSC lead?",
      answer:
        "To become a GDSC lead, you must be a student at a university or college. You can become a GDSC lead by visiting the GDSC website and clicking on the Become a Lead button. You will be asked to sign in with your university email address. Once you have signed in, you will be asked to complete a short form. Once you have completed the form, you will be added to the GDSC community.",
    },
  ];

  return (
    <main className="grid grid-cols-12 gap-2">
      <section className="col-start-2 col-span-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-3 py-5 md:py-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-dark-blue">
            Google Developer Student Clubs
            <br className="hidden lg:block" /> Comsats Sahiwal
          </h1>
          <p className="text-lg md:text-xl text-dark-blue w-full lg:w-3/5 text-justify">
            Developer Student Clubs is a Google Developers program for
            university students to learn development, design thinking, and
            leadership skills.
          </p>
          <button className="text-base md:text-lg font-bold text-white bg-green rounded-lg shadrop-shadow-sm px-5 py-2 w-fit scale-100 hover:scale-110 transition-transform ease-in-out delay-100">
            <a href="#events">View Upcoming Events</a>
          </button>
        </div>
        <div className="w-full lg:w-1/2">
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

      <section id="about" className="col-start-2 col-span-10 py-16">
        <h2 className="text-3xl font-bold text-dark-blue text-center">
          About GDSC
        </h2>
        <section className="flex flex-col lg:flex-row justify-between gap-12 mt-16">
          <div className="w-full lg:w-1/3 flex flex-col gap-4 p-5 rounded-lg bg-green/50 shadow-2xl">
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
          <div className="w-full lg:w-1/3 flex flex-col gap-4 p-5 rounded-lg bg-red/30 shadow-2xl">
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
          <div className="w-full lg:w-1/3 flex flex-col gap-4 p-5 rounded-lg bg-yellow/30 shadow-2xl">
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

      <section id="partners" className="col-start-2 col-span-10 py-10 lg:py-16">
        <h2 className="text-3xl font-bold text-dark-blue text-center">
          OUR PARTNERS
        </h2>

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
              <SwiperSlide key={index} className="pt-24 pb-16 h-full">
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

      <section
        id="events"
        className="col-start-2 col-span-10 pt-5 lg:pt-16 pb-6"
      >
        <h2 className="text-3xl font-bold text-dark-blue text-center">
          Events & Workshops
        </h2>
        <section className="flex flex-col sm:flex-row justify-between items-center gap-24 pt-5">
          <div className="w-4/5  md:w-2/5">
            <div className="relative">
              <Image
                src="/images/seminar.svg"
                alt="events"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-center gap-4 md:gap-6">
            <p className="text-lg md:text-xl text-dark-blue text-center w-full md:w-10/12">
              Google Developer Student Club CUI Sahiwal is inspired by the
              Google Developers&lsquo; Family. The motive is to create a local
              ecosystem of Developers in and around the Campus. And have fun
              doing it.
            </p>
            <p className="text-xl text-dark-blue text-center">
              Come, learn, share and connect with us in person.
            </p>
            <button className="m-auto text-lg font-bold text-white bg-green rounded-lg shadrop-shadow-sm px-5 py-2 w-fit scale-100 hover:scale-110 transition-transform ease-in-out delay-100">
              <a href="#upcomingEvents">View Upcoming Events</a>
            </button>
          </div>
        </section>
      </section>

      <section
        id="upcomingEvents"
        className="col-start-2 col-span-10 pt-0 pb-16 flex flex-col "
      >
        <h2 className="text-3xl font-bold text-dark-blue text-center">
          Upcoming Events
        </h2>

        <section className="">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
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
              700: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1120: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className=""
          >
            <SwiperSlide className="pt-16 pb-14 px-3  h-full">
              <EventsCard />
            </SwiperSlide>
            <SwiperSlide className="pt-16 pb-14 px-3 h-full">
              <EventsCard />
            </SwiperSlide>
            <SwiperSlide className="pt-16 pb-14 px-3 h-full">
              <EventsCard />
            </SwiperSlide>
            <SwiperSlide className="pt-16 pb-14 px-3 h-full">
              <EventsCard />
            </SwiperSlide>
          </Swiper>
        </section>
        <button className="mx-auto my-3 text-lg font-bold text-white bg-light-blue rounded-lg shadrop-shadow-sm px-5 py-2 w-fit scale-100 hover:scale-110 transition-transform ease-in-out delay-100">
          <a
            href="https://gdsc.community.dev/comsats-university-sahiwal-campus/"
            target="_blank"
            rel="noreferrer"
          >
            View More
          </a>
        </button>
      </section>

      <section id="team" className="col-start-2 col-span-10 pt-16">
        <h2 className="text-3xl font-bold text-dark-blue text-center">
          Our Team
        </h2>
        <section>
          <Swiper
            slidesPerView={3}
            spaceBetween={60}
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

              630: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            className=""
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="pt-24 pb-14 px-4 h-full">
                <TeamCard
                  name={member.name}
                  image={member.image}
                  role={member.role}
                  bio={member.bio}
                  linkedin={member.linkedin}
                  github={member.github}
                  twitter={member.twitter}
                  google={member.google}
                  website={member.website}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>

      <section id="faq" className="col-start-2 col-span-10 py-4">
        <h2 className="text-3xl font-bold text-dark-blue text-center">
          Frequently Asked Questions
        </h2>
        <section className="flex flex-col-reverse md:flex-row justify-between items-center my-8">
          <section className="px-4 mr-0 md:mr-10 lg:mr-0 py-2 w-full lg:w-1/2 bg-[#C2C2C2]/30 rounded-lg drop-shadow-lg">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="py-2 border-b-2 last:border-b-0 border-[#C2C2C2]/50"
              >
                <h4
                  className={`cursor-pointer text-lg sm:text-xl font-bold  w-full flex justify-between items-center ${
                    selectedFaq === faq.id && showFaqAnswer
                      ? hoverColors[
                          Math.floor(Math.random() * hoverColors.length)
                        ]
                      : "text-dark-blue"
                  }`}
                  onClick={() => {
                    setSelectedFaq(faq.id);
                    if (selectedFaq === faq.id) {
                      setShowFaqAnswer(!showFaqAnswer);
                    } else {
                      setShowFaqAnswer(true);
                    }
                  }}
                >
                  {faq.question}
                  <BiChevronDown className="text-4xl" />
                </h4>
                {showFaqAnswer && selectedFaq === faq.id && (
                  <p className="text-base sm:text-lg text-dark-blue my-2">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </section>
          <div className="">
            <div className="relative w-2/3 m-auto md:w-72 lg:w-80">
              <Image
                src="/images/FAQs.svg"
                alt="faq"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </section>
      <section id="team" className="col-start-2 col-span-10 py-4">
        <h2 className="text-3xl font-bold text-dark-blue text-center">
          Join us on different social media Platforms
        </h2>
        <ul className="my-5 flex justify-center items-center gap-5">
          <li className="text-3xl sm:text-4xl lg:text-5xl text-dark-blue hover:text-green cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <BsWhatsapp />
          </li>
          <li className="text-3xl sm:text-4xl lg:text-5xl text-dark-blue hover:text-light-blue cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <BsFacebook />
          </li>
          <li className="text-3xl sm:text-4xl lg:text-5xl text-dark-blue hover:text-red cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <BsInstagram />
          </li>
          <li className="text-3xl sm:text-4xl lg:text-5xl text-dark-blue hover:text-green cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <BsLinkedin />
          </li>
          <li className="text-3xl sm:text-4xl lg:text-5xl text-dark-blue hover:text-light-blue cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <FaDiscord />
          </li>
          <li className="text-3xl sm:text-4xl lg:text-5xl text-dark-blue hover:text-red cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <BsGoogle />
          </li>
        </ul>
      </section>
    </main>
  );
}

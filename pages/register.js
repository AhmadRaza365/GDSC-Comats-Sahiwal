import React, { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { FaChevronDown, FaDiscord, FaSpinner } from "react-icons/fa";
import {
  BsFacebook,
  BsFillCheckCircleFill,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Register() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [track, setTrack] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [showTrackMenu, setShowTrackMenu] = useState(false);
  const [isMissing, setIsMissing] = useState({
    show: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsMissing({
      show: false,
      message: "",
    });
    setError(null);
  }, [name, email, number, track, currentStep]);

  const submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (name === null || name === "") {
      setCurrentStep(1);
      setIsMissing({
        show: true,
        message: "Please enter your name",
      });
      return;
    } else if (email === null || email === "") {
      setCurrentStep(2);
      setIsMissing({
        show: true,
        message: "Please enter your email",
      });
      return;
    } else if (number === null || number === "") {
      setCurrentStep(3);
      setIsMissing({
        show: true,
        message: "Please enter your number",
      });
      return;
    } else if (track === null || track === "") {
      setCurrentStep(4);
      setIsMissing({
        show: true,
        message: "Please select your track",
      });
      return;
    } else {
      try {
        const docRef = await addDoc(
          collection(db, "code-challenge-registration"),
          {
            name: name,
            email: email,
            number: number,
            track: track,
          }
        );
        setLoading(false);
        setSuccess(true);
      } catch (e) {
        setLoading(false);
        setError(e);
      }
    }
  };

  return (
    <main className="flex justify-center items-center w-full h-screen bg-[url('/images/keyboardBg.webp')] bg-cover -mt-12">
      {!success ? (
        <section className="w-11/12 md:w-8/12 xl:w-6/12 py-10 sm:py-5 px-5 md:px-10 xl:px-16 bg-white/20 backdrop-blur-md rounded-lg">
          <form onSubmit={submitForm}>
            <h1 className="text-3xl text-white font-bold text-center">
              Register For Coding Competition
            </h1>

            {currentStep === 1 && (
              <motion.div
                className="my-3"
                initial={{ y: -50, scale: 0, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <label htmlFor="name" className="text-white text-xl my-1">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  className={`my-1 w-full p-2 md:p-3 rounded-md bg-transparent text-white text-lg border-2 outline-none ${
                    isMissing.show ? "border-red" : "border-white"
                  }`}
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {isMissing.show && (
                  <p className="text-red text-sm mt-1">{isMissing.message}</p>
                )}
              </motion.div>
            )}
            {currentStep === 2 && (
              <motion.div
                className="my-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <label htmlFor="email" className="text-white text-xl my-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className={`my-1 w-full p-2 md:p-3 rounded-md bg-transparent text-white text-lg border-2 outline-none ${
                    isMissing.show ? "border-red" : "border-white"
                  }`}
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {isMissing.show && (
                  <p className="text-red text-sm mt-1">{isMissing.message}</p>
                )}
              </motion.div>
            )}
            {currentStep === 3 && (
              <motion.div
                className="my-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <label htmlFor="email" className="text-white text-xl my-1">
                  WhatsApp Number: (For updates)
                </label>
                <input
                  type="tel"
                  name="number"
                  className={`my-1 w-full p-2 md:p-3 rounded-md bg-transparent text-white text-lg border-2 outline-none ${
                    isMissing.show ? "border-red" : "border-white"
                  }`}
                  placeholder="Enter your WhatsApp number"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                {isMissing.show && (
                  <p className="text-red text-sm mt-1">{isMissing.message}</p>
                )}
              </motion.div>
            )}
            {currentStep === 4 && (
              <motion.div
                className="my-3 relative"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <label htmlFor="track" className="text-white text-xl my-1">
                  Select Track:
                </label>
                <button
                  className={`flex justify-between items-center my-1 w-full p-2 md:p-3 rounded-md bg-transparent text-white text-lg border-2 outline-none text-left ${
                    isMissing.show ? "border-red" : "border-white"
                  }`}
                  type="button"
                  onClick={() => setShowTrackMenu(!showTrackMenu)}
                >
                  {track !== null ? track : "Select Track"}
                  <FaChevronDown className="text-lg md:text-2xl" />
                </button>
                {isMissing.show && (
                  <p className="text-red text-sm mt-1">{isMissing.message}</p>
                )}

                {showTrackMenu && (
                  <motion.div
                    className="absolute top-full bg-white w-full rounded-md shadow-lg px-8 py-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                  >
                    <ul className="w-full">
                      <li
                        className="text-xl text-center my-2 cursor-pointer text-dark-blue hover:text-green"
                        onClick={() => {
                          setTrack("Junior");
                          setShowTrackMenu(false);
                        }}
                      >
                        Junior Track
                      </li>
                      <hr />
                      <li
                        className="text-xl text-center my-2 cursor-pointer text-dark-blue hover:text-green"
                        onClick={() => {
                          setTrack("Senior");
                          setShowTrackMenu(false);
                        }}
                      >
                        Senior Track
                      </li>
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            )}

            <div className="my-5 flex gap-1 md:gap-2">
              {currentStep !== totalSteps ? (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="text-lg font-bold px-5 py-2 bg-white hover:bg-green text-green hover:text-white rounded-lg"
                  onClick={() => {
                    if (currentStep === 1 && (name === null || name === "")) {
                      setIsMissing({
                        show: true,
                        message: "Please enter your name",
                      });
                    } else if (
                      currentStep === 2 &&
                      (email === null || email === "")
                    ) {
                      setIsMissing({
                        show: true,
                        message: "Please enter your email",
                      });
                    } else if (
                      currentStep === 3 &&
                      (number === null || number === "")
                    ) {
                      setIsMissing({
                        show: true,
                        message: "Please enter your number",
                      });
                    } else if (
                      currentStep === 4 &&
                      (track === null || track === "")
                    ) {
                      setIsMissing({
                        show: true,
                        message: "Please select a track",
                      });
                    } else {
                      setCurrentStep(
                        currentStep < totalSteps ? currentStep + 1 : currentStep
                      );
                    }
                  }}
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="flex gap-2 items-center text-lg font-bold px-5 py-2 bg-white hover:bg-green text-green hover:text-white rounded-lg disabled:cursor-not-allowed disabled:bg-white disabled:text-green"
                  onClick={(e) => {
                    if (currentStep === 3 && (track === null || track === "")) {
                      setIsMissing({
                        show: true,
                        message: "Please select a track",
                      });
                    } else {
                      submitForm(e);
                    }
                  }}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                  {loading && <FaSpinner className="ml-2 animate-spin" />}
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="text-lg px-5 py-2 text-white hover:text-red underline underline-offset-4 disabled:cursor-not-allowed"
                onClick={() =>
                  setCurrentStep(
                    currentStep === 1 ? currentStep : currentStep - 1
                  )
                }
                disabled={loading}
              >
                Previous
              </motion.button>
            </div>
            {error !== null && <p className="text-red text-sm">{error}</p>}
            <div className="flex justify-center items-center">
              <motion.p
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <GoPrimitiveDot className={`text-green text-2xl`} />
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <GoPrimitiveDot className={`text-white text-lg`} />
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <GoPrimitiveDot className={`text-white text-lg`} />
              </motion.p>
            </div>
          </form>
        </section>
      ) : (
        <section className="flex flex-col justify-center items-center w-11/12 md:w-8/12 xl:w-6/12 py-10 sm:py-5 px-5 md:px-10 xl:px-16 bg-white/20 backdrop-blur-md rounded-lg">
          <BsFillCheckCircleFill className="text-green text-6xl" />
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center text-white my-3">
            Thank You For Registering!
          </h1>
          <p className="text-lg text-center text-white">
            We will get back to you shortly.{" "}
          </p>
          <h3 className="my-3 text-xl font-bold text-white text-center">
            Follow us for more updates
          </h3>
          <ul className="my-2 flex justify-center items-center gap-5">
            <li className="text-3xl sm:text-3xl md:text-4xl text-white hover:text-light-blue cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
              <a
                href="https://www.facebook.com/dscsahiwal"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
            </li>
            <li className="text-3xl sm:text-3xl md:text-4xl text-white hover:text-light-blue cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
              <a
                href="https://twitter.com/gdsccomsats"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>
            </li>
            <li className="text-3xl sm:text-3xl md:text-4xl text-white hover:text-green cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
              <a
                href="https://www.linkedin.com/company/gdsc-comsats-sahiwal"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </section>
      )}
    </main>
  );
}

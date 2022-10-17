import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { motion } from "framer-motion";

export default function Register() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [track, setTrack] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [showTrackMenu, setShowTrackMenu] = useState(false);

  return (
    <main className="flex justify-center items-center w-full h-screen bg-[url('/images/keyboardBg.webp')] bg-cover -mt-12">
      <section className="w-11/12 md:w-8/12 xl:w-6/12 py-5 px-5 md:px-10 xl:px-16 bg-white/20 backdrop-blur-md rounded-lg">
        <form action="">
          <h1 className="text-2xl md:text-3xl text-white font-bold text-center">
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
                className="my-1 w-full p-2 md:p-3 rounded-md bg-transparent text-white text-lg border-2 border-white outline-none"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
                className="my-1 w-full p-2 md:p-3 rounded-md bg-transparent text-white text-lg border-2 border-white outline-none"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
              <label htmlFor="track" className="text-white text-xl my-1">
                Select Track:
              </label>
              <button className="my-1 w-full p-2 md:p-3 rounded-md bg-transparent text-white text-lg border-2 border-white outline-none text-left"
              type="button"
              >
                Select 
              </button>
              
            </motion.div>
          )}

          <div className="my-5">
            {currentStep !== totalSteps ? (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="text-lg font-bold px-5 py-2 bg-white hover:bg-green text-green hover:text-white rounded-lg"
                onClick={() =>
                  setCurrentStep(
                    currentStep < totalSteps ? currentStep + 1 : currentStep
                  )
                }
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="text-lg font-bold px-5 py-2 bg-white hover:bg-green text-green hover:text-white rounded-lg"
                onClick={() =>
                  setCurrentStep(
                    currentStep < totalSteps ? currentStep + 1 : currentStep
                  )
                }
              >
                Submit
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="text-lg px-5 py-2 text-white hover:text-red underline underline-offset-4 "
              onClick={() =>
                setCurrentStep(
                  currentStep === 1 ? currentStep : currentStep - 1
                )
              }
            >
              Previous
            </motion.button>
          </div>

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
    </main>
  );
}

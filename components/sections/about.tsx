"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function About() {
  const skills = ["React", "JavaScript", "CSS3", "HTML5", "Node.js", "Git"]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-slate-100">
          Nishant Nair
        </h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-1 flex justify-center"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-emerald-500 ring-offset-4">
              <Image
                src="images/profile.JPEG"
                alt="Nishant Nair"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300">
              i'm working to get my bachelors of science of computer science from the honors college at njit
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              in my free time i like to play basketball and fifa, watch a variety of sports, build legos, and do the daily crossword
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              prev intern @ bristol myers squibb + the f* word
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                skills & technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                    className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm font-medium shadow-sm hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

"use client"

import { motion } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Resume() {
  const education = [
    {
      degree: "bachelor of science in computer science",
      school: "new jersey institute of technology",
      year: "september 2022 – may 2026",
      details: [
        "full-ride merit scholarship recipient as part of the albert dorman honors college",
        "relevant coursework: data structures & algorithms, design in swe, discrete math, linux"
      ]
    }
  ]

  const experience = [
    {
      title: "digital accelerator development intern",
      company: "bristol myers squibb",
      period: "june 2025 – august 2025",
      responsibilities: [
        "designed interactive dashboards in tableau using postgresql to create a robust, comprehensive site-tiering framework for clinical trials",
        "optimized existing code modules by sourcing directly from the data lake, and removing unnecessary table calculations, significantly reducing run and computation time",
        "trained machine learning models in r on domino data labs using xgboost, achieving 70% accuracy in predicting performance of historically used sites for future clinical trial planning"
      ]
    },
    {
      title: "teaching assistant",
      company: "new jersey institute of technology",
      period: "january 2024 – may 2025",
      responsibilities: [
        "facilitating learning for an 80+ student java class with code demonstrations and professor collaboration",
        "leading 1.5-hour lab sessions weekly, covering topics focused on object-oriented programming concepts",
        "cut grading time by 50% by developing bash scripts and clear rubrics to automate grading processes",
        "elevating student grades through extensive feedback on assignments and arranging weekly office hours"
      ]
    },
    {
      title: "software engineer intern",
      company: "the f* word",
      period: "may 2024 – august 2024",
      responsibilities: [
        "authored html email templates in hubspot, serving 3000+ users and improving communication workflows",
        "integrated blockchain nodes with golang and queue systems, reducing transaction validation time by 25%",
        "debugged ui errors with react and typescript, resolving state management and latency issues with redux",
        "implemented user tracking code for analytics and leveraged hubspot, amplitude, google analytics, and pendo to improve data collection accuracy by 15%, increasing engagement across 10+ countries"
      ]
    }
  ]

  const skills = {
    "languages": ["python", "java", "go", "javascript", "typescript", "sql", "c", "c++", "c#", "r", "html/css"],
    "frameworks": ["react", "django", "flask", "node.js", "redux", "jinja", "amazon web services (aws)"],
    "developer tools": ["git", "docker", "github actions (ci/cd)", "postgresql", "mysql", "mongodb", "ubuntu/linux", "bash", "apache", "tableau", "rest api development", "oauth 2.0", "pytest", "jest", "jira", "agile"],
    "certifications": ["aws certified cloud practitioner"]
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-slate-100">
          resume
        </h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
            education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-emerald-500">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {edu.degree}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">{edu.school}</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mb-2">{edu.year}</p>
                <ul className="mt-2 space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
            experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-emerald-500">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {exp.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {exp.company} ({exp.period})
                </p>
                <ul className="mt-2 space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
            skills
          </h3>
          <TooltipProvider>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-3 text-slate-700 dark:text-slate-300">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Tooltip key={skillIndex}>
                        <TooltipTrigger asChild>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + skillIndex * 0.05, duration: 0.3 }}
                            className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm font-medium shadow-sm hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                          >
                            {skill}
                          </motion.span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{category}: {skill}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TooltipProvider>
        </motion.div>
      </div>
    </motion.section>
  )
}

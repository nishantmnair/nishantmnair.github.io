"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  liveDemo: string
  code: string
}

export function Portfolio() {
  const [projects] = useState<Project[]>([
    {
      title: "ResumeRocket",
      description:
        "engineered a full-stack web application using a python/django rest framework backend and react.js frontend, backed by postgresql and firebase authentication to support secure, scalable user workflows. integrated google gemini ai api for automated resume/cover letter generation & mock interview coaching. designed restful apis with 100+ endpoints for crud operations, authentication, and integrations. integrated oauth 2.0 integrations with linkedin, github, and gmail apis for profile import & email linking. containerized and deployed application with docker, render, vercel with github actions ci/cd pipelines.",
      technologies: ["Python", "Django", "React.js", "PostgreSQL", "REST APIs", "Docker", "Git", "GitHub Actions", "OAuth 2.0"],
      image: "images/resumerocket-logo.png",
      liveDemo: "https://ats-candidates-weld.vercel.app/",
      code: "https://github.com/nishantmnair/ResumeRocket",
    },
    {
      title: "EA FC24 Player Database",
      description:
        "developed a web app to organize and display detailed player data for ea fc24, allowing users to easily access and analyze player statistics to enhance game strategies and improve decision-making. architected a flask framework for the back-end paired with a react interface, resulting in a streamlined deployment process that reduced development time by 25% for future applications. built a mysql database for 15,000+ players, to support low-latency, scalable data access & smooth user interactions.",
      technologies: ["Python", "Flask", "MySQL", "React", "Jinja"],
      image: "images/project1.jpg",
      liveDemo: "#",
      code: "https://github.com/nishantmnair/EA-FC-24-Database",
    },
  ])

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-slate-100">
          my portfolio
        </h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Drawer key={index}>
            <DrawerTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-4xl">
                <DrawerHeader>
                  <DrawerTitle className="text-2xl">{project.title}</DrawerTitle>
                  <DrawerDescription className="text-base">
                    {project.description}
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">technologies used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-emerald-500 text-white rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <DrawerFooter className="flex-row gap-4">
                  <Button asChild variant="default" className="flex-1">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      live demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      view code
                    </a>
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="secondary">close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </motion.section>
  )
}

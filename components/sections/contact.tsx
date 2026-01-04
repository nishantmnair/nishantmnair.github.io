"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [isOpen, setIsOpen] = useState(false)

  const contactInfo = [
    {
      title: 'Email',
      detail: 'nnair4002@gmail.com',
      link: 'mailto:nnair4002@gmail.com',
      icon: Mail
    },
    {
      title: 'Phone',
      detail: '+1 (609) 721-8070',
      link: 'tel:+16097218070',
      icon: Phone
    },
    {
      title: 'Location',
      detail: 'Princeton, NJ',
      link: null,
      icon: MapPin
    },
  ]

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/nishantmnair", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/nairnishant", icon: Linkedin },
    { name: "Twitter", url: "https://x.com/rainman_019", icon: Twitter },
    { name: "Instagram", url: "https://www.instagram.com/nishantnair09/", icon: Instagram },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-slate-100">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-lg p-4 text-center"
                  >
                    <IconComponent className="w-8 h-8 mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
                    <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {info.title}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm"
                      >
                        {info.detail}
                      </a>
                    ) : (
                      <div className="text-slate-600 dark:text-slate-400 text-sm">
                        {info.detail}
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
              Follow Me
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    className="flex items-center justify-center gap-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg p-4 hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-center mt-8"
              >
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Send Me a Message
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Contact Me</DialogTitle>
                <DialogDescription>
                  Feel free to reach out via email or phone for any inquiries or opportunities.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:nnair4002@gmail.com"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    nnair4002@gmail.com
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Phone</p>
                  <a
                    href="tel:+16097218070"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    +1 (609) 721-8070
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Or connect with me on any of my social media platforms above!
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.section>
  )
}

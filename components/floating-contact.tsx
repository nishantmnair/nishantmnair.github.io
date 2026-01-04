"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingContact() {
  const contacts = [
    { icon: Github, href: "https://github.com/nishantmnair", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/nairnishant", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nnair4002@gmail.com", label: "Email" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 flex flex-col gap-3 z-40"
    >
      {contacts.map((contact, index) => {
        const Icon = contact.icon
        return (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            className="bg-slate-800 dark:bg-slate-700 text-white p-3 rounded-full hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all shadow-lg hover:shadow-xl"
            aria-label={contact.label}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        )
      })}
    </motion.div>
  )
}

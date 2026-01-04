"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { About } from "@/components/sections/about"
import { Portfolio } from "@/components/sections/portfolio"
import { Resume } from "@/components/sections/resume"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingContact } from "@/components/floating-contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-950 dark:to-gray-900 transition-colors">
      <ThemeToggle />
      <FloatingContact />
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="about">about me</TabsTrigger>
            <TabsTrigger value="portfolio">portfolio</TabsTrigger>
            <TabsTrigger value="resume">resume</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-6">
            <About />
          </TabsContent>
          
          <TabsContent value="portfolio" className="mt-6">
            <Portfolio />
          </TabsContent>
          
          <TabsContent value="resume" className="mt-6">
            <Resume />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

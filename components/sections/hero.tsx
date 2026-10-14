"use client"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const HeroPage = () => {
  const textToType = "Divakar Patel"
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => textToType.slice(0, latest))

  useEffect(() => {
    const controls = animate(count, textToType.length, {
      type: "tween",
      duration: 5,
      ease: "easeInOut",
      delay: 0.3,
      times: [0, 0.4, 0.6, 1],
      repeat: Infinity,
      repeatDelay: 0.5,
    })
    return controls.stop
  }, [count, textToType.length])

  return (
    <section id="about" className='container mx-auto md:px-8 px-4 pt-32 pb-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm
            <br className="md:visible lg:hidden"></br>
            {" "}
            <span className="text-primary inline-flex">
              <motion.span>{displayText}</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="inline-block w-[2px] h-[1em] bg-primary ml-1 my-auto"
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer crafting modern web experiences
          </p>
          <div className="flex gap-4">
            <Button variant={'default'} className='gap-2'>
              <Mail className="w-4 h-4" />
              <a href="#contact">
                Contact Me
              </a>
            </Button>
            <Link href="https://github.com/Divakar6368" target="_blank">
              <Button variant={'outline'} className='gap-2'>
                Github
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image 
            src={"/hero.svg"}
            alt="Developer Illustration"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPage
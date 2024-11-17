"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'

export default function AnimatedButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-full shadow-lg transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="mr-2">Sparkle</span>
          <motion.div
            animate={{
              rotate: isHovered ? [0, 45, -45, 0] : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 1],
            }}
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  )
}
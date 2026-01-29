"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import { HeroText } from "./LandingContent/LandingText"

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  )

  return (
    <section className="relative bg-gradient-to-b from-green-50 via-white to-white overflow-hidden md:px-10">
      <Carousel
        plugins={[plugin.current]}
        className="min-w-7xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {HeroText.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 md:px-4">
                  
                  {/* TEXT */}
                  <div className="max-w-xl text-center md:text-left">
                    <span className="inline-block text-sm font-semibold text-green-dsn tracking-wide">
                      {item.title}
                    </span>

                    <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                      {item.subtitle}{" "}
                      <span className="relative inline-block text-green-dsn">
                        {index === 0 ? "Ease!" : "Easy!"}

                        {/* underline mark */}
                        <Image
                          src="/path.png"
                          alt="highlight"
                          width={140}
                          height={16}
                          className="absolute left-1/2 -bottom-2 md:-bottom-3 -translate-x-1/2 w-[110px] md:w-[140px]"
                        />
                      </span>
                    </h1>

                    <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
                      Verify certificates, build trust, and empower learning
                      communities with speed and confidence.
                    </p>

                    <Link href="/student_login">
                      <Button className="mt-8 px-8 py-6 text-base rounded-xl shadow-md hover:shadow-lg transition">
                        {item.buttonText}
                      </Button>
                    </Link>
                  </div>

                  {/* IMAGE */}
                  <div className="relative w-full max-w-md md:max-w-lg">
                    <div className="absolute -inset-6 bg-green-100 rounded-full blur-3xl opacity-40" />
                    <Image
                      src={item.image || "/certVerify.png"}
                      alt="hero illustration"
                      width={600}
                      height={600}
                      className="relative w-full h-auto object-contain drop-shadow-xl"
                      priority
                    />
                  </div>

                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* controls */}
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  )
}

"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { HeroText } from "./LandingContent/LandingText"
import { Button } from "../ui/button"
import Link from "next/link"

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full mx-auto pt-6"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="pb-0">
        {HeroText.map((item, index) => (
          <CarouselItem key={index}>
              <Card className="">
                <CardContent className="flex flex-col md:flex-row items-center justify-between relative border-0">
                  <div>
                    <div className="flex flex-col relative">
                      <h5 className="text-2xl font-bold text-green-dsn">{item.title}</h5>

                      <span className='text-[45px] text-black/50 mt-5'>
                        {item.subtitle}{' '}
                        <span>{ index === 0? "Ease!": "Easy!" }</span>
                      </span>

                      <div className={`absolute bottom-0 w-[800px] flex ${index === 1 ? "left-32": "left-24"}`}>
                        <Image alt="path"  src="/path.png" 
                        sizes="(max-width: 400px) 100vw, 400px"
                        width={200}
                        height={200}
                        className="w-[136px] h-[15px]"/>
                      </div>
                    </div>
                    
                    <Link href="/student_login">
                      <Button className="mt-8 md:w-[150px]">
                        {item.buttonText}
                      </Button>
                    </Link>
                  </div>
                  <Image 
                  src="/certVerify.png"
                  alt="hero"
                  width={400}
                  height={400}
                  className="w-[700px] h-full"
                  />
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
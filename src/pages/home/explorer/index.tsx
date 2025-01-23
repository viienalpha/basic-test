import React from 'react'
import { Link } from 'react-router-dom'
import BgExporer from "../../../assets/banners/bg_banner.png"

function ExporerSection() {
  return (
    <div className=" flex flex-col">
      <main className="flex-1">
        <div className="relative">
            <img src={BgExporer} alt="" />
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-3SaXRzk1no6TQC1mmeXRqvtKOowUw3.png"
            alt="Colorful flat lay with fruits and scissors"
            width={1920}
            height={800}
            className="w-full object-cover"
            priority
          /> */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-white/80">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#5D2C2C] mb-2">Explorez Avec BASIC</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#9A7777] mb-6">Dès Aujourd&apos;hui</h2>
            <p className="max-w-2xl text-center mb-8 text-[#5D2C2C]">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s,
            </p>
            <button className="btn_main">Explorer</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ExporerSection
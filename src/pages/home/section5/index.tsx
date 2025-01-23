import React from 'react'
import SectionBanner from '../../../assets/images/section5.png'
import SmallCardImage from '../../../assets/images/small_card.png'
import FamilleBanner from '../../../assets/banners/famille_banner.png'

import { ReactComponent as IconAuth } from "../../../assets/icons/Icon_auth.svg"
import { ReactComponent as IconInstagram } from "../../../assets/icons/mdi_instagram.svg"


function Section5() {
    return (
        <div className=" mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-16 max-w-6xl m-auto">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-[#F2542D] mb-2">
                        DES EXPÉRIENCES
                        <br />

                        INOUBLIABLES <span className="text-[#F2542D] opacity-75">LOREM IPSUM</span>
                        <br />
                        TRUC
                    </h1>
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">À Propos De BASIC</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <img src={SectionBanner} alt="" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 max-w-6xl m-auto">
                {[
                    { title: "Authenticité", subtitle: "Lorem ipsum" },
                    { title: "Respect", subtitle: "Lorem ipsum" },
                    { title: "Diversité", subtitle: "Lorem ipsum" },
                    { title: "Personnalisation", subtitle: "Lorem ipsum" },
                    { title: "Confort", subtitle: "Lorem ipsum" },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-[#0E9594] flex items-center justify-center mb-2">
                            <IconAuth />
                        </div>
                        <h3 className="font-medium text-sm">{item.title}</h3>
                        <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </div>
                ))}
            </div>

            {/* Moments Section */}
            <div className="bg-moments p-8 ">
                <div className='max-w-6xl m-auto'>

                <div className="grid grid-cols-2 gap-4 ">
                    <div className="text-gray-600 text-sm max-w-[564px]">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s, when an unknown.
                    </div>
                    <div className="text-2xl font-bold mb-4 text-[#562C2C]">
                        IMMORTALISEZ DES MOMENTS
                        <br />
                        INOUBLIABLES AVEC <span className="text-[#F2542D]">#BASIC</span>
                    </div>

                </div>

                <div className="rounded-xl shadow-lg overflow-hidden mb-8">
                    <img src={FamilleBanner}alt="" />
                   
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { bg: "bg-pink-200", title: "Avocado" },
                        { bg: "bg-green-200", title: "Cherries" },
                        { bg: "bg-blue-200", title: "Pear" },
                        { bg: "bg-orange-200", title: "Orange" },
                    ].map((card, index) => (
                        <div key={index} className=' relative'>
                            <img src={SmallCardImage} alt="" />
                            <div className={`bg-[#562C2C99] w-full absolute bottom-0 h-[60px] rounded-b-xl p-4 flex items-center justify-between`}>
                                <div className="flex items-center gap-2">
                                    <IconInstagram />
                                    <span className="text-sm">Anthony Durant</span>
                                </div>
                                <span className="text-xl">→</span>
                            </div>

                        </div>
                    ))}
                </div>
                </div>
            <div className="text-center mt-8 text-sm text-gray-600">
                Consultez @BASIC pour découvrir les expériences incroyables des personnes et activités BASIC.
            </div>
            </div>

        </div>
    )
}

export default Section5
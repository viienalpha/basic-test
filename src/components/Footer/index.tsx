import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as IconFb } from "../../assets/icons/icon_fb.svg"

function Footer() {
  return (
    <footer className="bg-[#5D2C2C] text-white py-8 ">
    <div className="container mx-auto px-4 max-w-6xl m-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">BASIC</h3>
          <p className="text-sm">(514) 904-6729</p>
          <p className="text-sm">Québec, 3100 Boulevard de la Côte-Vertu</p>
        </div>

        <div className=' text-right'>
          <h3 className="font-bold mb-4">Activité</h3>
          <ul className="space-y-2 text-sm">
            <li>Activité 1</li>
            <li>Activité 2</li>
            <li>Activité 3</li>
          </ul>
        </div>

        <div className=' text-right'>
          <h3 className="font-bold mb-4">Titre</h3>
          <ul className="space-y-2 text-sm">
            <li>Titre 1</li>
            <li>Titre 2</li>
            <li>Titre 3</li>
          </ul>
        </div>

        <div className=' text-right'>
          <h3 className="font-bold mb-4">Blog</h3>
          <p className="text-sm">Nous contacter</p>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">© BASIC 2024</p>
        <div className="flex space-x-4">
          <Link to={{pathname:"/"}} className="hover:text-[#FF6B4E] transition-colors">
          <IconFb className="w-5 h-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link to={{pathname:"/1"}}  className="hover:text-[#FF6B4E] transition-colors">
            <IconFb className="w-5 h-5" />
            <span className="sr-only">Youtube</span>
          </Link>
          <Link to={{pathname:"/2"}}  className="hover:text-[#FF6B4E] transition-colors">
            <IconFb className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
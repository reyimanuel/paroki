'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { name: 'BERANDA', href: '/' },
        {
            name: 'PROFIL',
            href: '/progress',
            submenu: [
                { name: 'Sejarah', href: '/progress' },
                { name: 'Visi & Misi', href: '/progress' },
                { name: 'Struktur Organisasi', href: '/progress' }
            ]
        },
        {
            name: 'ARAH DASAR PASTORAL',
            href: '/progress',
            submenu: [
                { name: 'Program Pastoral', href: '/progress' },
                { name: 'Kegiatan Rutin', href: '/progress' }
            ]
        },
        {
            name: 'KARYA PASTORAL',
            href: '/progress',
            submenu: [
                { name: 'Pendidikan', href: '/progress' },
                { name: 'Kesehatan', href: '/progress' },
                { name: 'Sosial', href: '/progress' }
            ]
        },
        {
            name: 'INFORMASI',
            href: '/progress',
            submenu: [
                { name: 'Berita', href: '/progress' },
                { name: 'Pengumuman', href: '/progress' },
                { name: 'Agenda', href: '/progress' }
            ]
        },
        {
            name: 'DOKUMEN',
            href: '/progress',
            submenu: [
                { name: 'Surat Pastoral', href: '/progress' },
                { name: 'Peraturan', href: '/progress' }
            ]
        }
    ]

    return (
        <nav className="border-t border-blue-200">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-center space-x-8 py-4">
                {menuItems.map((item) => (
                    <div key={item.name} className="relative group">
                        <Link
                            href={item.href}
                            className="flex items-center text-gray-700 hover:text-blue-800 font-medium transition-colors"
                        >
                            {item.name}
                            {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                        </Link>

                        {item.submenu && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="py-2">
                                    {item.submenu.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
                <div className="flex justify-between items-center py-4">
                    <span className="text-gray-700 font-medium">Menu</span>
                    <button
                        className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="pb-4">
                        {menuItems.map((item) => (
                            <div key={item.name} className="mb-2">
                                <Link
                                    href={item.href}
                                    className="block py-2 text-gray-700 hover:text-blue-800 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.submenu && (
                                    <div className="ml-4 mt-2">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block py-1 text-sm text-gray-600 hover:text-blue-800"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

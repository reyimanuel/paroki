'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

    const menuItems = [
        { name: 'BERANDA', href: '/main' },
        {
            name: 'PROFIL',
            submenu: [
                { name: 'Sejarah', href: 'history' },
                { name: 'Visi & Misi', href: 'progress' },
                { name: 'Struktur Organisasi', href: 'progress' }
            ]
        },
        {
            name: 'ARAH DASAR PASTORAL',
            submenu: [
                { name: 'Program Pastoral', href: 'progress' },
                { name: 'Kegiatan Rutin', href: 'progress' }
            ]
        },
        {
            name: 'KARYA PASTORAL',
            submenu: [
                { name: 'Pendidikan', href: 'progress' },
                { name: 'Kesehatan', href: 'progress' },
                { name: 'Sosial', href: 'progress' }
            ]
        },
        {
            name: 'INFORMASI',
            submenu: [
                { name: 'Berita', href: 'progress' },
                { name: 'Pengumuman', href: 'progress' },
                { name: 'Agenda', href: 'progress' },
            ]
        },
        {
            name: 'DOKUMEN',
            submenu: [
                { name: 'Surat Pastoral', href: 'progress' },
                { name: 'Peraturan', href: 'progress' }
            ]
        }
    ]

    const toggleSubmenu = (menuName: string) => {
        setOpenSubmenu(openSubmenu === menuName ? null : menuName)
    }

    return (
        <nav className="border-t border-blue-200">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-center space-x-8 py-4">
                {menuItems.map((item) => (
                    <div key={item.name} className="relative group">
                        {item.submenu ? (
                            // Menu items with submenu - not clickable, only hoverable
                            <div className="flex items-center text-gray-700 hover:text-blue-800 font-medium transition-colors cursor-default">
                                {item.name}
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </div>
                        ) : (
                            // Menu items without submenu - clickable
                            <Link
                                href={item.href}
                                className="flex items-center text-gray-700 hover:text-blue-800 font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        )}

                        {item.submenu && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="py-2">
                                    {item.submenu.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
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
                                {item.submenu ? (
                                    // Menu items with submenu - clickable to expand
                                    <div>
                                        <button
                                            className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-800 font-medium transition-colors"
                                            onClick={() => toggleSubmenu(item.name)}
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {openSubmenu === item.name && (
                                            <div className="ml-4 mt-2 space-y-1">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
                                                        onClick={() => {
                                                            setIsMenuOpen(false)
                                                            setOpenSubmenu(null)
                                                        }}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    // Menu items without submenu - clickable link
                                    <Link
                                        href={item.href}
                                        className="block py-2 text-gray-700 hover:text-blue-800 font-medium transition-colors"
                                        onClick={() => {
                                            setIsMenuOpen(false)
                                            setOpenSubmenu(null)
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

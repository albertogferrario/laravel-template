import React from 'react'
import { Link } from '@inertiajs/react'

export default function Home({ title, message, canLogin, canRegister }) {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                                    {title || "Laravel + Inertia + React"}
                                </h1>
                                <p>
                                    {message || "Benvenuto nella tua applicazione Laravel con Inertia.js e React!"}
                                </p>
                                <div className="mt-6">
                                    <div className="text-sm text-gray-500">
                                        Stack tecnologico:
                                    </div>
                                    <ul className="mt-2 space-y-1">
                                        <li className="flex items-center">
                                            <span className="text-green-500">✓</span>
                                            <span className="ml-2">Laravel 10</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-green-500">✓</span>
                                            <span className="ml-2">Laravel Nova 4.27.13</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-green-500">✓</span>
                                            <span className="ml-2">Inertia.js</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-green-500">✓</span>
                                            <span className="ml-2">React</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-green-500">✓</span>
                                            <span className="ml-2">Tailwind CSS</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-green-500">✓</span>
                                            <span className="ml-2">Laravel Breeze</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                {(canLogin || canRegister) && (
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <div className="text-sm text-gray-500 mb-4">
                                            Accesso all'applicazione:
                                        </div>
                                        <div className="flex space-x-4">
                                            {canLogin && (
                                                <Link 
                                                    href="/login" 
                                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-300"
                                                >
                                                    Login Utenti
                                                </Link>
                                            )}
                                            {canRegister && (
                                                <Link 
                                                    href="/register" 
                                                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition duration-300"
                                                >
                                                    Registrati
                                                </Link>
                                            )}
                                        </div>
                                        <div className="mt-4">
                                            <a 
                                                href="/nova" 
                                                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition duration-300"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Nova Admin
                                            </a>
                                            <p className="text-xs text-gray-500 mt-2">
                                                Admin: admin@admin.com / password
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
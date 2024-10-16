import React from 'react';
import HeaderButton from "../components/Headerboton"; // Asegúrate de que el nombre sea correcto
import AlertMessage from "../components/Alertmeseng.astro"; // Asegúrate de que el nombre sea correcto

const Header = () => {
    return (
        <header className="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6">
            <div className="mx-auto text-center mb-8 lg:mb-5">
                <a href="/" className="mb-4 text-5xl tracking-tight font-extrabold text-black">
                    Alklines Circle 🍄
                </a>
            </div>
            <div className="text-center py-5">
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    Alklines Circle es un catálogo digital que especializa en la búsqueda y catalogación de remedios prehispánicos.
                </p>
            </div>
            <nav>
            <HeaderButton>
                <a href="/remedies" className="flex items-center">Medicinas prehispánicas
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 7v5l3 3" />
                    </svg>
                </a>
                <a href="/event" className="flex items-center">Ceremonias
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rocket">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                        <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                        <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                
                </a>
                <a href="#footer"className="flex items-center">Contacto
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 9h.01" />
                        <path d="M11 12h1v4h1" />
                    </svg>
                </a>
            </HeaderButton>
            </nav>
        </header>
    );
};

export default Header;

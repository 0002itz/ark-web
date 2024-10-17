import FooterButton from "../components/Footerbutton";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="p-5">
                <div className="rounded-lg border shadow-md bg-red-500 border-gray-700">
                    <p className="basis-1/4 text-white px-5">
                        Garantizamos el hecho de que cada producto es Natural y 100% libre de aditivos. Todos los productos que compartimos Benefician al cuerpo ampliamente, DESENTOXICA y RESTABLECE el cuerpo a su estado NATURAL.
                    </p>
                </div>
                <div className="grid grid-cols-3 justify-center text-center text-black p-5">
                    <div>
                        <button className="cursor-pointer hover:bg-red-600 focus:ring-3 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100">
                            <a href="/Terms&Conditions">Términos, Condiciones, Aviso de privacidad.</a>
                        </button>
                    </div>
                    <div>
                        <h2>Contacto:</h2>
                        <FooterButton>
                            <a href="https://www.instagram.com/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M16.5 7.5l0 .01" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                                </svg>
                            </a>
                        </FooterButton>
                    </div>
                    <div>
                        <h2>Web Made By:</h2>
                        <button className="cursor-pointer hover:bg-red-600 focus:ring-3 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100">
                            kukulc4n
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

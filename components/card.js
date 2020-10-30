const Card = () => {
    return (
        <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-yellow-200 rounded-lg overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xs title-font font-medium text-gray-500 mb-1">XYZ Product</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Scrum Call</h1>
                                <p className="leading-relaxed mb-3">With mike, harry and spence.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">Join Now
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 border-gray-300">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card

import Link from "next/link";
import Modal from "./modal";
import React from "react";

const Header = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <header className="text-gray-700 bg-indigo-500 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex lg:w-3/5 title-font font-medium items-center text-white mb-4 md:mb-0 text-xl">
                            Meet Minder
                        </a>
                    </Link>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0" style={{ transition: "all .15s ease" }} onClick={() => setShowModal(true)}>Add Meeting
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    </div>
                </div>
            </header>
            <Modal setShowModal={setShowModal} showModal={showModal}/>
        </>
    );
}

export default Header

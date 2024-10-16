import React from 'react';

const FooterButton = ({ children }) => {
    return (
        <div className="flex flex-row justify-center w-95 p-4">
            {React.Children.map(children, (child, index) => (
                <button key={index} className="cursor-pointer hover:bg-red-600 focus:ring-3 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100">
                    {child}
                </button>
            ))}
        </div>
    );
};

export default FooterButton;

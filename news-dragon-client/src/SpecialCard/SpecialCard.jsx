import React from 'react';


const SpecialCard = () => {
    return (
        <div>
            <div className="bg-[url('/assets/bg.png')] text-center py-7 px-4 gap-6 w-72 rounded-md">
               <p className="p-3 text-xl font-bold text-white">Create An amazing newspaper</p>
               <p className="p-3 text-sm font-medium text-white mb-5">Doscover thousands of options, Easy to customise layouts, One click to improve demo and much more.</p>
               <button className="btn btn-outline text-sm font-bold text-white btn-secondary">Learn More</button>
            </div>
        </div>
    );
};

export default SpecialCard;


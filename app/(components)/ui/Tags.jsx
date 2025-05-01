import React from 'react'

const Tags = ({ title, active, link }) => {
    return (
        <div className={`inline-flex cursor-pointer items-center gap-2 rounded-full transition-colors  px-8 py-3 text-[22px] font-medium
            ${active ? "bg-black text-white" : "bg-white text-black border border-black hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2"}  
            `}>{title}</div>
    )
}

export default Tags
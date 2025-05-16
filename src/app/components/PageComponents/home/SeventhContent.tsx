import React from 'react'

export default function SeventhContent() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white">
            <div className="max-w-3xl w-full space-y-16 text-center">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl font-neue-plak-black tracking-tight">DEPOSIT STRUCTURE</h1>

                    <div className="space-y-4 text-4xl ">
                        <p className="font-medium">10% at Contract</p>
                        <p className="font-medium">10% 90 Days After Execution of Contract</p>
                        <p className="font-medium">10% 90 Days After</p>
                        <p className="font-medium">10% 90 Days After</p>
                        <p className="font-medium">Balance at Closing 2024</p>
                    </div>
                </div>
                <div className="space-y-8">
                    <button className="bg-black border-2 border-black text-3xl text-white px-8 py-3 hover:bg-white hover:text-black transition-colors font-medium">
                        SCHEDULE A VISIT
                    </button>
                </div>
            </div>
        </div>
    )
}



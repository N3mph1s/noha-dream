import React from 'react'
import './Footer.css'

export default function Footer() {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <>
            <footer className=''>
                <div className="flex footer bg-zinc-900 text-white items-center">
                    <span className='marginAuto'>
                        © {year} - Noha Dream
                    </span>
                </div>
            </footer>
        </>
    )
}

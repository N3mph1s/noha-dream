import React from 'react'
import GoogleMap from '../GoogleMap/GoogleMap'
import './Plan.css'

export default function Plan() {
    return (
        <>
            <div id='contact' className="py-12 bg-stone-100 blockPage">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="lg:mt-20 md:mt-20 sm:mt-10">
                        <h1 className='uppercase lg:text-6xl md:text-4xl text-mb font-semibold'>Contact</h1>
                    </div>
                    <div className='mt-20'>
                        <h1 className='uppercase text-4xl underline underline-offset-4'>Téléphone</h1>
                        <div className='mt-10 items-center'>
                            <p className='textContact'>
                                07.45.42.00.00
                            </p>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <h1 className='uppercase text-4xl underline underline-offset-4'>Adresse</h1>
                        <div className='mt-10 items-center'>
                            <p className='textContact'>
                                67 Rue sadi carnot, 93170 Bagnolet
                            </p>
                        </div>
                    </div>
                    <div className='mt-20 mb-10'>
                        <h1 className='uppercase text-4xl underline underline-offset-4'>Horaires</h1>
                        <div className='mt-10 items-center'>
                            <p className='textContact'>
                                Du Mardi au Samedi
                                <br />
                                De 10h00 à 19h00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <GoogleMap />
        </>
    )
}

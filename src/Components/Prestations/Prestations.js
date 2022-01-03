import React from 'react'
import '../../Containers/Home/Home.css'
import './Prestations.css'

export default function Prestations() {
    return (
        <>
            <div className="blockPage bg-zinc-900 py-12" id='presta'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center lg:mt-20 md:mt-20 sm:mt-10">
                        <h1 className='uppercase lg:text-6xl sm:text-4xl text-mb font-semibold text-white'>Prestations</h1>
                    </div>
                    <div className="text-white mt-20">
                        <div>
                            <h1 className='uppercase marginAuto boxPresta wh25 text-center'>Brushing</h1>
                            <div className='grid grid-cols-2 gap-2 wh70 marginAuto textPresta items-center'>
                                <p>Brushing simple</p>
                                <p className='text-right'>25€*</p>
                                <p>Brushing wavy</p>
                                <p className='text-right'>25€*</p>
                                <p>Coupe & Brushing</p>
                                <p className='text-right'>35€*</p>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <h1 className='uppercase marginAuto boxPresta wh25 text-center'>Forfait</h1>
                            <div className='grid grid-cols-2 gap-2 wh70 marginAuto textPresta items-center'>
                                <p>Patine</p>
                                <p className='text-right'>50€*</p>
                                <p>Soin botox</p>
                                <p className='text-right'>50€*</p>
                                <p>Racine</p>
                                <p className='text-right'>50€</p>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <h1 className='uppercase marginAuto boxPresta wh25 text-center'>Coloration</h1>
                            <div className='grid grid-cols-2 gap-2 wh70 marginAuto textPresta items-center'>
                                <p>Cheveux courts</p>
                                <p className='text-right'>60€</p>
                                <p>Cheveux mi-longs</p>
                                <p className='text-right'>70€</p>
                                <p>Cheveux longs</p>
                                <p className='text-right'>80€</p>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <h1 className='uppercase marginAuto boxPresta wh25 text-center'>Ombre</h1>
                            <div className='grid grid-cols-2 gap-2 wh70 marginAuto textPresta items-center'>
                                <p>Cheveux courts</p>
                                <p className='text-right'>110€</p>
                                <p>Cheveux mi-longs</p>
                                <p className='text-right'>130€</p>
                                <p>Cheveux longs</p>
                                <p className='text-right'>150€</p>
                                <p>Hair light contouring</p>
                                <p className='text-right'>85€*</p>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <h1 className='uppercase marginAuto boxPresta wh25 text-center'>Lissage</h1>
                            <div className='grid grid-cols-2 gap-2 wh70 marginAuto textPresta items-center'>
                                <p>Brésilien</p>
                                <p className='text-right'>100€*</p>
                                <p>Malaisien</p>
                                <p className='text-right'>110€*</p>
                                <p>Tanin</p>
                                <p className='text-right'>130€</p>
                                <p>RP</p>
                                <p className='text-right'>150€*</p>
                            </div>
                        </div>
                        <div className="text-center mt-5 textInfo">
                            <i>* A partir de... un supplément est appliqué selon la longueur et l'épaisseur</i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

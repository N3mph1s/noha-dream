import React, { useRef, useEffect } from 'react'
import video from '../../Assets/Videos/bg_video.MP4'
import './Feature.css'
import '../../Containers/Home/Home.css'

export default function Example() {

    const ref = useRef()

    useEffect(() => {
        setInterval(() => {
            ref.current.play()
        }, 14800);
    }, [])

    return (
        <div className="py-12 bg-stone-100 blockPage" id='propos'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center lg:mt-20 md:mt-20 sm:mt-10">
                    <h1 className='uppercase lg:text-6xl md:text-4xl text-mb font-semibold'>à propos</h1>
                </div>
                <div className="lg:mt-10 mt-5 flex lg:flex-row flexColumn">
                    <div className='lg:basis-1/2 md:basis-1/2 lg:text-2xl md:text-2xl text-xl flex items-center marginBottom30 textCenter'>
                        <p>
                            Salon de coiffure ouvert à Bagnolet (93170) en décembre 2021 par deux jeunes femmes, nous vous acceuillons avec plaisir du Mardi au samedi de 9h00 à 19h00 avec ou sans rendez-vous.
                            <br />
                            <br />
                            Salon uniquement réservé aux femmes.
                        </p>
                    </div>
                    <div className='lg:basis-1/2 md:basis-1/2'>
                        <video ref={ref} width="auto" height="auto" autoPlay controls muted>
                            <source src={video} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import './Header.css'
import '../../index.css'

export default function Header() {

    const [hauteur, setHauteur] = useState(window.screen.availHeight)
    
    useEffect(() => {
        function actionResize() {
            setHauteur(window.screen.availHeight)
        }
        
        window.addEventListener('resize', actionResize)

        return () => {
            window.addEventListener('resize', actionResize)
        }
    }, [])

    return (
        <>
            <div className="mx-auto" style={{height: hauteur}}>
                <div className="backgroundHeader blockPage bg-fixed grid place-content-center text-center" style={{height: hauteur}}>
                    <div className="indicationHeader">
                        <span className="logo text-white">Noha Dream</span>
                        <hr className="hrPerso text-white" />
                        <span className='sousLogo text-white'><i>Coiffure & Lissage - Bagnolet</i></span>
                    </div>
                </div>
                <div className="filigram" style={{height: hauteur}}></div>
            </div>
        </>
    )
}

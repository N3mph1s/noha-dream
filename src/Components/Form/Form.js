import React, { useState, useEffect, useRef } from 'react'
import './Form.css'
import emailjs from '@emailjs/browser'

export default function Form() {

    const form = useRef();

    const [formValues, setFormValues] = useState({
        nom: "",
        prenom: "",
        email: "",
        phone: "",
        demandes: ""
    })
    const [formErrors, setFormErrors] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            emailjs.sendForm('gmail', 'nohadream', form.current, 'user_nHL18EaO0vfeuRlIgPKjg')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setFormValues({
                nom: "",
                prenom: "",
                email: "",
                phone: "",
                demandes: ""
            })
        }
    }, [formErrors, isSubmit])

    const validate = (values) => {
        const errors = {}
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        const regexPhone = /^((\+)33|0)[1-9](\d{2}){4}$/g

        if (!values.nom)
            errors.nom = "Votre nom est requis!"

        if (!values.prenom)
            errors.prenom = "Votre prénom est requis!"

        if (!values.email)
            errors.email = "Email requis!"
        else if (!regexEmail.test(values.email))
            errors.email = "Mauvais format d'email!"

        if (!values.phone)
            errors.phone = "Numéro de téléphone requis!"
        else if (!regexPhone.test(values.phone))
            errors.phone = "Mauvais format de numéro de téléphone!"

        if (!values.demandes)
            errors.demandes = "Détails de votre demande requis!"

        return errors
    }

    return (
        <>
            <div className="blockPage bg-stone-100 py-12" id='contact'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:mt-20 md:mt-20 sm:mt-10 text-center">
                        <h1 className='uppercase lg:text-6xl md:text-4xl text-mb font-semibold'>Contact</h1>
                    </div>
                    <form ref={form} onSubmit={handleSubmit} className='mt-20'>
                        {
                            (Object.keys(formErrors).length === 0 && isSubmit)
                                ?
                                <div className='success mb-10'>
                                    <span className='drop-shadow-md'>
                                        Votre demande a bien été envoyer !
                                    </span>
                                </div>
                                :
                                false
                        }
                        <div className="flex justify-items-center items-center flex-col">
                            <label htmlFor="choose">
                                Votre demande ?*
                                <select
                                    className='drop-shadow-md'
                                    name="choose"
                                    id="choose"
                                    placeholder='Votre demande'
                                    onChange={handleChange}
                                >
                                    <option id='1' value="Demandes d'informations">Demandes d'informations</option>
                                    <option id='2' value="Demande de rendez-vous">Demande de rendez-vous</option>
                                </select>
                            </label>
                            <label htmlFor="nom">
                                Nom* :
                                <input
                                    className='drop-shadow-md'
                                    id="nom"
                                    name="nom"
                                    type="text"
                                    placeholder='Doe'
                                    value={formValues.nom}
                                    onChange={handleChange}
                                />
                                <span className='error'>{formErrors.nom}</span>
                            </label>
                            <label htmlFor="prenom">
                                Prénom* :
                                <input
                                    className='drop-shadow-md'
                                    id="prenom"
                                    name="prenom"
                                    type="text"
                                    placeholder='Jhon'
                                    value={formValues.prenom}
                                    onChange={handleChange}
                                />
                                <span className='error'>{formErrors.prenom}</span>
                            </label>
                            <label htmlFor="email">
                                E-mail* :
                                <input
                                    className='drop-shadow-md'
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder='nohadream@mail.com'
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                                <span className='error'>{formErrors.email}</span>
                            </label>
                            <label htmlFor="phone">
                                Téléphone* :
                                <input
                                    className='drop-shadow-md'
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    maxLength={10}
                                    placeholder='0604XXXXXX'
                                    value={formValues.phone}
                                    onChange={handleChange}
                                />
                                <span className='error'>{formErrors.phone}</span>
                            </label>
                            <label htmlFor="demandes">
                                Demande(s)* :
                                <textarea
                                    className='drop-shadow-md'
                                    id="demandes"
                                    name="demandes"
                                    cols="30"
                                    rows="10"
                                    placeholder='Exprimer votre demande'
                                    value={formValues.demandes}
                                    onChange={handleChange}
                                ></textarea>
                                <span className='error'>{formErrors.demandes}</span>
                            </label>
                            <button className='rounded-full bg-black text-white'>
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

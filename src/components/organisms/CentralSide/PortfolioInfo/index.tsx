import React from 'react'
import Title from '../../../atoms/Title/index'
import Text from '../../../atoms/Text/index'
import PortfolioCard from '../../../molecules/PortfolioCard/index'

export default function PortfolioInfo () {
  return (
    <div className='w-full items-center'>
        <div className='mx-auto items-center w-1/2 mb-14'>
            <Title title='My Portfolio' size='text-3xl' classes='text-secondary font-bold mb-6'/>
            <Text classes='text-gray-500 text-center text-justify'>The following cards represent the projects I have worked on, both independently and as part of a team.</Text>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-2 lg:mx-5 gap-5'>
            <PortfolioCard
            icon='arcticons:emoji-flag-japan'
            title='Itsuki - Mobile app'
            text='Itsuki is a mobile application for a Japanese restaurant that implements network communications between:
            Frontend: Ionic + Angular. Backend: Spring Boot + Docker. Network service: REST architecture using the HTTP protocol.'
            images={['/itsuki/screen1.png',
              '/itsuki/screen2.png',
              '/itsuki/screen3.png', 
              '/itsuki/screen4.png']}
            />
            <PortfolioCard
            icon='at-icons:delivery-box'
            title='Delivery Service - REST API'
            text='A RESTful API for managing deliveries, built with Java and Spring Boot following a layered architecture (controller, service, repository). 
            Includes custom exception handling and CORS configuration for frontend integration.'
            url='https://github.com/luisasoto12/servicio-entregas-innosistemas'
            />
            <PortfolioCard
            icon='bi:fast-forward-fill'
            title='Test Automation - ParaBank'
            text='Test automation project for a banking web application using the Screenplay pattern with Serenity BDD and Selenium WebDriver. Contributed to the "update profile" module,
             implementing Gherkin scenarios, step definitions and UI interactions.'
            url='https://github.com/MilySierra/Automation-with-ScreenPlay'
            />
        </div>
    </div>
    
  )
}
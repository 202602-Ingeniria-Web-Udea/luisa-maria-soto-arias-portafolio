import React from 'react'
import Title from '../../../atoms/Title/index'
import Text from '../../../atoms/Text/index'
import EducationJobCard from '../../../molecules/EducationJobCard/index'
import HorizontalLine from '../../../atoms/HorizontalLine/index'

export default function EducationInfo () {
  return (
    <div className='w-full items-center'>
        <div className='mx-auto items-center w-1/2 mb-14'>
            <Title title='My Education' size='text-3xl' classes='text-secondary font-bold mb-6'/>
            <Text classes='text-gray-500 text-center text-justify'>I am currently pursuing a degree
            in Systems Engineering at the University of Antioquia. My academic training has provided
            me with strong foundations in software development, algorithms and databases.</Text>
        </div>
        <div className='bg-white mx-2 lg:mx-5'>
            <EducationJobCard
              title='University of Antioquia'
              text='Student'
              initial='February 2023'
              final='Present'
              type='Systems Engineering'
              description='The undergraduate program at the University of Antioquia trains professionals
              in programming, databases, networks, software architecture, artificial intelligence,
              data analysis, and cloud computing. It also fosters logical thinking, complex
              problem-solving, and collaborative work through agile methodologies and real-world
              projects.'
            />
        </div>
    </div>
    
  )
}
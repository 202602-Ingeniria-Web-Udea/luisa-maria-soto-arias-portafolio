import React from 'react'
import KnowledgeCard from '../../../molecules/KnowledgeCard/index'
import Title from '../../../atoms/Title/index'
import Text from '../../../atoms/Text/index'

export default function KnowledgeInfo () {
  return (
    <div className='w-full items-center'>
        <div className='mx-auto items-center w-1/2 mb-14'>
            <Title title= 'My Knowledge' size='text-3xl' classes='text-secondary font-bold mb-6'/>
            <Text classes='text-gray-500 text-center text-justify'> A mix of technical skills and practices I&apos;ve built through coursework and team projects, covering 
              everything from software architecture to frontend and backend development.</Text>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-2 lg:mx-5 gap-5'>
            <KnowledgeCard 
            icon='ant-design:security-scan-outlined'
            title='Software Testing'
            text='Experience writing unit and functional tests to validate software quality and prevent regressions.'
            />
            <KnowledgeCard 
            icon='bi:database'
            title='Relational Databases'
            text='Designing and querying relational databases using SQL, focused on data integrity and normalization.'
            />
            <KnowledgeCard 
            icon='thesvg:spring-boot'
            title='Backend Development'
            text='Building RESTful APIs and business logic using Java and Spring Boot.'
            />
            <KnowledgeCard 
            icon='famicons:logo-react'
            title='Frontend Development'
            text='Building responsive user interfaces with React.js and CSS, following atomic design.'
            />
            <KnowledgeCard 
            icon='tdesign:system-code'
            title='Software Architecture'
            text='Applying architectural principles and design patterns to build scalable, maintainable solutions.'
            />
            <KnowledgeCard 
            icon='iconoir:agile'
            title='Agile Methodologies'
            text='Working in Scrum teams with sprints, daily stand-ups, and iterative 
            delivery to adapt quickly to changing requirements.'
            />
        </div>

    </div>
  )
}
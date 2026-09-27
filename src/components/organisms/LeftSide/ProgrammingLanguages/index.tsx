import React from 'react'
import Title from '../../../atoms/Title/index'
import HorizontalLine from '../../../atoms/HorizontalLine/index'
import LanguagePercentage from '../../../molecules/LanguagePercentage/index'

export default function ProgrammingLanguages () {
  return (
    <>
        <div className='flex flex-col mb-6 mt-6'>
            <div className='flex flex-col gap-6'>
                <Title title='Programming Languages'></Title>
                <LanguagePercentage
                language='Java'
                percentage={60}
                />
                <LanguagePercentage
                language='Python'
                percentage={55}
                />
                <LanguagePercentage
                language='MySQL'
                percentage={45}
                />
            </div>
        </div>
        <HorizontalLine />
    </>
  )
}
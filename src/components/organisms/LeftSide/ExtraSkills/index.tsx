import React from 'react'
import Title from '../../../atoms/Title/index'
import HorizontalLine from '../../../atoms/HorizontalLine/index'
import IconText from '../../../molecules/IconText/index'

export default function ExtraSkills () {
  return (
    <>
        <div className='flex flex-col mb-6 mt-6'>
            <div className='flex flex-col gap-6'>
                <Title title='Extra Skills'></Title>
                <IconText
                icon='fluent:thinking-24-filled'
                iconClasses='text-tertiary text-3xl'
                text='Proactivity'
                />
                <IconText
                icon='hugeicons:share-knowledge'
                iconClasses='text-tertiary text-3xl'
                text='Share knowledge'
                />
                <IconText
                icon='heroicons-solid:light-bulb'
                iconClasses='text-tertiary text-3xl'
                text='Easy adaption'
                />
                <IconText
                icon='akar-icons:face-very-happy'
                iconClasses='text-tertiary text-3xl'
                text='Good listener'
                />
                 <IconText
                icon='fluent:people-team-16-filled'
                iconClasses='text-tertiary text-3xl'
                text='Team work'
                />
            </div>
        </div>
        <HorizontalLine />
    </>
  )
}
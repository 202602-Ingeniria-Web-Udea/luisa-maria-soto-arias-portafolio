'use client';
import React, { useState } from 'react'
import Icon from '../../atoms/Icon/index'
import Text from '../../atoms/Text/index'
import Title from '../../atoms/Title/index'
import Button from '../../atoms/Button/index'
import ProjectGalleryModal from '../ProjectGalleryModal/index'

type PortfolioCardProps = {
    icon: string
    title: string
    text: string
    url?: string
    images?: string[]
}

export default function PortfolioCard (props: PortfolioCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    if (props.images && props.images.length > 0) {
      setIsModalOpen(true)
    } else if (props.url) {
      window.open(props.url, '_blank')
    }
  }

  return (
    <div className='group flex flex-col items-center p-8 bg-white text-justify shadow-md transition-all duration-700 cursor-pointer hover:scale-95 hover:bg-tertiary'>
        <Icon icon={props.icon} classes='text-6xl text-tertiary group-hover:text-white'/>
        <Title title={props.title} classes='my-3 font-semibold group-hover:text-white'/>
        <Text classes='text-gray-500 group-hover:text-white'>{props.text}</Text>
        <Button
         text={props.images ? 'View Photos' : 'View Repository'}
         classes='hover:bg-pink-400 hover:duration-500 cursor-pointer mt-10 text-lg shadow-md shadow-white/100'
         onClick={handleClick}
        />
        {isModalOpen && props.images && (
          <ProjectGalleryModal
            title={props.title}
            images={props.images}
            onClose={() => setIsModalOpen(false)}
          />
        )}
    </div>
  )
}
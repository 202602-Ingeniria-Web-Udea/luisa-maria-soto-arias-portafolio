'use client';
import React, { useState } from 'react'
import Icon from '../../atoms/Icon/index'
import Title from '../../atoms/Title/index'

type ProjectGalleryModalProps = {
    title: string
    images: string[]
    onClose: () => void
}

export default function ProjectGalleryModal(props: ProjectGalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % props.images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + props.images.length) % props.images.length)
    }

    return (
        <div
            className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4'
            onClick={props.onClose}
        >
            <div
                className='bg-white rounded-lg max-w-3xl w-full p-6 relative'
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className='absolute top-4 right-4 text-2xl text-gray-500 hover:text-black'
                    onClick={props.onClose}
                >
                    <Icon icon='material-symbols:close' classes='text-3xl' />
                </button>

                <Title title={props.title} classes='mb-4 font-semibold text-center' />

                <div className='relative flex items-center justify-center'>
                    <button onClick={prevImage} className='absolute left-0 text-3xl px-2'>
                        <Icon icon='material-symbols:arrow-back-ios-new' classes='text-2xl' />
                    </button>

                    <img
                        src={props.images[currentIndex]}
                        alt={`${props.title} screenshot ${currentIndex + 1}`}
                        className='max-h-[70vh] w-auto object-contain rounded'
                    />

                    <button onClick={nextImage} className='absolute right-0 text-3xl px-2'>
                        <Icon icon='material-symbols:arrow-forward-ios' classes='text-2xl' />
                    </button>
                </div>

                <p className='text-center text-gray-500 mt-3'>
                    {currentIndex + 1} / {props.images.length}
                </p>
            </div>
        </div>
    )
}
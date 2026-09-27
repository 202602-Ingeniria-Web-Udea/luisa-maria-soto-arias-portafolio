'use client';
import React from 'react'
import Button from "../../../atoms/Button/index";
import PopUp from "../../../molecules/PopUp/index"
import Image from '../../../atoms/Image/index';
import { useState } from "react";

const contactMeOnClick = () => {
  window.open('mailto:sotoariasluisa@gmail.com', '_blank')
}

export default function MainInfo() {
  const [open, setOpen] = useState(false);
  const closePopUp = () => setOpen(false);

  return (
    <main className='mx-2 flex flex-col items-center justify-center bg-white shadow-md lg:flex-row lg:mx-5 p-5 lg:p-0 lg:mt-0'>
      <section className='p-8'>
        <h1 className="text-4xl font-bold text-secondary">I&apos;m Luisa María</h1>
        <h1 className="text-4xl font-bold text-secondary">
          Systems Engineering Student
        </h1>
        <h2 className='text-gray-400 mt-6 text-justify'> 
          I am an eighth-semester Systems Engineering student with skills in organization, 
          the use of software tools, and programming. I am a responsible, proactive individual 
          who learns new tasks quickly. I possess a service-oriented mindset, the ability to 
          work in a team, and a willingness to take on new challenges.
        </h2>
        <Button
          text="HIRE ME ➜"
          size="w-36 h-12"
          classes="hover:bg-pink-400 hover:duration-500 cursor-pointer mt-8 mb-2 text-lg"
          onClick={() => {
            setOpen(true);
          }}
        />
        <PopUp open={open} closePopUp={closePopUp} text='If you are interested in my profile or want to know more about my work,
         you can contact me by clicking the button below.'>
          <div className="flex justify-center py-4">
            <Button
              text="CONTACT ME ➜"
              size="w-36"
              classes="hover:bg-pink-400 hover:duration-500 cursor-pointer mt-10 text-lg shadow-md shadow-white/100" 
              onClick={contactMeOnClick}
            />
          </div>
        </PopUp>
      </section>
    </main>
  );
}
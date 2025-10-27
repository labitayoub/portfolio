import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        alert("Message envoyé avec succès!");
        event.target.reset();
      } else {
        alert("Erreur lors de l'envoi du message");
      }
    } catch (err) {
      console.log("Error sending message:", err);
      alert("Erreur lors de l'envoi du message");
    }
  }


  
  return (
    <div>
      <div className='flex items-center'>
        <span className='inline pr-4 pl-[20px] text-xl font-semibold lg:pl-[100px]'>Contact</span>
        <div className='w-32 h-1 ml-4 rounded-full bg-gradient-to-r from-accent to-primary'></div>
      </div>

      <div className='w-auto flex flex-col pb-[20px] || lg:flex-row'>

        <div className='h-auto flex flex-col justify-center items-center gap-[40px] || lg:w-[40%]'>
          <div className=' w-[250px] flex'>
            <div className='bg-green-300 w-[50px] h-[50px] mt-[12px] flex justify-center items-center rounded-full '>
              <CiLocationOn className='text-[35px]' />
            </div>
            <div className='pl-[20px]'>
              <h1 className='font-bold text-accent text-[20px]'>LOCALISATION</h1>
              <h4>Casablanca, Maroc</h4>
            </div>
          </div>
          <div className=' w-[250px] flex'>
            <div className='bg-green-400 w-[50px] h-[50px] mt-[12px] flex justify-center items-center rounded-full'>
              <CiMail className='text-[35px]' />
            </div>
            <div className='pl-[20px]'>
              <h1 className='font-bold text-accent text-[20px]'>EMAIL</h1>
              <h4>ayoub.labite@gmail.com</h4>
            </div>
          </div>
          <div className=' w-[250px] flex'>
            <div className='bg-green-600 w-[50px] h-[50px] mt-[12px] flex justify-center items-center rounded-full'>
              <FaTelegramPlane className='text-[35px]' />
            </div>
            <div className='pl-[20px]'>
              <h1 className='font-bold text-accent text-[20px]'>TÉLÉPHONE</h1>
              <h4>+212 622 734 781</h4>
            </div>
          </div>
        </div>

        <div className='h-auto flex justify-center items-center pt-[20px] || lg:w-[60%]'>
          <form className='h-auto flex justify-center items-center' onSubmit={handleSubmit}>
            <div className='w-[80%]  rounded-[20px] border border-accent px-[20px] py-[10px]'>
              <div className='flex space-x-4 mb-2'>
                <div className='w-1/2'>
                  <h1 className='text-[14px] font-semibold mb-1'>Nom d&apos;utilisateur</h1>
                  <input type="text" name='name' minLength={3} maxLength={30} required placeholder="Votre nom" className='w-full h-[30px] p-2 border border-gray-300 rounded text-black' />
                </div>
                <div className='w-1/2'>
                  <h1 className='text-[14px] font-semibold mb-1'>Email</h1>
                  <input type="email" name='email' minLength={5} maxLength={40} required placeholder="votre.email@example.com" className='w-full h-[30px] p-2 border border-gray-300 rounded text-black' />
                </div>
              </div>
              <div className='mb-2'>
                <h1 className='text-[14px] font-semibold mb-1'>Sujet</h1>
                <input  type="text" minLength={3} maxLength={40} required name="subject" placeholder="Objet de votre message" className='w-full h-[30px] p-2 border border-gray-300 rounded text-black' />
              </div>
              <div className='mb-4'>
                <h1 className='text-[14px] font-semibold mb-1'>Message</h1>
                <textarea name="message" rows={4} required placeholder="Écrivez votre message ici..." className='w-full h-[80px] p-2 border border-gray-300 rounded text-black' />
              </div>
              <div>
                <button className='w-full h-[30px] bg-accent text-white rounded hover:bg-green-500 transition duration-300 ease-in-out'>Envoyer</button>
              </div>
            </div>
          </form>
        </div>




      </div>
    </div>
  )
}

export default Contact

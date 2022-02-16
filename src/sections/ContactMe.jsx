import { useState, useContext } from "react"
import ThemeContext from "../context/theme/ThemeContext"
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'


function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const { name, email, message } = formData
  const { theme } = useContext(ThemeContext)

  const templateParams = {
    name,
    email,
    message,
  }

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const userId = process.env.REACT_APP_EMAILJS_USER_ID

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    emailjs.send(serviceId, templateId, templateParams, userId)
          .then((result) => {
            toast.success('Message sent!', {
              position: 'top-center',
              autoClose: 3000,
            })
          }, (err) => {
            console.log('Failed to send', err)
          })
    toast.success('Message sent!', {
      position: 'top-center',
      autoClose: 2000,
    })
    setFormData({
      ...formData,
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section id='contact'>
      <main className='mx-auto'>
        <div className='container skills-section-div'>
          <h1 className='text-2xl my-6 text-center'>Contact Me</h1>
          <form onSubmit={onSubmit}>
            <div className='md:form-control w-full md:mx-auto mb-3'>
              <input id='name' type='text' placeholder='Name' className='pr-0 w-full mb-4 md:pr-40 md:w-3/5 mx-auto bg-gray-200 input input-md text-black textarea-bordered-info' value={name} onChange={onChange} required/>
              <input id='email' type='Email' placeholder='Email' className='pr-0 w-full mb-4 md:pr-40 md:w-3/5 mx-auto bg-gray-200 input input-md text-black textarea-bordered-info' value={email} onChange={onChange} required/>
              <textarea id='message' className='textarea w-full md:w-3/5 bg-gray-200 text-black h-28 mx-auto mb-3' placeholder='Message' value={message} onChange={onChange} required></textarea>
              <button className='btn btn-primary justify-self-center w-full md:w-3/5 mx-auto'>Send</button>
            </div>
          </form>
        </div>
      </main>
    </section>
  )
}

export default ContactMe

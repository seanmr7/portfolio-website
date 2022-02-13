function ContactMe() {
  return (
    <section id='contact'>
      <main className='mx-auto'>
        <div className='container skills-section-div'>
          <h1 className='text-2xl my-6 text-center'>Contact Me</h1>
          <form>
            <div className='form-control w-4/5 mx-auto'>
              <input type='Email' placeholder='Email' className='w-3/5 pr-40 mx-auto bg-gray-200 input input-md text-black textarea-bordered-info' />
              <textarea className='bg-gray-200 h-24'></textarea>
            </div>
          </form>
        </div>
      </main>
    </section>
  )
}

export default ContactMe

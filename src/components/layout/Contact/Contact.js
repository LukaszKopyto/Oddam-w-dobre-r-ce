import React from 'react'
import BgContactForm from '../../../assets/Background-Contact-Form.jpg'
import decoration from '../../../assets/Decoration.svg'

const Contact = () => {
  return (
    <>
      <div className='contact' name='contact' id='contact'>
        <img className='contact__bg' src={BgContactForm} alt='' />
        <section className='contact__form'>
          <h2>Skontaktuj się z nami</h2>
          <img src={decoration} alt='' />
          <form action='submit'>
            <div className='contact__form-twoInputs'>
              <label htmlFor='name'>
                Wpisz swoje imię
                <input type='text' name='name' id='name' />
              </label>
              <label htmlFor='email'>
                Wpisz swój email
                <input type='email' name='email' id='email' />
              </label>
            </div>
            <label htmlFor='message'>
              Wpisz swoją wiadomość
              <textarea name='message' id='message'></textarea>
            </label>
            <button type='submit' className='contact__form-submit btn-small'>
              Wyślij
            </button>
          </form>
        </section>
      </div>
    </>
  )
}

export default Contact

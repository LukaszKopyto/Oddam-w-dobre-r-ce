import React from 'react'

const StepsButtons = ({ prev, next, submit, step }) => {
  return (
    <>
      {step !== 1 && (
        <button
          type='button'
          onClick={prev}
          className='btn-small'
          title='Wstecz'
        >
          Wstecz
        </button>
      )}
      {step === 5 ? (
        <button
          type='button'
          onClick={submit}
          className='btn-small'
          title='Potwierdzam'
        >
          Potwierdzam
        </button>
      ) : (
        <button
          type='button'
          onClick={next}
          className='btn-small'
          title='Dalej'
        >
          Dalej
        </button>
      )}
    </>
  )
}

export default StepsButtons

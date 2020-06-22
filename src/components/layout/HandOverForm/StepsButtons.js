import React from 'react'

const StepsButtons = ({ prev, step, isSubmitting }) => {
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
      <button
        type='submit'
        className='btn-small'
        title={step === 5 ? 'Potwierdzam' : 'Dalej'}
        disabled={isSubmitting}
      >
        {step === 5 ? 'Potwierdzam' : 'Dalej'}
      </button>
    </>
  )
}

export default StepsButtons

import React from 'react'

const StepsButtons = ({ prev, next, submit, step }) => {
  return (
    <>
      {step !== 1 && (
        <button type='button' onClick={prev}>
          Wstecz
        </button>
      )}
      {step === 5 ? (
        <button type='button' onClick={submit}>
          Potwierdzam
        </button>
      ) : (
        <button type='button' onClick={next}>
          Dalej
        </button>
      )}
    </>
  )
}

export default StepsButtons

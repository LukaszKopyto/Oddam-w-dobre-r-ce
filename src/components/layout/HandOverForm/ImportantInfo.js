import React from 'react'

const ImportantInfo = ({ step }) => {
  const info = {
    1: 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
    2: 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.',
    3: 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
    4: 'Podaj adres oraz termin odbioru rzeczy.',
  }

  return (
    <header>
      <h2>Ważne!</h2>
      <p>{info[step]}</p>
    </header>
  )
}

export default ImportantInfo

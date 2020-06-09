import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const WhoWeHelpList = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [items])

  const { list, name } = items

  const handleOnClick = (e) => {
    setCurrentPage(Number(e.target.id))
  }

  const perPage = 3
  const lastIndex = currentPage * perPage
  const firstIndex = lastIndex - perPage
  const currentItems = list.slice(firstIndex, lastIndex)
  const renderItems = currentItems.map((item) => (
    <div key={uuidv4()} className='help__item'>
      <div>
        <h3>
          {name}: {item.name}
        </h3>
        <p>Cel i misja: {item.target}</p>
      </div>
      <p>{item.things}</p>
    </div>
  ))

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(list.length / perPage); i++) {
    pageNumbers.push(i)
  }

  let renderPageNumbers = null

  if (pageNumbers.length > 1) {
    renderPageNumbers = pageNumbers.map((num) => {
      return (
        <span
          key={num}
          id={num}
          onClick={handleOnClick}
          className={num === currentPage ? 'active' : ''}
        >
          {num}
        </span>
      )
    })
  }

  return (
    <>
      {renderItems}
      <div className='help__pagination'>{renderPageNumbers}</div>
    </>
  )
}

export default WhoWeHelpList

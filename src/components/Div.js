import React from 'react'

const Div = ({className, onClick, children}) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default Div
import React from 'react'
import Button from './Button'

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <p>Components & Props</p>
        <Button />
        <Button />
      </nav>
    )
  }
}

export default Navbar
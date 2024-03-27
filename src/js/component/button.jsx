import React, { useState } from 'react'
import Light from './light'

const startInfinito = (Light) => {
  const[red] = useState()
  const[yellow] = useState()
  const[green] = useState()
  
  const [start, setStart] = useState('')

  const goStart = ([red, yellow, green]) =>
  setStart (Light)
}


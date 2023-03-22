import './style.css'
import Button from '../../Components/Button'
import Title from '../../Components/Title'
import Input from '../../Components/Input'
import { useState } from 'react'

export default function Main() {
  const [dolar, setDolar] = useState(0)

  return (
    <div>
      <Title />
      <Input
        placeholder={'Digite Aqui:'}
        label={'Digite o valor abaixo: '}
        onChange={e => {
          setDolar(e.target.value)
        }}
        type={'number'}
      />
      <span>R$ {dolar * 5.3}</span>
    </div>
  )
}

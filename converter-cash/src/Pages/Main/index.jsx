import './style.css'
import Title from '../../Components/Title'
import Input from '../../Components/Input'
import { useEffect, useState } from 'react'

export default function Main() {
  const [dolar, setDolar] = useState(0)
  const [valor, setValor] = useState('Ele está me testando')

  // useEffect(() => {})

  console.log(
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(res =>
      console.log(String(res.json()).valueOf())
    )
  )

  return (
    <div className="Main_project">
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
      <div className="Test_api">
        <span>{valor}</span>
      </div>
    </div>
  )
}

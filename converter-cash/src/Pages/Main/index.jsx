import './style.css'
import Title from '../../Components/Title'
import Input from '../../Components/Input'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Main() {
  const [dolar, setDolar] = useState(0)
  const [valor, setValor] = useState(0)

  useEffect(() => {
    axios
      .get('https://economia.awesomeapi.com.br/last/USD-BRL')
      .then(res => setValor(res.data?.USDBRL.high))
      .catch(error => {
        console.error('ops ! ocorreu um erro')
      })
  }, [])

  return (
    <div className="Main_project">
      <Title />
      <h6>Valor do dolar: R${valor}</h6>
      <Input
        placeholder={'Digite Aqui:'}
        label={'Digite o valor abaixo: '}
        onChange={e => {
          setDolar(e.target.value)
        }}
        type={'number'}
      />
      <span>
        {(dolar * valor).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })}
      </span>
      <div className="Test_api"></div>
    </div>
  )
}

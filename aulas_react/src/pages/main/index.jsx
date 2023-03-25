import './style.scss'
import Input from '../../components/input'
import Title from '../../components/title'
import { useState } from 'react'
import Button from '../../components/button'
import Form from '../../components/form'

function Main() {
  const [dados, setDados] = useState('')
  const [result, setResult] = useState('')

  function SendDate() {
    setResult(dados)
  }

  function PressEnter(e) {
    if (e.target.value !== '') {
      if (e.key === 'Enter') {
        setResult(e.target.value)
      }
    }
  }

  return (
    <div className="main">
      <Title title={'Site para Aprendizagem >>'} />
      <Input
        placeholder={'DIGITE AQUI: '}
        onkeyup={PressEnter}
        onchange={e => setDados(e.target.value)}
      />
      <Button title={'send'} onclick={SendDate} />

      <p>{result}</p>

      <Form />
    </div>
  )
}

export default Main

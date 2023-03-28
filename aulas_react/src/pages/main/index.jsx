import './style.scss'
import Input from '../../components/input'
import Title from '../../components/title'
import { useState } from 'react'
import Button from '../../components/button'
import Form from '../../components/form'
import MyList from '../../components/List-array'

function Main() {
  const [dados, setDados] = useState('')
  const [result, setResult] = useState('')

  const lista = ['react', 'angular', 'vue', 'teste']

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
      <Title title={'Site para Aprendizagem >> Components'} />
      <Input
        placeholder={'DIGITE AQUI: '}
        onkeyup={PressEnter}
        onchange={e => setDados(e.target.value)}
      />
      <Button title={'send'} onclick={SendDate} />

      <p className="result_input">{result}</p>

      <Form Input={onchange} />

      <MyList items={lista} />
    </div>
  )
}

export default Main

import './style.scss'
import Input from '../../components/input'
import Title from '../../components/title'
import { useState } from 'react'

function Main() {
  const [dados, setDados] = useState('')

  return (
    <div>
      <Title title={'Site para Aprendeizagem >>'} />
      <Input
        placeholder={'DIGITE AQUI: '}
        onkeyup={e => {
          if (e.key == 'Enter') {
            setDados(e.target.value)
          }
        }}
      />
      <span>{dados}</span>
    </div>
  )
}

export default Main

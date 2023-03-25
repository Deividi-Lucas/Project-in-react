import './style.scss'

function Button({ title, onclick }) {
  return (
    <>
      <button onClick={onclick}>{title}</button>
    </>
  )
}

export default Button

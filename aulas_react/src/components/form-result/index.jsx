import './style.scss'
function Form_Result({ title, text }) {
  return (
    <div className="form-result">
      <h3>{title}</h3>
      <h5>{text}</h5>
    </div>
  )
}

export default Form_Result

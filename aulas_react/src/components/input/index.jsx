function Input({ placeholder, onkeyup, onchange }) {
  return (
    <>
      <input
        placeholder={placeholder}
        onKeyUp={onkeyup}
        onChange={onchange}
      ></input>
    </>
  )
}

export default Input

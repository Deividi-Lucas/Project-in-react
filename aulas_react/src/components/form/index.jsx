import Button from '../button'
import Input from '../input'
import './style.scss'
function Form() {
  return (
    <div className="form">
      <h2>Create Post</h2>
      <Input className="title" placeholder={'Write title here:'} />
      <Input className="text" placeholder="Write your post here" />
      <Button title={'Send Form'} />
    </div>
  )
}

export default Form

import './style.scss'
export default function MyList({ items }) {
  return (
    <div className="List_array">
      {items.map(item => (
        <p className="items">{item}</p>
      ))}
    </div>
  )
}

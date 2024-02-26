function Input(props) {
  return (
    <div>
      <label text={props.text}>
        <input type={props.type} value={props.value} onChange={props.onChange} />
      </label>
    </div>
  )
}
export default Input

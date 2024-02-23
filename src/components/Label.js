function Label(props) {
  return (
    <div>
      <label>
        {props.text}
        {props.children}
      </label>
    </div>
  )
}

export default Label

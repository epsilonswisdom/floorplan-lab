function Bath(props) {
  return(
    <div className="bath" id={`bath-${props.size}`}>
      Bath {props.size}
    </div>
  )
}

export default Bath
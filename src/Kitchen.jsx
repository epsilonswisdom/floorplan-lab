import Oven from "./Oven"
import Sink from "./Sink"
function Kitchen(props) {
  return(
    <div id='kitchen'>
      <span>Kitchen</span>
      <Oven />
      <Sink />

    </div>
  )
}

export default Kitchen
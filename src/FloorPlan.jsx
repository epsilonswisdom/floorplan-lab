import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bath from "./Bath"
import Bedroom from "./Bedroom"

function FloorPlan(props) {
  console.log(FloorPlan)
  return (
    <div id='floorplan'>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1}/>
      <Bedroom bedNum={2}/>
      <Bedroom bedNum={3}/>
      <Bath size='full'/>
      <Bath size='half'/>

    </div>
  )
}

export default FloorPlan
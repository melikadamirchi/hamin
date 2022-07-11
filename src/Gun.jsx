import Shoot from './Components/Shoot'
import Shoot2 from './Components/Shoot2';


const Gun=()=>{
    
      return (
       <div>



        <button onClick={({a,b}) => Shoot("Goal!", "event")}> Take the shot! </button>
        <button onClick={() => Shoot2("hhhhhh")}> click</button>
        <Shoot
        a="tiiiiir"
        b="miiiiiiir"
/>
        
        
        
        </div> )
    }


export default Gun












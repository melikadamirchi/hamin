
import MadeGoal from './Components/MadeGoal';
import MissedGoal from './Components/MissedGoal'; 

const Goal=(props)=>{
    const isGoal=props.isGoal;

    return( 
    <>

   { isGoal ? <MadeGoal/> : <MissedGoal/>}
   </> );
   
}
export default Goal
import Zaban from "./Components/Zaban"

const Program=()=>{
const all=[
   {id:1, brand:'c'},
    {id:2, brand:'php'},
    {id:3, brand:'js'}
]
return(
    <ul>
        {all.map((i)=><Zaban key={i.id} brand={i.brand}/>)}
    </ul>
)




}
export default Program
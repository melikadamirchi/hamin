import Cars from './Components/Cars'

const Garage=()=>{
    
    const cars=[
        { brand:'ford'},
        { brand:'bmw' },
        { brand:'audi'}
    ]
   
    
return(<>
<h1>who lives?</h1>
<ul>
    {cars.map((i) => <Cars  brand={i.brand} />)}
</ul>
</>);


}
export default Garage
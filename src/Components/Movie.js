import { useNavigate, useParams } from "react-router-dom"
import Rating from '@mui/material/Rating'; 

const Movie=({movies})=>{
    var {id} = useParams()
var found = movies.find((el,i,t)=> el.id=== Number(id)) 
const navigate= useNavigate()   
return(
        <div className="carta">
            <h1 style={{color:'pink'}}>More About the movie</h1>
 <h2 style={{fontSize:'30px', color:'palevioletred'}}>{found.title}</h2>
 <img style={{width:'600px', height:'500px'}} src={found.posterURL} alt="Not found"/>
 <h2 style={{fontSize:'30px', color:'violet'}}>{found.description}</h2>
 <Rating name="read-only" value={found.rating} readOnly />
 <iframe width="560" height="315" src={found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 <button style={{color:'palevioletred', fontSize:'30px', backgroundColor:'lavender'}} onClick={()=>navigate('/')}> Back Home</button>
        </div>
    ) 
}

export default Movie 
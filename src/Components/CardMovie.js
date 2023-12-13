import {Button, Card} from "react-bootstrap" 
import Rating from '@mui/material/Rating'; 
import { Link } from "react-router-dom";

const CardMovie=({el})=>{
    return (
       
<Card style={{ width: '17rem' }}>
      <Card.Img style={{width:270, height:250}} variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title style={{color:'pink'}}>{el.title}</Card.Title>
        <br/> 
        <Card.Text style={{color:'purple'}}> 
          {el.description} 
          <br/>
           <br/>
        </Card.Text>
        <Rating name="read-only" value={el.rating} readOnly />
        <br/> 
       <br/>  

       <Link to={`/Movie/${el.id}`}> <Button>Know More</Button> </Link>  
       <br/> 
      </Card.Body> 
    </Card> 
   
//onClick={()=>(`/Movie/${el.id}`)} 
  
       
    )
}

export default CardMovie
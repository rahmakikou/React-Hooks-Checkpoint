import {Card} from "react-bootstrap" 
import Rating from '@mui/material/Rating'; 
const CardMovie=({el})=>{
    return (
        
<Card style={{ width: '17rem' }}>
      <Card.Img style={{width:270, height:250}} variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title style={{color:'pink'}}>{el.title}</Card.Title>
       
        <Card.Text style={{color:'purple'}}> 
          {el.description} 
          <br/>
           <br/>
        </Card.Text>
        <Rating name="read-only" value={el.rating} readOnly />
        
      </Card.Body>
    </Card> 
       
    )
}

export default CardMovie
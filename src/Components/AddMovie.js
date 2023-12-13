import {useState} from 'react';
import {Button, Modal} from 'react-bootstrap'; 
import Form from 'react-bootstrap/Form'; 
import Rating from '@mui/material/Rating'; 

const AddMovie=({movies, setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState ('');
    const [posterURL, setPosterURL] = useState (''); 
    const [rating, setRating] = useState (0); 
    
const handleAdd=()=> setMovies([...movies,{title,description,posterURL,rating,id : Math.random()}])
    
    return (
        <div>
<Button style={{fontSize:'35px'}} variant="primary" onClick={handleShow}>
      Add New Entry 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter title"/>
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PosterURL</Form.Label>
        <Form.Control onChange={(e)=> setPosterURL(e.target.value)} type="text" placeholder="Enter Image"/>
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label> 
        <br/> 
        <Rating onChange={(e)=>setRating(e.target.value)}/> 
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleAdd();handleClose()}}>
            Add 
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie 
import {React,useState} from 'react'
import {Button,Modal,Form,InputGroup,FormControl} from 'react-bootstrap'
export default function Cmodal({setGetMovie}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] =useState('')
    const [rate,setRate] =useState('')
    const [date,setDate] = useState('')
    const [imgUrl,setImgUrl] =useState('')
    const [description,setDescription] =useState('')
    const [category,setCategory] =useState('')
   
  
    const submitDataMovie = ()=>{
      setGetMovie({title,rate,description,imgUrl,date,category})
      handleClose()
    }
  
    return (
      <>
        <Button variant="outline-warning" onClick={handleShow}>
         Add new movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <InputGroup className="mb-3">
            <FormControl
             placeholder="title"
             aria-label="title"
             aria-describedby="basic-addon1"
             onChange={(e)=>setTitle(e.target.value)}
            />
             </InputGroup>
             <InputGroup className="mb-3">
            <FormControl
             placeholder="rate"
             type="number"
             aria-label="rate"
             aria-describedby="basic-addon1"
             onChange={(e)=>setRate(e.target.value)}
            />
             </InputGroup>
             <InputGroup className="mb-3">
                <FormControl
                    placeholder="date"
                    aria-label="date"
                    type="number"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setDate(e.target.value)}
                />
                </InputGroup>
                <InputGroup className="mb-3">
            <FormControl
             placeholder="imgUrl"
             aria-label="imgUrl"
             aria-describedby="basic-addon1"
             onChange={(e)=>setImgUrl(e.target.value)}
            />
             </InputGroup>
             
             <InputGroup className="mb-3">
            <FormControl
             placeholder="description"
             aria-label="description"
             aria-describedby="basic-addon1"
             onChange={(e)=>setDescription(e.target.value)}
            />
             </InputGroup>
             <InputGroup className="mb-3">
            <FormControl
             placeholder="category"
             aria-label="category"
             aria-describedby="basic-addon1"
             onChange={(e)=>setCategory(e.target.value)}
            />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>submitDataMovie()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
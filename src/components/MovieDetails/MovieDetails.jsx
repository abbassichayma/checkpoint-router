import {React,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Row,Card,Col}from 'react-bootstrap'
import axios from 'axios'
function MovieDetails() {
    let {myID}=useParams();
    const[MyData,setMyData]=useState([]) 
    const getDataMovies=async()=>{
        try{
          const{data} = await axios.get('https://movie-app-gmc.herokuapp.com/api/movies/'+myID)
          setMyData(data)
          console.log('data : ',data)
        }
        catch(e){
            console.log(e)
        }
    }
     useEffect(()=>{
        getDataMovies() 
      },[])
  return (
    <div>
<Row xs={1} md={3} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
 
    <Col>
      <Card>
        <Card.Img variant="top" src={MyData.imgUrl} />
        <Card.Body>
          <Card.Title>{MyData.title}</Card.Title>
          <Card.Text>
           {MyData.category}
           {MyData.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  )
}

export default MovieDetails
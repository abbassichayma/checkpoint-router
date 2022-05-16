import axios from 'axios'
import {React,useEffect,useState} from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import MyModal from '../MyModal/MyModal'
function MovieList({search,rating,getMovie}) {
    const [myMovies,setMyMovies]=useState([])
    const [modifie,setModifie]=useState({})
    const getDataMovies = async()=>{
      try{
      const {data} = await axios.get('https://movie-app-gmc.herokuapp.com/api/movies')
      setMyMovies(data)

      console.log(data)
      }
      catch (error) {
        console.error(error)
    }
    }
  useEffect(()=>{
    getDataMovies() 
  },[])
  
  
   
  if(Object.keys(getMovie).length != 0 ){
    myMovies = [...myMovies,{...getMovie,_id:Math.random()}]
}

  const deleteMovie=(ID)=>{
    return setMyMovies(myMovies.filter(ele=>ele._id!==ID))
  }

  const modifiMovie =(ID)=>{
  if((myMovies.filter(ele=>ele._id==ID))&&(Object.keys(modifie).length != 0 )){
    return myMovies = [...myMovies,{modifie}]
  }
  }
  
  return (
    <div>
        <Row xs={1} md={4} className="g-4">
  {myMovies.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())&& rating>=el.rate).map((el) => <div>
    <Col>
      <Card>
      <Link to={`/Mymovie/${el._id}`}><Card.Img variant="top" src={el.imgUrl} /></Link>
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
           {el.description}
          </Card.Text>
          <Card.Body>
          <button type="submit" onclick={()=>modifiMovie(el._id)} ><MyModal setModifie={setModifie}/></button>
          <Button variant="outline-danger" onClick={()=>deleteMovie(el._id)}>delete</Button>
          
          </Card.Body>
        </Card.Body>
      </Card>
      <Card.Footer>
      <ReactStars
                style='margin:0 auto'
                count={5}
                value={el.rate}
                size={24}
                edit={false}
                activeColor="#ffc107"
                />,
            
      </Card.Footer>
    </Col>
    </div>)}
</Row>
    </div>
  )}

export default MovieList
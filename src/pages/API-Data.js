import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card,Button } from 'react-bootstrap';
// import MyApiCard from './MyApiCard';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // url: process.env.REACT_APP_SERVER,
      dataList: [],
      // showData: false,
    }

  }

  componentDidMount = async () => {
    let result= await axios.get(`http://localhost:3005/api`)
      this.setState({
        dataList: result.data,
        // showData: true,
      })
   
  }
 

  addtoFav = async (item) => {
    const dataobj = {
      email: this.props.auth0.user.email,
      name: item.name,
      img: item.img,
      level: item.level
    };
    // http://localhost:3005/addtofav
    await axios.post(`http://localhost:3005/addtofav`, dataobj)
  }

  render() {
    return (
      <>
      { this.state.dataList.map((item, index) => {
          return (
            <>
              <Card style={{ width: "18rem", margin: "1.5rem", display: "inline-block", }}                >                 
               <Card.Img variant="top" src={item.img} alt="" />                  
               <Card.Body>                    
                 <Card.Title>{item.name}</Card.Title>                    
                 <Card.Text>{item.level}</Card.Text>                    
                 <Button onClick={()=>{this.addtoFav(item)}}>Add To Fav</Button>                  
                 </Card.Body>                
                 </Card>
            </>
          )
        })}
     </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);

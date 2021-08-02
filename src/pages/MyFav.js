import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Button } from 'react-bootstrap';
import Updatemodel from './Updatemodal';
// import UpdateFormModel from './UpdateFormModel';
// import MyFavCard from './MyFavCard';

class MyFav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      cartonData: [],
      name: '',
      img: '',
      level: '',
      index: 0,
      showmodel: false
    }

  }

  componentDidMount = async () => {
    let { email } = this.props.auth0.user
    let result = await axios.get(`http://localhost:3005/alldata?email=${email}`)

    this.setState({
      cartonData: result.data,
      // showData: true,
    })
    console.log(this.state.cartonData);
  }
  handelshow = (index) => {
    this.setState({
      showmodel: true,
      index: index,
      name: this.state.cartonData[index].name,
      img: this.state.cartonData[index].img,
      level: this.state.cartonData[index].level,
    })
  }
  handleClose = () => {
    this.setState({
      showmodel: false
    })
  }

  updatedata = async (e) => {
    e.preventDefault()
    let updatedopj = {
      email: this.props.auth0.user.email,
      name: e.target.name.value,
      img: e.target.img.value,
      level: e.target.level.value
    }
    console.log(updatedopj);
    // http://localhost:3005/update/index
    let resupdate = await axios.put(`http://localhost:3005/update/${this.state.index}`, updatedopj)
    await this.setState({
      cartonData: resupdate.data
    })
  }

  deletedcard = async (index) => {
   
    let paramsObj = {
      email:this.props.auth0.user.email,
    }
    let resdelet = await axios.delete(`http://localhost:3005/delete/${index}`, { params: paramsObj })

    await this.setState({
      cartonData: resdelet.data,
      index:index
    })
  }
  render() {
    return (
      <>
        {this.state.cartonData.map((item, index) => {
          return (
            <>
              <Card style={{ width: "18rem", margin: "1.5rem", display: "inline-block", }}                >
                <Card.Img variant="top" src={item.img} alt="" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.level}</Card.Text>
                  <Button variant="primary" onClick={() => this.handelshow(index)}>Update</Button>
                  <Button variant="primary" onClick={() => this.deletedcard(index)}>delete</Button>


</Card.Body>
              </Card>
            </>
          )
        })}

        <Updatemodel cartonData={this.state.cartonData} index={this.state.index} showmodel={this.state.showmodel} handelshow={this.handelshow} handleClose={this.handleClose}
          name={this.state.name} img={this.state.img} level={this.state.level} updatedata={this.updatedata} />

      </>
    )
  }
}

export default withAuth0(MyFav);

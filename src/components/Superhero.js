import{Card,Container, Row,Col,Image}from "react-bootstrap"
import antmanImage  from "../assets/images/superhero/antman.jpg"
import avangerImage  from "../assets/images/superhero/avenger.jpg"
import batmanImage  from "../assets/images/superhero/batman.jpg"
import robinhoodImage  from "../assets/images/superhero/robinhood.jpg"
import spidermanImage  from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage  from "../assets/images/superhero/superman.jpg"


const SuperHero= () =>{
	return (
		<div>
			<Container>
				<br/>
				<h1 className="text-white">SuperHero Movies</h1>
				<br/>
				<Row>
					<Col md={4}  className="movieWrapper" id="SuperHero">
					<Card className="movieImage">
      				<Image src={antmanImage} alt="Antman Movies" className="images"/ >
					<div className="bg-dark">
					<div className="p-2 m-1 text-white">
        			<Card.Title className="text-center">ANTMAN</Card.Title>
        			<Card.Text className="text-left">
          				This is a wider card with natural lead-in
          				to additional content.
        			</Card.Text>
        			<Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
					</div>
					</div>
					</Card>
					</Col>
					<Col md={4}  className="movieWrapper">
					<Card className="movieImage">
      				<Image src={avangerImage} alt="Avanger Movies"className="images"/ >
					<div className="bg-dark">
					<div className="p-2 m-1 text-white">
        			<Card.Title className="text-center">AVENGERS</Card.Title>
        			<Card.Text className="text-left">
          				This is a wider card with natural lead-in
          				to additional content.
        			</Card.Text>
        			<Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
					</div>
					</div>
					</Card>
					</Col>
					<Col  md={4} className="movieWrapper">
					<Card className="movieImage">
      				<Image src={batmanImage} alt="Infinite Movies" className="images"/ >
					<div className="bg-dark">
					<div className="p-2 m-1 text-white">
        			<Card.Title className="text-center">THE BATMAN</Card.Title>
        			<Card.Text className="text-left">
          				This is a wider card with natural lead-in
          				to additional content.
        			</Card.Text>
        			<Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
					</div>
					</div>
					</Card>
					</Col>
					<Col  md={4} className="movieWrapper">
					<Card className="movieImage">
      				<Image src={robinhoodImage} alt="Joker Movies"className="images"/ >
					<div className="bg-dark">
					<div className="p-2 m-1 text-white">
        			<Card.Title className="text-center">ROBINHOOD</Card.Title>
        			<Card.Text className="text-left">
          				This is a wider card with natural lead-in
          				to additional content.
        			</Card.Text>
        			<Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
					</div>
					</div>
					</Card>
					</Col>
					<Col  md={4} className="movieWrapper">
					<Card className="movieImage">
      				<Image src={spidermanImage} alt="Light Year Movies"className="images"/ >
					<div className="bg-dark">
					<div className="p-2 m-1 text-white">
        			<Card.Title className="text-center">SPIDERMAN</Card.Title>
        			<Card.Text className="text-left">
          				This is a wider card with natural lead-in
          				to additional content.
        			</Card.Text>
        			<Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
					</div>
					</div>
					</Card>
					</Col>
					<Col  md={4} className="movieWrapper">
					<Card className="movieImage">
      				<Image src={supermanImage }alt="Superman Movies"className="images"/ >
					<div className="bg-dark">
					<div className="p-2 m-1 text-white">
        			<Card.Title className="text-center">SUPERMAN</Card.Title>
        			<Card.Text className="text-left">
          				This is a wider card with natural lead-in
          				to additional content.
        			</Card.Text>
        			<Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
					</div>
					</div>
					</Card>
					</Col>

				</Row>
			</Container>

		</div>
	)
}

export default SuperHero
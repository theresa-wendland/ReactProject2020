import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";
import Example from "./CarouselComponent";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
        <CardText> <Button>Add To Cart</Button> {item.price}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <React.Fragment>
      <Example className="carousel" />
      <div className="container">
        <div className="row">
          <div className="col-md m-1">
            <RenderCard item={props.campsite} />
          </div>
          <div className="col-md m-1">
            <RenderCard item={props.promotion} />
          </div>
          <div className="col-md m-1">
            <RenderCard item={props.partner} />
          </div>
        </div>
        <div className="row">
          <div className="col-md m-1">
            <RenderCard item={props.campsite} />
          </div>
          <div className="col-md m-1">
            <RenderCard item={props.promotion} />
          </div>
          <div className="col-md m-1">
            <RenderCard item={props.partner} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

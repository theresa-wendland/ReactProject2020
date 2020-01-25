import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardHeader
} from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { FadeTransform } from 'react-animation-components';

function RenderDirectoryItem({ campsite }) {
  return (
    <FadeTransform
    in
    transformProps={{
        exitTransform: 'scale(0.5) translateY(50%)'
    }}>

    <Card>
      <CardHeader body inverse style={{ backgroundColor: "#678a74 " }}>
        <CardTitle>{campsite.name}</CardTitle>
      </CardHeader>
      <Link to={`/directory/${campsite.id}`}>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
      </Link>
    </Card>
    </FadeTransform>
  );
}

function Directory(props) {
  const directory = props.campsites.map(campsite => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <RenderDirectoryItem campsite={campsite} />
      </div>
    );
  });

  return (
    <React.Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Products</BreadcrumbItem>
      </Breadcrumb>
    
      
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>In Stock</h3>
            <hr />
          </div>
        </div>

        <div className="row">{directory}</div>
      </div>
      
      
    </React.Fragment>
  );
}

export default Directory;

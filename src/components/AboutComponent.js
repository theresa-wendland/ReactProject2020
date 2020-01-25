import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media
} from "reactstrap";
import Video from "./VideoComponent";
import { Link } from "react-router-dom";

function RenderPartner({ partner }) {
  if (partner) {
    return (
      <React.Fragment>
        <Media object src={partner.image} alt={partner.name} width="150" />
        <Media body className="ml-5 mb-4">
          <Media heading>{partner.name}</Media>
          {partner.description}
        </Media>
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
}

function About(props) {
  const partners = props.partners.map(partner => {
    return (
      <Media tag="li" key={partner.id}>
        {" "}
        <RenderPartner partner={partner} />
      </Media>
    );
  });

  return (
    <React.Fragment>
      <Breadcrumb sticky="top" expand="md">
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Tutorials</BreadcrumbItem>
      </Breadcrumb>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Tutorials</h2>
            <hr />
          </div>
        </div>
        <div className="row row-content pt-3">
          <div className="col">
            <Video />
            <p className="pt-3">
              Today’s video is all about my skincare routine! On the real, the
              reason I’ve really been putting off this video for the last year
              is only because I feel like I have TOO MUCH I want to share haha!
              I swear I could go on and on about this stuff for DAYS. I’m openly
              obsessed with skincare and have been since I was a teenager, and
              there’s nothing I love more than finding new ways to up my skin
              game. Be warned: this routine is LENGTHY and very in-depth. I tell
              you what I eat and drink to improve my skin, what vitamins I take
              and of course what products I use. I hope you guys enjoy this
              video and ALWAYS keep in mind that skincare is so personal, and
              you’ll probably have to work a bit to find what works for you.
            </p>
          </div>
        </div>
        <div className="col">
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p className="mb-0">
                  I will not follow where the path may lead, but I will go where
                  there is no path, and I will leave a trail.
                </p>
                <footer className="blockquote-footer">
                  Muriel Strode,{" "}
                  <cite title="Source Title">
                    "Wind-Wafted Wild Flowers" - The Open Court, 1903
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Youtube Creators</h3>
          </div>
          <div className="col mt-4">
            <Media list>{partners}</Media>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;

import React, { Fragment ,useState,useEffect} from 'react';
import { Container,Row,Col,Spinner } from 'react-bootstrap';
import '../../asset/css/Bootstrap.min.css';
import '../Team/Team.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Team() {
  const [chercheurs, setChercheurs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Make GET request to API endpoint
    fetch('http://127.0.0.1:8000/urpima/chercheur/')
      .then(response => response.json())
      .then(
        data => {
          setIsLoaded(true);
          setChercheurs(data);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (error) {
    return <div>Error</div>;
  } else if (!isLoaded) {
    return (
      <div>
        Loading
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    return (
      <Fragment>
        <h1 className='axetitle  text-center '>Our Team</h1>
        <div className='bottom'></div>
        <Container fluid={true} className="Bgcolor text-center">
          <Slider {...settings}>
            {chercheurs.map(chercheur => (
              <div key={chercheur.id}>
                <Row key={chercheur.id}>
                  <Col>
                  <img className='circleImg' src={`http://127.0.0.1:8000/urpima${chercheur.image}`} alt={chercheur.first_name} />

                    <h4 className='Nom' >{chercheur.first_name}</h4>
                    <h5 className='Name' >{chercheur.bio}</h5>
                    <p className='Name' >Email: {chercheur.email}</p>
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default Team;

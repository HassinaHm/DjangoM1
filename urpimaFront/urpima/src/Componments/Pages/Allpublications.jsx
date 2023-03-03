import React, { useState, useEffect, Fragment } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import '../../App.css'
import TopNavbar from '../TopNavbar/TopNavbar';
import Footer from '../Footer/Footer'
import Search from './Search'
import '../../App.css'


function Allpublications() {
  const [articles, setArticles] = useState([]);
  const [livres, setLivres] = useState([]);
  const [theses, setTheses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/urpima/all/')
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        setLivres(data.livres);
        setTheses(data.theses);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Fragment>
      <TopNavbar />
      
      <div className="content">
        <h1>Articles</h1>
        <ul>
          {articles.map(article => (
            <div key={article.id}>
              <Accordion defaultActiveKey="1" className="panel-body">
                <Accordion.Item eventKey="0">
                  <Accordion.Header><Link to={`/journals/${article.id}/`}>{article.titre}</Link></Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {article.auteurs.map(auteur => (
                        <li key={auteur.id}>{auteur.name}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ))}
        </ul>
        <h1>Livres</h1>
        <ul>
          {livres.map(livre => (
            <div key={livre.id}>
              <Accordion defaultActiveKey="1" className="panel-body">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{livre.titre}</Accordion.Header>
                  <Accordion.Body>
                    {livre.auteur}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>  
          ))}
        </ul>
        <h1>Theses</h1>
        <ul>
          {theses.map(these => (
            <div key={these.id}>
              <Accordion defaultActiveKey="1" className="panel-body">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{these.titre}</Accordion.Header>
                  <Accordion.Body>
                    {these.auteur}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>  
          ))}
        </ul>
      </div>
      <Search />
      <Footer />
    </Fragment>
  );
}

export default Allpublications;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function JournalView({ match }) {
  const [journal, setJournal] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/urpima/journals/${id}`)
      .then(response => response.json())
      .then(data => {
        setJournal(data);
      })
      .catch(error => console.error(error));
  }, [id]);
  

  if (!journal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Titre :{journal.titre}</h1>
      <p><b>Resumé :</b>{journal.resume}</p>
      <p><b>Introduction :</b>{journal.introduction}</p>
      <p><b>Revue :</b>{journal.revue}</p>
      <p><b>methodes :</b>{journal.methodes}</p>
      <p><b>Resultats:</b>{journal.resultats}</p>
      <p><b>Discussion :</b>{journal.discussion}</p>
      <p><b>Conclusion :</b>{journal.conclusion}</p>
      <p><b>References :</b>{journal.references}</p>
      <p><b>Remerciemnets :</b>{journal.remerciements}</p>
      <p><b>Url:</b>{journal.url}</p>
      <p><b>Volume :</b>{journal.volume}</p>
      <p><b>Pages :</b>{journal.pages}</p>
      <p><b>Date :</b>{journal.date}</p>
      <ul> auteurs:
        {journal.auteurs.map(auteur => (
          <li key={auteur.id}>{auteur.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default JournalView;

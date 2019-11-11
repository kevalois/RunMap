/* eslint-disable react/style-prop-object */
import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';

import './aProposPage.scss';

const AProposPage = () => (

  <div className="container mt-2 overflow-auto">

    <CardColumns>

    <Card border="warning" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Franchement, c'est impossible les gars, j'ai même provoqué un débat sur un groupe Facebook
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Brice - <cite title="Source Title">bloqué 3j sur le même problème </cite>
        </small>
      </footer>
    </blockquote>
  </Card>

      <Card>
        <Card.Img variant="top" src="src/components/Page/AProposPage/Kevin.jpg" />
        <Card.Body>
          <Card.Title>
            <span className="text-monospace">Kevin : Lead DevBack.</span>
            <div className="">
              <p className="text-muted text-descript">Accessoirement le plus sérieux mais pas le dernier pour sortir un vanne !</p>
            </div>
            </Card.Title>
          <Card.Text>
            -
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="warning" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            <b>Et les gars</b>, c'est quoi les identifiants AWS ?
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Julien - <cite title="Source Title">Environ 3x/jour</cite>
            </small>
          </footer>
        </blockquote>
      </Card>

      <Card border="warning" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            On ne te demande pas de montrer ta lune MDR.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Kevin - <cite title="Source Title">Pour motiver Julien à envoyé une photo</cite>
            </small>
          </footer>
        </blockquote>
      </Card>

      <Card className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Travailler avec moi, c'est comme avoir fait le Vietnam.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Julien - <cite title="Source Title">Quand on galère à le comprendre</cite>
            </small>
          </footer>
        </blockquote>
      </Card>

      <Card border="warning" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            <b>Les gars</b> j'ai tout perdu, j'ai une page blanche maintenant ...
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Miguel - <cite title="Source Title">qui avait encore oublié de faire un git pull sur master</cite>
            </small>
          </footer>
        </blockquote>
      </Card>

      <Card>
        <Card.Img variant="top" src="src/components/Page/AProposPage/Brice.jpg" />
        <Card.Body>
          <Card.Title>
            <span className="text-monospace">Brice : Trello, c'est mon crénaux</span>
            <div className="">
              <p className="text-muted text-descript">C'est lui après avoir trouvé la solution au problèmes qui l'a bloqué pendant 3 jours ...</p>
            </div>
          </Card.Title>
          <Card.Text>
            -
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="warning" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        <b>Localisation ton parcours, optimise ton entrainement, atteint tes objectifs !</b>
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          RunMap -<cite title="Source Title">le site de référence.</cite>
        </small>
      </footer>
    </blockquote>
  </Card>

  <Card>
  <Card.Img variant="top" src="src/components/Page/AProposPage/Miguel.png" />
  <Card.Body>
    <Card.Title><span className="text-monospace">Miguel : Project Owner .. ASKIP!</span>
      <div className="">
        <p className="text-muted text-descript">Il en avait marre de payer une licence, alors il a voulu créer RunMap !</p>
      </div>
    </Card.Title>
    <Card.Text>
      -
    </Card.Text>
  </Card.Body>
</Card>

      <Card border="warning" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Hey lave toi les mains après être allé aux toilettes : important pour le titre pro.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              JC -<cite title="Source Title">entrain de refaire le cahier des charges</cite>
            </small>
          </footer>
        </blockquote>
      </Card>

      <Card>
        <Card.Img variant="top" src="src/components/Page/AProposPage/Julien.jpg" />
        <Card.Body>
          <Card.Title>
            <span className="text-monospace">Julien : Alias, GitPush</span>
            <div className="">
              <p className="text-muted text-descript">Apparement il est de la famille de 'Tout EnCarton" c'est lui qui le dit ..</p>
            </div>
          </Card.Title>
          <Card.Text>
            -
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            <b>Miguel</b>, tu mettras la meme photo que Kevin pour moi.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              JC - <cite title="Source Title">Au moment de créer cette page</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      

      <Card>
        <Card.Img variant="top" src="src/components/Page/AProposPage/JeanChristophe.png" />
        <Card.Body>
          <Card.Title>
            <span className="text-monospace">JC : LeadDev Front Infiltré</span>
            <div className="">
              <p className="text-muted text-descript">Le Master Map, des jours de galères mais il y est arrivé !</p>
            </div>
          </Card.Title>
          <Card.Text>
            -
          </Card.Text>
        </Card.Body>
      </Card>

    </CardColumns>

  </div>
);

export default AProposPage;

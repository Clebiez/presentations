import React, { Component } from 'react';

import {
  S,
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from '../../../src';

import preloader from '../../../src/utils/preloader';

import createTheme from '../../../src/themes/default';


require('normalize.css');

const gifs = {
  developer: require('../assets/developer.gif'),
  team: require('../assets/team.gif'),
  alone: require('../assets/alone.gif'),
  speak: require('../assets/speak.gif'),
  what: require('../assets/what.gif'),
  proto: require('../assets/proto.jpg'),
  proto2: require('../assets/proto2.jpg'),
  umlUseCase: require('../assets/umlUseCase.png'),
  logoYousign: require('../assets/logoYousign.png'),
  brainstorming: require('../assets/brainstorming.jpg'),
  kanban: require('../assets/kanban.jpg'),
  kanban2: require('../assets/kanban2.png'),
};
preloader(gifs);

const theme = createTheme({
  primary: '#1E6583',
  secondary: '#516457',
  green: '#B2DBBF',
  greenDark: '#70C1B3',
  red: '#b71c1c',
  yellow: '#F3FFBD'
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom']}
        theme={theme}
        transitionDuration={500}
      >
        <Slide>
          <Heading size={3}>Nouveau cas pratique !</Heading>
        </Slide>
        <Slide>
          <List>
            <ListItem textColor="white">Travailler le questionnement client pour comprendre ce qu’il souhaite vraiment</ListItem>
            <ListItem textColor="yellow">Définir un backlog → répartir les tâches → définir un planning & des jalons</ListItem>
            <ListItem textColor="white">Valider l’ensemble avec le client </ListItem>
            <ListItem textColor="yellow">Développer la solution, délivrer un pur produit et être :-D (un jour peut-être)</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text textColor="white">
            Vous bosser dans une agence web réputée pour la qualité de la conduite de ses projets. Aujourd’hui, vous êtes responsable de l’accueil et de l’accompagnement d’un tout nouveau client de l’agence, Lucien.
            En charge de la réalisation de son projet, vous mettez tout en oeuvre pour que la solution soit développée sans problème et dans le budget et les délais validés avec le client
          </Text>
        </Slide>
        <Slide>
          <Heading size={6} fit textColor="yellow">Voici le souhait de votre client, Lucien.</Heading>
          <Text textColor="white">
            Lucien va réaliser son rêve. Après un départ négocié de son (ancien) emploi,
            il va se lancer et créer SA startup. Son idée est simple et part d’un réel
            besoin. Il souhaite créer un service pour simplifier la vie des freelances.
            Son service prendra vraisemblablement les contours d’une plateforme en ligne 
            proposant différents services.
          </Text>
        </Slide>
      </Deck>
    );
  }
}

// Différence Client VS Chef de projet V

// Architecture

// L'argent, ça rend accroc

// Pédagogie

// Déroulement du projet

// Finalité

// Résumé

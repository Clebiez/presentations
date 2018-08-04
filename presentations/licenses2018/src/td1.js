import React, { Component } from 'react';

import {
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
        <Slide bgImage={gifs.proto.replace('/', '')} bgDarken="0.3">
          <Appear fid="1">
            <Heading textColor="white" fit caps bold>
              Prototyping
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="white">
          <Image display="block" src={gifs.proto2.replace('/', '')} />
        </Slide>
        <Slide bgColor="primary">
          <List textColor="yellow" bold caps>
            <ListItem margin="20px 0">Reprendre le backlog fait avec Jean-Luc</ListItem>
            <ListItem margin="20px 0">Définir des chemins utilisateurs</ListItem>
            <ListItem margin="20px 0">Faire des croquis PAPIER des vues</ListItem>
            <ListItem margin="20px 0">Relier les vues entre elle avec Marvel</ListItem>
            <ListItem margin="20px 0">Et faire valider à votre client (moi)</ListItem>
          </List>
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
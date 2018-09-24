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
  projectManager: require('../assets/chefProjet.jpg'),
  allClients: require('../assets/allClients.jpg')
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
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="yellow" bold>
            La conduite d'un projet
          </Heading>
          <Text textSize="1.0em" textColor="white" margin="40px 0px 0px">
            Licences 3 Informatique, Université de Caen 2018
          </Text>
          <Text textSize="1em" textColor="yellow" margin="40px 0px 0px">
            @Clebiez - clement.lebiez@gmail.com
          </Text>
         </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Vous voilà chef de projet !
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Vous avez des devs</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Vous avez un client</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Et vous avez une tâche "simple"</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Mener à bien ce projet.
          </Heading>
        </Slide>
        <Slide bgColor="white">
          <Image src={gifs.projectManager.replace('/', '')} width="900"/>
        </Slide>
        <Slide>
          <List>
            <ListItem textColor="white" bold caps>Comprendre le contexte</ListItem>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Définir le cadre</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Organiser la réussite du projet</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Premier rendez-vous avec votre client.
          </Heading>
        </Slide>
        <Slide bgColor="white">
          <Image src={gifs.allClients.replace('/', '')} height="100%"/>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Comprendre le besoin
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Les objectifs (perso, pro)</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Ce à quoi il s'attend ?</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Comment mesurer ? (KPI)</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Comprendre le besoin
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Est-ce clair ?</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Est-ce réalisable ?</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Déterminer les key features</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text textColor="white" bold caps>Une key feature est une fonctionnalité qui est essentielle au projet.</Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="yellow" bold>
            clement.lebiez@gmail.com
          </Heading>
          <Text textSize="1.0em" textColor="white" margin="40px 0px 0px">
            Licences 3 Informatique, Université de Caen 2018
          </Text>
        </Slide>
      </Deck>
    );
  }
}
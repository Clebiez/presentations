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
  allClients: require('../assets/allClients.jpg'),
  gantt: require('../assets/gantt.png'),
  mvp: require('../assets/mvp.png'),
  leanStartup: require('../assets/lean-startup.jpg'),
  alone: require('../assets/alone 2.gif'),
  goodfastcheap: require('../assets/goodfastcheap.gif'),
  pivot: require('../assets/pivot.gif'),
  team: require('../assets/team.gif'),
  toomuchscience: require('../assets/toomuchscience.gif'),
  rejected: require('../assets/rejected.gif')
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
            Licence 3 Informatique, Université de Caen 2018
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
          <Image src={gifs.team.replace('/', '')} width="900"/>
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
        <Slide bgColor="white">
          <Image src={gifs.goodfastcheap.replace('/', '')} height="100%"/>
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
              <ListItem textColor="yellow" bold caps>Quelles informations manquent t'il ?</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Est-ce réalisable ? Et le timing ?</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem textColor="yellow" bold caps>Déterminer les key features</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text textColor="white" bold caps>Une key feature est une fonctionnalité qui est essentielle au projet.</Text>
        </Slide>
        <Slide bgImage={gifs.toomuchscience.replace('/', '')} />
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Comprendre le besoin
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Cahier des charges VS Agilité</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Spécifications fonctionelles de base</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Règle du 80-20</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Définir le cadre du projet
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Définition claire et écrite du projet</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Contexte, objectifs, solutions envisagés</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Faire valider avec le client</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Définir le cadre du projet
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Planning prévisionnel et jalons</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Diagramme de Gantt !</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Faire valider avec le client</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="white">
          <Image src={gifs.gantt.replace('/', '')} width="100%"/>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Définir le cadre du projet
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>ne JAMAIS tout développer d'un bloc</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Définir un temps total max acceptable puis définir les jalons</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Valider le premier jalon et le planning global avec le client</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text textColor="white" bold caps>Pour estimer le temps de réalisation d'une tâche, demandez à vos développeurs.</Text>
          <Text textColor="yellow" bold caps>Multipliez ce temps par 2 et ajoutez 10% en plus.</Text>
          <Text textColor="white" italic caps>(imprévu, A/R, demande d'arbitrage qui prenne du temps)</Text>
        </Slide>
        <Slide>
          <Text textColor="yellow" bold caps>Exemple, si une tâche est estimée à 10H, alors comptez 22.</Text>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Réalisation
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Prototype</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Trello</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Slack</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            LEAN Startup
          </Heading>
        </Slide>
        <Slide>
          <Text textColor="white" caps>Une Startup est une entreprise destiné à délivrer un nouveau produit ou un nouveau service dans des conditions d'extrêmes incertitudes.</Text>
          <Appear fid="1">
            <Text textColor="yellow" caps bold>Rien à voir avec la taille de l'entreprise.</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} textColor="white" bold caps>une entreprise qui tente.</Heading>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Objectifs
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Mieux exploiter la créativité humaine</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Arrêter le gaspillage</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Apporter un produit le plus vite possible aux clients</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem textColor="yellow" bold caps>Amélioration continue</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="white">
          <Image src={gifs.leanStartup.replace('/', '')} height="100%"/>
        </Slide>
        <Slide bgImage={gifs.pivot.replace('/', '')} />
        <Slide>
          <Heading size={3} textColor="yellow">
            Construire
          </Heading>
          <Text textColor="white">Un MVP (Minimal Viable Product) est une stratégie de développement de produit, utilisée pour de rapides et quantitatifs tests de mise sur le marché d'un produit ou d'une fonctionnalité.</Text>
        </Slide>
        <Slide bgColor="white">
          <Image src={gifs.mvp.replace('/', '')} width="100%"/>
        </Slide>
        <Slide>
          <Text textColor="white">La Fourchette, Groupon</Text>
        </Slide>
        <Slide>
          <Heading size={3} textColor="yellow">
            Mesurer
          </Heading>
          <Text textColor="white">Aller sur le terrain pour mesurer de manière quantifiable les retours de vos clients OU de potentiels clients.</Text>
        </Slide>
        <Slide bgColor="white">
          <Image src={gifs.alone.replace('/', '')} width="70%"/>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Mesurer
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Test en condition réel</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Questionnaire</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Vidéo de présentation</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem textColor="yellow" bold caps>Landing Page</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text textColor="white">Lorsqu'une startup change de produit pour répondre à un nouveau besoin identifié, on dit qu'elle a effectué un « Pivot ».</Text>
        </Slide>
        <Slide>
          <Text textColor="white">Nokia, Flickr & Slack, Twitch</Text>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="yellow">
            Go !
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem textColor="white" bold caps>Marketting</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="yellow" bold caps>Marketting</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="white" bold caps>Marketting</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem textColor="yellow" bold caps>Marketting</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="white">
          <Image src={gifs.alone.replace('/', '')} width="70%"/>
        </Slide>
        <Slide>
          <Text textColor="white">On dit que pour réussir, il faut au moins dépenser 2 fois plus en marketting qu'en développement.</Text>
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
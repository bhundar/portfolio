import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {StarField} from './SolarSystem/StarField.js';
import {MaterialCard} from './UI/MaterialCard.js';
import {ProjectCategory} from './Projects/ProjectCategory.js';

export class Projects extends React.Component {
  render () {
    var projectCategoriesList=[];
    for (const key of Object.keys(projectCategoriesJson)) {
      projectCategoriesList.push(<ProjectCategory key={Math.random()} title={key} data={projectCategoriesJson[key]} />);
    }

    return (
      <div id='Projects' className={css(styles.wrapper)}>
        <StarField noOfStars='140' />
        <MaterialCard className={styles.card}>
          <div className={css(styles.header)}>Projects</div>
        </MaterialCard>
        {projectCategoriesList}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    //height: '100%',
    flexDirection: 'column',
    paddingTop: '80px',

    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    overflowY: 'visible',
    overflowX: 'hidden',
    '@media (max-width: 877px)': {
      paddingTop: '130px'
    }
  },
  card: {
    margin: '20px',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '300px'
  },

  header: {
    fontSize: '50px'
  }
});

// map of titles to project categories data
const projectCategoriesJson = {
  "C++": [
    {
      src: 'Assets/Img/Projects/Chess.png',
      title: 'Artificial Intelligence Chess Engine',
      bodyText: 'Chess game coded using object-oriented software development principles with up to 4 levels of human vs. computer variations where level 4 using AI min-max algorithms to generate moves.'
      ,
      gitLink: 'https://github.com/bhundar/The-Game-of-Chess',
    },
    {
      src: 'Assets/Img/Projects/Lidar.png',
      title: 'LIDAR Noise Filter',
      bodyText: 'Filter coded to reduce noise in the data coming from a LIDAR sensor attached to a robot using range filter and temporal median filter techniques.',
      gitLink: 'https://github.com/bhundar/LidarFilter',
    }, 
    {
      src: 'Assets/Img/Projects/Image.png',
      title: 'Image Processing Package',
      bodyText: 'Image editing software coded using decorator design patter enabling photo editing features such as effects and filters.',
      gitLink: 'https://github.com/bhundar/ImageProcessingPackage',
    },
    {
      src: 'Assets/Img/Projects/Reversi.png',
      title: 'Game of Reversi',
      bodyText: 'Implementation of Reversi board game using computer science design patterns and techniques.',
      gitLink: 'https://github.com/bhundar/Reversi',
    }
  ],
  "Python": [
    {
      src: 'Assets/Img/Projects/IPL.png',
      title: 'IPL Machine Learning Predictive Analysis',
      bodyText: 'Algorithm coded using  machine learning metrics and a neural network approach to predict IPL outcomes, specifically if a batsman will get out based on input constraints.',
      gitLink: 'https://github.com/bhundar/IPL-Predictive-Analysis',
    },
    {
      src: 'Assets/Img/Projects/Spam.png',
      title: 'Machine Learning Spam Filtering',
      bodyText: 'Tool coded using Support Vector Machines and Multinomials Naive Bayes machine learning models determining whether text received is spam or not.',
      gitLink: 'https://github.com/bhundar/SpamFiltering',
    },
    {
      src: 'Assets/Img/Projects/Meme.png',
      title: 'Speech Recognition Meme Generator',
      bodyText: 'Algorithm designed that uses speech recognition to generate a Meme based on the text converted from speech.',
      gitLink: 'https://github.com/bhundar/MemeGenerator',
    },
    {
      src: 'Assets/Img/Projects/Gravity.png',
      title: 'Gravity',
      bodyText: 'Code that implements different approximation methods using object oriented techniques for an arbitrary number of bodies, given an initial position, velocity and a mass for each body.',
      gitLink: 'https://github.com/bhundar/Gravity',
    }
  ],
}



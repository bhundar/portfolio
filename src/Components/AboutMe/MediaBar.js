import React from 'react';
import { StyleSheet } from 'aphrodite';
import {ImageButton} from '../UI/ImageButton.js';
import {MaterialCard} from '../UI/MaterialCard.js';

export class MediaBar extends React.Component {
  render () {
    return (
      <MaterialCard style={styles.wrapper} >
        <ImageButton link='https://github.com/bhundar' width='50px' height='50px' src='Assets/Img/MediaBar/github-logo.svg' />
        <ImageButton link='https://www.linkedin.com/in/bhundar/' width='50px' height='50px' src='Assets/Img/MediaBar/linkedin-logo.svg' />
        </ MaterialCard>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 'auto',
    height: '75px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '20px',
    padding: '10px'
  },
});

import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard.js';
import {TextButton} from '../UI/TextButton.js';

export class AboutMeCard extends React.Component {
  render () {
    return (
      <MaterialCard className={styles.card} >
        <div className={css(styles.header)}>About Me</div>
        <p className={css(styles.p)}>
        I am an Honours Mathematics, Joint Honours Physics, Computing Option graduate from the University of Waterloo.
          
          <br />
          <br />
          I love to code, trade and explore complex physics theories. I feel a sense of safety with numbers and am great with them. I have my share of experience coding complex algorithms, applying my finanical knowledge to the stock market and exploring the secrets of the cosmos.
        </p>
        <div className={css(styles.centerWrapper)}>
          {/* <TextButton text='Resume' href='./gursimratResume.pdf' color='#fff' hoverColor='#ffd377' /> */}
        </div>
      </MaterialCard>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '550px',
    margin: '20px 20px 20px 20px',
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center'
  },

  header: {
    marginTop: '50px',
    fontSize: '40px'
  },

  p: {
    fontSize: '20px',
    marginLeft: '50px',
    marginRight: '50px',
    marginBottom: '0px'
  },

  link: {
    textDecoration: 'none',
    color: '#FFA500'
  },

  centerWrapper: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

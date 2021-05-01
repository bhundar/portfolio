import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {TextButton} from '../UI/TextButton.js';

export class StuffIDo extends React.Component {
  render () {
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.buttonWrapper)}>
          <TextButton className={styles.button} text='LinkedIn' href='https://www.linkedin.com/in/bhundar/' color='#fff' hoverColor='#ffd377' />
          <TextButton className={styles.button} text='Github' href='https://github.com/bhundar' color='#fff' hoverColor='#ffd377' />
          <TextButton className={styles.button} text='Music' href='https://www.youtube.com/channel/UCSDpy-kJyOiMdV7a_Tv7-7Q' color='#fff' hoverColor='#ffd377' />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({

  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    marginTop: '80px'
  },

  title: {
    marginLeft: '20px',
    marginRight: '20px',
    fontSize: '40px',
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'justify',
    textAlignLast: 'center',
    '@media (max-width: 877px)': {
      fontSize: '30px'
    }
  },

  buttonWrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '30px',
    padding: '10px'
  },

  button: {
    width: '200px',
    height: '75px',
    fontSize: '20px',
    margin: '10px',
    flexShrink: '1'
  }
});

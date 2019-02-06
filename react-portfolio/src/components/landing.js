import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style= {{ width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={12}>
                <img src='https://i.imgur.com/dEzctTg.png'
                alt="avatar"
                className="my-img"
                />

                <div className="banner-text">
                    <h1> Full Stack Web Developer</h1>
                    
                    <hr/>

                    <p>HTML/CSS | Bootstrap | Javascript | ReactJS | NodeJS | ExpressJS | Redux | MongoDB</p>
                <div className="social-links">
                    
                    <a href="https://github.com/mhamzahhanif" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github-alt"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/hamzah-hanif/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-staylinked"></i>
                    </a>

                    <a href="https://www.instagram.com/moe_hhamzah/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/co0lhh1" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                    </a>

                    <a href="https://twitter.com/moehamza1993" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-twitter"></i>
                    </a>

                </div>
                </div>
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
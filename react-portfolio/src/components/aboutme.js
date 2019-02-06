import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Aboutme extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
            <Cell col={12}>
                <h2> About Me</h2>
                <hr style={{borderTop:'3px solid #414345'}}/>
                <p style={{ width:'75%', margin:'auto', paddingTop:'1em'}}>
                Web Developer with a passion for web application development. 
                Skilled in conceptualizing, designing, development, and deploying software containing logical problems. 
                Dedicated to driving innovation with the ability to follow industry and technological trends, and facilitating early adoption of innovations.
                </p>
            </Cell>
        </Grid>
      </div>
        )
    }
}

export default Aboutme;
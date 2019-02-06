import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
            <Cell col={6}>
                <h2> Hamzah Hanif</h2>
                <img
                src="https://i.imgur.com/H1qK0nH.png"
                alt="avatar"
                style={{height:'255px'}}
                className="gravatar-icon"
                />
                <p style={{ width:'75%', margin:'auto', paddingTop:'1em'}}>
                Connect with me on social media platforms and check out all of my work on github. Email me for any further inquiries.
                </p>
            </Cell>
            <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>

            <div className="contact-list">
                <List>
                <ListItem>
                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fas fa-phone-square" aria-hidden="true"/> (804)-519-9249</ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fas fa-envelope" aria-hidden="true"/> mhamzah1993@gmail.com</ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fab fa-skype" aria-hidden="true"/> live:mhamzah1993</ListItemContent>
                </ListItem>
                </List>
            </div>    
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
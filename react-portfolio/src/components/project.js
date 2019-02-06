import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Project extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto", textAlign: "center" }}>
        <Grid className="projects-head">
          <Cell col={12}>
            <h2>Best Work</h2>
            <hr style={{ borderTop: "3px solid #fbc7d4" }} />
          </Cell>
        </Grid>
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://amtrakdowneaster.com/sites/default/files/2017-10/Concert_2_0.jpg) center / cover"
              }}
            >
              Concert Junkie
            </CardTitle>
            <CardText>
              Concert-Junkie allows its user to organize and track their
              favorite bands, get concert alerts, and buy tickets. The app gives
              access to tour announcements, information about artists and bands.
            </CardText>
            <CardActions border>
              <Button className="git-button" colored>
                <a
                  href="https://github.com/FedericoAlmenara/Concert-Junkie"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-code-branch"> Github</i>
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton style={{ color: "#30E8BF" }} name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn20.patchcdn.com/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg) center / cover"
              }}
            >
              Movie Chatter
            </CardTitle>
            <CardText>
              This application provides all the information related to movies
              and television programs. Apart from the information about movies,
              it gives users ability to talk about their favorite movies with
              others.
            </CardText>
            <CardActions border>
              <Button className="git-button" colored>
                <a
                  href="https://github.com/mhamzahhanif/Movie-Project"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-code-branch"> Github</i>
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton style={{ color: "#30E8BF" }} name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.unsplash.com/photo-1521731978332-9e9e714bdd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80) center / cover"
              }}
            >
              RVSL Soccer App
            </CardTitle>
            <CardText>
            An app designed to update an outdated website for local soccer leagues. Allows creation of users, displays teams, rosters, players and fixtures.
            </CardText>
            <CardActions border>
              <Button className="git-button" colored>
                <a
                  href="https://github.com/mhamzahhanif/RVSL-Soccer-Project"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-code-branch"> Github</i>
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton style={{ color: "#30E8BF" }} name="share" />
            </CardMenu>
          </Card>
        </div>
      </div>
    );
  }
}

export default Project;

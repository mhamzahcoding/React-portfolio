import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <div>
          <Grid>
              <Cell col={4}>
              <div style={{textAlign:'center'}}>
                <img
                    src="https://i.imgur.com/eUu4Iit.png"
                    alt="avatar"
                    style={{height:'200px'}}
                />
              </div>
              <h2 style={{paddingTop:'2em'}}>Hamzah Hanif</h2>
              
              <h4 style={{color:'grey'}}>Web Developer</h4>
              
              <hr style={{borderTop:'3px solid #673AB7', width:'50%'}}/>
              
              <p>
              I Just graduated from University of Richmond Coding Bootcamp, seeking for an internship or a full-time opportunity to further enhance my web development skills and apply them in the real-world.
              </p>

              <hr style={{borderTop:'3px solid #673AB7', width:'50%'}}/>

              <h5 style={{fontWeight:'bold'}}>Location:</h5>
              <p>Richmond, VA</p>

              <h5 style={{fontWeight:'bold'}}>Phone</h5>
              <p>804-519-9249</p>

              <h5 style={{fontWeight:'bold'}}>Email</h5>
              <p>mhamzah1993@gmail.com</p>
              </Cell>
              <Cell className="resume-right" col={8}>
                <h2>Education</h2>
                <Education
                startYear={2015}
                endYear={2017}
                schoolName="John Tyler Community College"
                schoolDescription="Associates in General Studies. Graduated 12/2017 "
                />
                <Education
                startYear={2018}
                endYear={2019}
                schoolName="University of Richmond Coding Bootcamp"
                schoolDescription="I recently completed 6 months coding bootcamp from University of Richmond. Graduated 2/2019."
                />
                <hr style={{borderTop:'3px solid #e53935'}}/>

                <h2>Experience</h2>
                <Experience
                startYear={2015}
                endYear={2017}
                companyName="Perfume Palace"
                companyRole="Sales Assistant"
                />
                <Experience
                startYear={2018}
                endYear="Present"
                companyName="Web Developer"
                companyRole="Self Employed"
                />
                <hr style={{borderTop:'3px solid #e53935'}}/>

                <h2>Skills</h2>
                <Skills
                    skill="Javascript"
                    progress={100}
                />
                
                <Skills
                    skill="HTML/CSS"
                    progress={80}
                />

                <Skills
                    skill="React"
                    progress={60}
                />

                <Skills
                    skill="MongoDB"
                    progress={40}
                />

              </Cell>
          </Grid>
      </div>
    )
  }
}

export default Resume;

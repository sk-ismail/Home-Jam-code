import React from 'react'
import Backimg from './Backimg.png'
import bclass from './Banner.module.css'
import vector from './Vector.png'
import EventIcon from '@material-ui/icons/Event';
import simg from './simg.png'
import {Card} from 'react-bootstrap'


function Body() {

    

    return (
        <div className={bclass.main}>
              
            <div className={bclass.bimgdiv}>
                <img src={Backimg} alt="backgroundimage" className={bclass.bimg}></img>
                <img src={simg} alt="backgroundimage" className={bclass.simg}></img>
                <div className={bclass.bannerfade}/>
            </div>
            
            <div className={bclass.container}>
                <h1 className={bclass.text}>
                    Cari Cari
                </h1>
            
            <div>
                <h4 className={bclass.ctext}>
                Live from their sofa to yours. Get closer to your favorite artists, and never miss out.
                </h4>
            </div>
            </div>


            <div className={bclass.circlebody}>
              
    <div>
    <Card className={bclass.circle} style={{ width: '12.5rem',
                      'border-color': 'white',
                      'height':'12.5rem',
                      'background-color': 'rgba(10,11,26,0.2)',
                      'border-radius': '350px',
                      
                      
                      }}>
      <Card.Body className={bclass.circle1body}>
    <Card.Title className={bclass.Title}>
        
    <img src={vector} className={bclass.likebtn} alt="likebtn"></img>
    </Card.Title>
    <Card.Subtitle  className="mb-2 text-muted"> 
    <p className={bclass.Subtitle}> 456</p> </Card.Subtitle>
    
    <Card.Text className={bclass.cardtext}>
    Likes Everyday 
    </Card.Text>
     </Card.Body>
      </Card>
      </div>

<div>
      <Card className={bclass.circle} style={{ width: '12.5rem',
                      'border-color': 'white',
                      'height':'12.5rem',
                      'background-color': 'rgba(10,11,26,0.2)',
                      'border-radius': '350px',
                      
                      
                      }}>
      <Card.Body className={bclass.circle1body}>
    <Card.Title className={bclass.Title}>
        
    <EventIcon/>
    </Card.Title>
    <Card.Subtitle  className="mb-2 text-muted"> 
    <p className={bclass.Subtitle}> 745</p> </Card.Subtitle>
    
    <Card.Text className={bclass.cardtext}>
    Online Events
    </Card.Text>
     </Card.Body>
      </Card>
      </div>

      <div>
      <Card className={bclass.circle} style={{ width: '12.5rem',
                      'border-color': 'white',
                      'height':'12.5rem',
                      'background-color': 'rgba(10,11,26,0.2)',
                      'border-radius': '350px',
                      
                      
                      }}>
      <Card.Body className={bclass.circle1body}>
    <Card.Title className={bclass.Title}>
        
    <EventIcon/>
    </Card.Title>
    <Card.Subtitle  className="mb-2 text-muted"> 
    <p className={bclass.Subtitle}> 840</p> </Card.Subtitle>
    
    <Card.Text className={bclass.cardtext}>
    Celebrities 
    </Card.Text>
     </Card.Body>
      </Card>
      </div>

<div>
      <Card className={bclass.circle} style={{ width: '12.5rem',
                      'border-color': 'white',
                      'height':'12.5rem',
                      'background-color': 'rgba(10,11,26,0.2)',
                      'border-radius': '350px',
                      
                      
                      }}>
      <Card.Body className={bclass.circle1body}>
    <Card.Title className={bclass.Title}>
        
    <EventIcon/>
    </Card.Title>
    <Card.Subtitle  className="mb-2 text-muted"> 
    <p className={bclass.Subtitle}> 976</p> </Card.Subtitle>
    
    <Card.Text className={bclass.cardtext}>
    Likes Everyday 
    </Card.Text>
     </Card.Body>
      </Card>

      </div>

      
          
        
  
            
            </div>

       
        </div>
    )
}

export default Body

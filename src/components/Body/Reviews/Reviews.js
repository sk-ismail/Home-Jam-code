import React from 'react'
import rclass from './Reviews.module.css'
import Line from './Line.png'
import right from './right.png'
import leftarrow from './leftarrow.png'
import {Card} from 'react-bootstrap'
import img from './Img.png'
import usa from './usa.png'
import italy from './italy.png'

function Reviews() {
    return (
        <div className={rclass.main}>
  
    <div className={rclass.text}>

         <div className={rclass.text1}>Reviews 
      <div><img src={Line} alt="line" ></img></div> </div>
        <div className={rclass.text2}>1/12 {"  "} 
       <img src={leftarrow} alt="gsif"></img> 
        {" \t "}
        <img src={right} alt="gsif"></img> 
           </div> 
    </div>


     <div className={rclass.rcards}>

     <div className={rclass.card1}>
     <Card className={rclass.shadow} style={{ width: '25rem',
                      'borderColor': 'rgb(229,175,86)',
                      'borderWidth': '3px',
                      'backgroundColor': 'rgb(10,11,26)',
                      'borderRadius': '12px',
                      'margin':'20px'
                      }}>
      
     <Card.Body>
     <Card.Img variant="top" src={img} className={rclass.icon}/>
    <Card.Title className={rclass.Title}>
        
    Hellen Jummy
    </Card.Title>
    <Card.Subtitle  className="mb-2 text-muted"> 
    <p className={rclass.Subtitle}> <img src={usa} alt="usa"></img> Palo Alto, CA</p> </Card.Subtitle>
    <img src={Line} alt="line" ></img>
    <Card.Text className={rclass.cardtext}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
laoreet adipiscing. 
    </Card.Text>
     </Card.Body>
      </Card>
      </div>

      <div className={rclass.card2}>
      <Card className={rclass.shadow} style={{ width: '25rem',
                      'borderColor': 'rgb(229,175,86)',
                      'borderWidth': '3px',
                      'backgroundColor': 'rgb(10,11,26)',
                      'borderRadius': '12px',
                      'margin':'20px'
                      }}>
      
     <Card.Body>
     <Card.Img variant="top" src={img} className={rclass.icon}/>
    <Card.Title className={rclass.Title}>
        
    Issac Oluwatemilorum
    </Card.Title>
    <Card.Subtitle  className="mb-2 text-muted"> 
    <p className={rclass.Subtitle}> <img src={italy} alt="usa"></img>Palo Alto, CA</p> </Card.Subtitle>
    <img src={Line} alt="line" ></img>
    <Card.Text className={rclass.cardtext}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
laoreet adipiscing. 
    </Card.Text>
    
     </Card.Body>
      </Card>
      </div>

      <div className={rclass.card3}>
      <Card className={rclass.shadow} style={{ width: '25rem',
                      'borderColor': 'rgb(229,175,86)',
                      'borderWidth': '3px',
                      'backgroundColor': 'rgb(10,11,26)',
                      'borderRadius': '12px',
                      'margin':'20px'
                      }}>
      
     <Card.Body>
     <Card.Img variant="top" src={img} className={rclass.icon}/>
    <Card.Title className={rclass.Title}>
        
    Hellen Jummy
    </Card.Title>
    <Card.Subtitle  className="mb-2 text-muted"> 
    <p className={rclass.Subtitle}> <img src={usa} alt="usa"></img>Palo Alto, CA</p> </Card.Subtitle>
    <img src={Line} alt="line" ></img>
    <Card.Text className={rclass.cardtext}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
laoreet adipiscing. 
    </Card.Text>
    
     </Card.Body>
      </Card>
      </div>



     </div>
    




        </div>
    )
}

export default Reviews

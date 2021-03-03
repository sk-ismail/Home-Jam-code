import React from 'react'
import uclass from './UpcomingShows.module.css'
import Line from './Line.png'
import {Card} from 'react-bootstrap'
import img from './Img.png'
import Vector1 from './Vector1.png'
//import save from './save.png'
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import img1 from './Img1.png'
import img2 from './Img2.png'
import img3 from './Img3.png'

function UpcomingShows() {
    return (
        <div className={uclass.main}>
            
            <div className={uclass.text}>

                <div className={uclass.text1}>UpcomingShows 
                <div><img src={Line} alt="line" ></img></div>
                </div>
                <div className={uclass.text2}>View All</div>

            </div>

            <div className={uclass.upcards}>

                <div className={uclass.cardsi}>

            <div className={uclass.card1}>
            <Card  id={uclass.shadow1} className={uclass.shadow} style={{ width: '18rem',
                          'backgroundColor':"rgba(12,7,26,255)",
                          'color':"white",
                          'borderColor': 'rgb(229,175,86)',
                      'borderWidth': '2px',
                          'borderRadius': "10px",
                          'marginRight': "40px",
                          'marginTop': "10px" }}>
           <Card.Img variant="top" src={img} />
           <Card.Body>
               <h6 className={uclass.category}>FOLK</h6>
           <Card.Title className={uclass.Title}>Benny Dayal</Card.Title>
            <Card.Text >
             <p className={uclass.moreinfo}>More Info <img src={Vector1} alt="alt"></img>
             <BookmarksIcon className={uclass.save}/></p>
            </Card.Text>
           </Card.Body>
            </Card>
            </div>

            <div className={uclass.card2}>
            <Card className={uclass.shadow} style={{ width: '18rem',
                          'backgroundColor':"rgba(12,7,26,255)",
                          color:"white",
                          'borderColor': 'rgb(229,175,86)',
                      'borderWidth': '2px',
                          'borderRadius': "10px",
                          'marginRight': "40px",
                          'marginTop': "10px"}}>
           <Card.Img variant="top" src={img1} />
           <Card.Body>
               <h6 className={uclass.category}>Bollywood</h6>
           <Card.Title className={uclass.Title}>Vijay Yesudas</Card.Title>
            <Card.Text >
             <p className={uclass.moreinfo}>More Info <img src={Vector1} alt="alt"></img>
             <BookmarksIcon className={uclass.save}/></p>
            </Card.Text>
           </Card.Body>
            </Card>
            </div>
          
            <div className={uclass.card2}>
            <Card className={uclass.shadow} style={{ width: '18rem',
                          'backgroundColor':"rgba(12,7,26,255)",
                          color:"white",
                          'borderColor': 'rgb(229,175,86)',
                      'borderWidth': '2px',
                          'borderRadius': "10px",
                          'marginRight': "40px",
                          'marginTop': "10px" }}>
           <Card.Img variant="top" src={img2} />
           <Card.Body>
               <h6 className={uclass.category}>FOLK</h6>
           <Card.Title className={uclass.Title}>Andrea Jeremiah</Card.Title>
            <Card.Text >
             <p className={uclass.moreinfo}>More Info <img src={Vector1} alt="alt"></img>
             <BookmarksIcon className={uclass.save}/></p>
            </Card.Text>
           </Card.Body>
            </Card>
            </div>

            <div className={uclass.card3}>

            <Card className={uclass.shadow} style={{ width: '18rem',
                          'backgroundColor':"rgba(12,7,26,255)",
                          color:"white",
                          'borderColor': 'rgb(229,175,86)',
                      'borderWidth': '2px',
                          'borderRadius': "10px",
                          
                          'marginTop': "10px",
                          }}>
           <Card.Img variant="top" src={img3} />
           <Card.Body>
               <h6 className={uclass.category}>FOLK</h6>
           <Card.Title className={uclass.Title}>Shilpa Rao</Card.Title>
            <Card.Text >
             <p className={uclass.moreinfo}>More Info <img src={Vector1} alt="alt"></img>
             <BookmarksIcon className={uclass.save}/></p>
            </Card.Text>
           </Card.Body>
            </Card>
            </div>
            </div>
         
            </div>
        </div>
    )
}

export default UpcomingShows

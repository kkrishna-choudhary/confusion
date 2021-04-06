import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText, } from 'reactstrap';




    function RenderDish({dish}) {
        return(
        <Card >
            <CardImg  src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        ) 
  
      }


      function RenderComments({comments}) { 

        const dcomments = comments.map((comments) => {
            return (
                
                <div key={comments.id}className="col-12   m-1 ">
                    <p >{comments.comment}<br/>--{comments.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
        </p>

                </div>
            );
        });


        return (
            <div className="col-12 col-md-5 m-1">
                    
                        <h5>Comments</h5>
                        {dcomments}
                    </div>
        )
        
      }
    

      

      const  DishDetails = (props) => {

        if ((props.dish === null) || (props.dish === undefined)){ return <div></div> }
        else{
        const { dish } = props;

        

       

        return (
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-5 m-1 ">
                        <RenderDish dish={dish} />
                        
                    </div>

                    <RenderComments comments={dish.comments} />

                    

                </div>
            </div>




        )
        
      }

   
}



export default DishDetails
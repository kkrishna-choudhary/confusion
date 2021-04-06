import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText, } from 'reactstrap';

class dishDetails extends Component {

    constructor(props) {
        super(props);
        

    }

    


    render() {
        if ((this.props.dish === null) || (this.props.dish === undefined)){ return <div></div> }
        else{
        const { dish } = this.props;


        const dcomments = dish.comments.map((comments) => {
            return (
                
                <div className="col-12   m-1 ">
                    <p key={comments.id}>{comments.comment}<br/>--{comments.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
                    </p>

                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-5 m-1 ">

                        <Card >
                            <CardImg  src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>


                    <div className="col-12 col-md-5 m-1">
                        <h5>Comments</h5>
                        {dcomments}
                    </div>

                </div>
            </div>




        )
    }
}
}


export default dishDetails
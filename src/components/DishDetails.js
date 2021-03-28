import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText, } from 'reactstrap';

class DishDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishcomments: this.props.sDish.comments
        }
    }

    


    render() {
        const { sDish } = this.props;
        const { dishcomments } = this.state;


        const dcomments = dishcomments.map((comments) => {
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
                            <CardImg  src={sDish.image} alt={sDish.name} />
                            <CardBody>
                                <CardTitle>{sDish.name}</CardTitle>
                                <CardText>{sDish.description}</CardText>
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


export default DishDetails
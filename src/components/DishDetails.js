import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentFormComponent from './CommentFormComponent';
import { Loading } from './LoadingComponent';




function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1 ">
            <Card >
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )

}


function RenderComments({ comments, addComment, dishId }) {
    if (comments != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (<li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </li>);

                    }
                ) }

                </ul>
                <CommentFormComponent  dishId={dishId} addComment={addComment} />

            </div>
        );

    //     const dcomments = comments.map((comments) => {
    //         return (

    //             <div key={comments.id}className="col-12   m-1 ">
    //                 <p >{comments.comment}<br/>--{comments.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
    //     </p>

    //             </div>
    //         );
    //     });


    //     return (
    //         <div className="col-12 col-md-5 m-1">

    //                     <h5>Comments</h5>
    //                     {dcomments}
    //                 </div>
    //     )

}




const DishDetails = (props) => {

    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {

        const { dish,comments } = props;





        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">


                    <RenderDish dish={dish} />



                    <RenderComments comments={comments} 
                        addComment={props.addComment}
                        dishId={props.dish.id}
                    />



                </div>
            </div>




        )

    }


}



export default DishDetails
import axios from "axios";
import React, { Component } from "react";
import "./style.css"

class GetComponent extends Component{
    constructor(){
        super();
        this.state ={
            posts :[],
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) =>{
            console.log(response.data);
            this.setState({posts:response.data});
        })
        .catch((error) =>{console.log(error)});
    }
    render(){
        const {posts}= this.state;
        return(
            <div className="container">
                
                {posts.map((post)=> (
                    <div className="cards" key={post.id}>
                        <div className="name-card">
                            <h1>NAME</h1>
                            <h3>{post.name}</h3>
                        </div>
                        <div className="email-card">
                            <h1>EMAIL</h1>
                            <h3>{post.email}</h3>
                        </div>
                        <div className="body-card">
                            <h1>BODY</h1>
                            <h3>{post.body}</h3>
                        </div>
                    </div>
                    )
                )}
            </div>

        );
    }
}
export default GetComponent;
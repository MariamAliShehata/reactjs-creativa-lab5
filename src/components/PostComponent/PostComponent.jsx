
import axios from "axios";
import { Component } from "react";
import "./style.css";

class PostComponent extends Component{
    constructor(){
        super();
        this.state ={
            postId: "",
            name: "",
            email: "",
            body: "",
        }
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/comments",this.state)
        .then((response)=>{
            console.log(response.data);
            
        }
    )

    }
    render(){
        return(
            <div className="container">
                <form action="">
                    <div>
                        <label htmlFor="postId">user ID: </label>
                        <input type="text" name="postId" value={this.state.postId} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="name">user name: </label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">user email: </label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="body">body: </label>
                        <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
                    </div>
                    <button type="sumbit" onClick={this.handleSubmit}>Add data </button>
                </form>

            </div>

        )
    }

}
export default PostComponent;
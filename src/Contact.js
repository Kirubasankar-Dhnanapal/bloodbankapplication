import {  withRouter } from "react-router-dom";
import React, { Component } from "react";

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            userId: 1,
            loading: false
        };
    }

    getdata=()=>{
        const {userId} = this.state
        this.setState({
            data: [],
            loading: true
        })
        console.log(userId)
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) =>
            response.json()
        ).then((res) =>
            this.setState({
                result: res,
                loading: false
            })
        )
    }

    componentDidMount() {
        this.getdata()
    }

    btnClick = (e) => {
        const userId = e.target.value
        var postperpage = userId*10
        var currentpageData = postperpage - 10
        var result = this.state.result.slice(currentpageData,postperpage)
        this.setState({
            userId,
            pageData : result
          },()=>{
              this.getdata()
          })
    }

    render() {
        const theData = this.state.pageData ? this.state.pageData.map((response) => {
            return (
                <li key={response.id}>
                    <p>{response.title}</p>
                </li>
            )
        }) : null
        if (this.state.loading) {
            return (
                <h5>Loading...</h5>
            )
        }
        return (
            <div>
                <div>
                    <ul>{theData}</ul>
                </div>
                <Pagenation name='1' onClick={this.btnClick}></Pagenation>
                <Pagenation name='2' onClick={this.btnClick}></Pagenation>
                <Pagenation name='3' onClick={this.btnClick}></Pagenation>
            </div>
        );
    }
}

const Pagenation = (props) => {
    return(
        <button onClick = { props.onClick } value = { props.name } >
            { props.name }
        </button> 
    )
}
export default withRouter(Contacts);

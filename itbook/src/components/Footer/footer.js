import React, { Component } from 'react'
import './footer.css'
class footer extends Component {
    constructor(props){
        super(props);
        this.state = {year : new Date().getFullYear()};
        }


    render() {
        return (
            <div className="footer">
                <ul>
                    <li>&copy; {this.state.year} ITBOOK</li>
                </ul>
            </div>
        )
    }
}

export default footer

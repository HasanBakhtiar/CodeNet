import React, { Component } from 'react';
import User from './User'

export class Users extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    {this.props.users.map(user => (

                <User user={user}/>

                    ))}

                </div>
            </div>
        )
    }
}

export default Users

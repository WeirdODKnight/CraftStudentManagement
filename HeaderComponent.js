import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <div><a href="http://localhost:3000" className="navbar-brand">Craft Employee Management</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent

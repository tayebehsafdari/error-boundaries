import React from "react";

class EventHandlers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null};
        this.handleClick = this.handleClick.bind(this);
        console.log(this);
    }

    handleClick() {
        try {
            // Do something that could throw
        } catch (e) {
            this.setState({error: e});
        }
    }

    render() {
        if (this.state.error) {
            return <h1>Caught an error.</h1>;
        }
        return <button className="btn btn-primary" onClick={this.handleClick}>Click Me</button>;
    }
}

export default EventHandlers;
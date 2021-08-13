import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
        console.log(this);
    }

    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError: ", error);
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch: ", error, errorInfo);
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
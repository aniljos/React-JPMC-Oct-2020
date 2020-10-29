import React, { Component } from 'react';
class AppErrorBoundary extends Component {

    state = {
        hasError: false
    }
    componentDidCatch(error) {

        if (error) {
            this.setState({
                hasError: true
            });
        }
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="alert alert-danger">
                    <p>Something went working...</p>
                </div>
            );
        }
        else {
            return this.props.children;
        }
    }
}
export default AppErrorBoundary;
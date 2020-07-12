import React, { Component } from "react";

class OrderComment extends Component {
    state = {
        comment: ""
    };

    componentDidMount() {
        this.setState({ comment: localStorage.getItem("orderComment") });
    }

    handleInput = event => {
        this.setState({ comment: event.target.value });
        localStorage.setItem("orderComment", event.target.value);
    };

    render() {
        return (
            <React.Fragment>
                <input
                    className="form-control order-comment mb-20"
                    type="text"
                    placeholder={localStorage.getItem("cartSuggestionPlaceholder")}
                    onChange={this.handleInput}
                    value={this.state.comment || ""}
                />
            </React.Fragment>
        );
    }
}

export default OrderComment;

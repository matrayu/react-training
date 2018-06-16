class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }

        this.handleDataChange = this.handleDataChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: "Initial Value"
        });
    }

    render() {
        return (
            <div>
                <Input modification={this.handleDataChange} />
                <br />
                <Output data={this.state.data} />
            </div>
        );
    }

    handleDataChange(value) {
        this.setState({
            data: value
        });
    }

}


class Input extends React.Component {

    constructor(props) {
        super(props);

        this.addedText = this.addedText.bind(this);
    }

    render() {
        return (
            <textarea placeholder="Enter some data" rows="10" cols="75" onChange={this.addedText}></textarea>
        );
    }

    addedText(e) {
        let value = e.target.value;
        this.props.modification(value);
    }

}

/* Stateless component */

const Output = function (props) {

    return (
        <div className="output">{props.data}</div>
    );
}

ReactDOM.render(<Form />, document.getElementById("login"));
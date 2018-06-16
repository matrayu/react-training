class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }

        this.handleDataChange = this.handleDataChange.bind(this);
    }
    /*
        componentDidMount() {
            this.setState({
                data: "Initial Value"
            });
        }
    */


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
            <div>
                <h2>Input</h2>
                <textarea placeholder="Enter some data" rows="10" cols="75" onChange={this.addedText}></textarea>
            </div>
        );
    }

    addedText(e) {
        let value = e.target.value;
        this.props.modification(value);
        // console.log(e.nativeEvent);
    }

}

/* Stateless component */

const Output = function (props) {

    return (
        <div>
            <h2>Output</h2>
            <div className="output">{props.data}</div>
        </div>
    );
}

ReactDOM.render(<Form />, document.getElementById("login"));
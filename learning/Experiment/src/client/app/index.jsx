class Form extends React.Component {

    render() {
        return (
            <div>
                <TextForm />
                <NameList />
            </div>
        );
    }

}

class NameList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            names: [],
            name: ""
        };

        this.onFromSubmit = this.onFromSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    onFromSubmit = (e) => {
        console.log(this.refs);
        const nameList = this.state.names;
        const newName = this.refs.fname.value; 
        /**
         * with out using refs ==>   const newName = this.state.name;
         */
        nameList.push(newName);
        /**
         * or using spread operator
         *  
         *  nameList = [...this.state.names, this.state.name]
         * 
         **/
        this.setState({
            names: nameList
        });
        this.refs.fname.value = ''; // Rest input field to empty string
        e.preventDefault();
    }


    /**
     * Validating name as user enter
     */
    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onFromSubmit} >
                    <input ref="fname" placeholder="name" value={this.state.name} onChange={this.onNameChange} />
                    <input type="submit" value="Submit Name" />
                </form>
                <div>
                    <h2>List of names submittedd</h2>
                    <ul>
                        {this.state.names.map((name, index) => {
                            return (<li key={index}>
                                {name}
                            </li>);
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}


const ListName = function (props) {

    let names = props.names.map((name) => {
        return (<li>{name}</li>);
    });

    return (
        <ul>
            {names}
        </ul>
    );
}


class InputName extends React.Component {
    constructor(props) {
        super(props);

        this.addedText = this.addedText.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Input</h2>
                <input type="text" placeholder="Enter Name" onChange={this.addedText} />
            </div>
        );
    }

    addedText(e) {
        let value = e.target.value;
        this.props.modification(value);
    }
}






class TextForm extends React.Component {

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
            <div className="output">
                <i>{props.data}</i>
            </div>
        </div>
    );
}

ReactDOM.render(<Form />, document.getElementById("login"));
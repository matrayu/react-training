class Avator extends React.Component{
    render(){

        return(<div className="avator">
            <div>
                <img src="./images/avator.png" alt="avator"/>
            </div>
        </div>);
    }
}


class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            login : true
        };
    }



    render(){
        return(<div>
            <Avator/>
            <Login/>
        </div>);
    }
}

class Login extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
            register: false
        }

        this.registerForm = this.registerForm.bind(this);
    }

    registerForm() {
        this.state.register ? this.setState({ register: false }) : this.setState({ register: true });
    }
    render() {
        return (<div>
            <div>
                <label htmlFor="email">Email : </label>
                <input id="email" type="text" placeholder="email" pattern=".+@.+" title="Please follow example@xyz.com pattern" />
                <label htmlFor="pwd">Password : </label>
                <input id="pwd" type="password" placeholder="password" />
                <div className="buttons">
                    <button type="submit">login</button>
                    <button register={this.state.register} onClick={this.registerForm}>Register</button>
                </div>
            </div>
        </div>);
    }
}

class RegisterForm extends React.Component{
    
    render(){
        return(
            <div>
                <label htmlFor="fName">First Name</label>
                <input id="fName" type="text"/>
                <label htmlFor="lName">Last Name</label>
                <input id="lName" type="text"/>
                <label id="loginEmail">Email</label>
                <input id="loginEmail" type="email" />
                <label id="loginPwd">Password</label>
                <input id="loginPwd" type="password" />
                <label id="verifyPwd">Verify Password</label>
                <input id="verifyPwd" type="password" />
                <button value="Register"></button>
            </div>
        );
    }
}

ReactDOM.render(<Form />, document.getElementById("login"));
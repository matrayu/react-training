class Team extends React.Component{

    render(){
        return(<div className="team">
            <div className="image">
                <img src="./images/rcb.jpg" alt="RCB"/>
            </div>
            <div className="votes">
                <div className="up"></div>
                <div className="total">59</div>
                <div className="down"></div>
            </div>
            <div className="teamDetails">
                <div className="shortName">RCB</div>
                <div className="name">Royal Challengers Bangalore</div>
                <div className="description">Team representing Bengaluru, lead by Virat Kohli"</div>
                <div className="slogon">Play Bold</div>
            </div>
        </div>);
    }
}



class TeamList extends React.Component{
    render(){
        return(
            <div>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
            </div>
        );
    }
}


ReactDOM.render(<TeamList />, document.getElementById("content"));
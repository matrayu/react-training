class Team extends React.Component{

    constructor(props){
        super(props);

        this.handleDownVote = this.handleDownVote.bind(this);
        this.handleUpVote = this.handleUpVote.bind(this);
    }


    handleUpVote(){
        this.props.onUpVote(this.props.teamID);
    }

    handleDownVote(){
        this.props.onUpVote(this.props.teamID);
    }


    render(){
        return (<div className="team">
            <div className="image">
                <img src={this.props.img} alt={this.props.team}/>
            </div>
            <div className="votes">
                <div className="up" onClick={this.handleUpVote}></div>
                <div className="total">{this.props.votes}</div>
                <div className="down" onClick={this.handleDownVote}></div>
            </div>
            <div className="teamDetails">
                <div className="shortName">{this.props.team}</div>
                <div className="name">{this.props.name}</div>
                <div className="description">{this.props.description}</div>
                <div className="slogon">{this.props.slogon}</div>
            </div>
        </div>);
    }
}



class TeamList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            iplteams : []
        }
    }


    componentDidMount(){
        this.setState({
            iplteams : Seed.iplteams
        });
    }

    render(){

        // fetching the teams data and converting them into react representable data
        const teams = this.state.iplteams.map((team)=>{
            return <Team key={team.id} teamID={'team '+team.id} name={team.name} team={team.team} description={team.description} slogon={team.slogon} img={team.image} votes={team.votes} onUpVote={this.handleTeamUpVote} onDownVote={this.handleTeamDownVote}/>
        });


        // sorting the teams
        teams.sort((a,b)=>{return b.props.votes-a.props.votes});


        return (<div>{teams}</div>);
    }

    handleTeamUpVote(teamID){
        console.log("Team ID is ==> ",teamID);
    }


    handleTeamDownVote(teamID) {
        console.log("Team ID is ==> ", teamID);
    }


}




ReactDOM.render(<TeamList />, document.getElementById("content"));
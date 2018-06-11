class Team extends React.Component{

    render(){
        return(<div className="team">
            <div className="image">
                <img src={this.props.img} alt={this.props.team}/>
            </div>
            <div className="votes">
                <div className="up"></div>
                <div className="total">{this.props.votes}</div>
                <div className="down"></div>
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
    render(){

        // fetching the teams data and converting them into react representable data
        const teams = Seed.iplteams.map((team)=>{
            return <Team key={team.id} name={team.name} team={team.team} description={team.description} slogon={team.slogon} img={team.image} votes={team.votes}/>
        });


        // sorting the teams
        teams.sort((a,b)=>{return b.props.votes-a.props.votes});


        return (<div>{teams}</div>);
    }
}




ReactDOM.render(<TeamList />, document.getElementById("content"));
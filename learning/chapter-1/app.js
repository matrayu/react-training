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


/*{

    // Hardcoded :: 


class TeamList extends React.Component{
    render(){
        const teams = Seed.iplteams;
        return(
            <div>
                <Team id={teams[0].id} name={teams[0].name} team={teams[0].team} description={teams[0].description} slogon={teams[0].slogon} img={teams[0].image} votes={teams[0].votes}/>
                <Team id={teams[1].id} name={teams[1].name} team={teams[1].team} description={teams[1].description} slogon={teams[1].slogon} img={teams[1].image} votes={teams[1].votes}/>
                <Team id={teams[2].id} name={teams[2].name} team={teams[2].team} description={teams[2].description} slogon={teams[2].slogon} img={teams[2].image} votes={teams[2].votes}/>
                <Team id={teams[3].id} name={teams[3].name} team={teams[3].team} description={teams[3].description} slogon={teams[3].slogon} img={teams[3].image} votes={teams[3].votes}/>
                <Team id={teams[4].id} name={teams[4].name} team={teams[4].team} description={teams[4].description} slogon={teams[4].slogon} img={teams[4].image} votes={teams[4].votes}/>
                <Team id={teams[5].id} name={teams[5].name} team={teams[5].team} description={teams[5].description} slogon={teams[5].slogon} img={teams[5].image} votes={teams[5].votes}/>
                <Team id={teams[6].id} name={teams[6].name} team={teams[6].team} description={teams[6].description} slogon={teams[6].slogon} img={teams[6].image} votes={teams[6].votes}/>
                <Team id={teams[7].id} name={teams[7].name} team={teams[7].team} description={teams[7].description} slogon={teams[7].slogon} img={teams[7].image} votes={teams[7].votes}/>
            </div>
        );
    }
}

}*/


class TeamList extends React.Component{
    render(){

        const teams = Seed.iplteams.map((team)=>{
            return <Team key={team.id} name={team.name} team={team.team} description={team.description} slogon={team.slogon} img={team.image} votes={team.votes}/>
        });

        return teams;
    }
}




ReactDOM.render(<TeamList />, document.getElementById("content"));
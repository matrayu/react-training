window.Seed = (function () {
    function generateRandomVotes() {
        return (Math.random() * 15).toFixed(0);
    }

    const IPLTeams = [{
        id: 1,
        name: "Chennai Super Kings",
        team: "CSK",
        description: "Team representing Chennai lead by MS Dhoni",
        slogon: "Whistle Podu",
        image: "./images/csk.jpg",
        votes: generateRandomVotes()
    }, {
        id: 2,
        name: "Delhi Daredevils",
        team: "DD",
        description: "Team representing Delhi",
        slogon: "Munday Dilli Ke",
        image: "./images/dd.jpg",
        votes: generateRandomVotes()
    }, {
        id: 3,
        name: "Kings XI Punjab",
        team: "KXIP",
        description: "Team representing Mohali, Punjab lead by spinner Ravichandran Ashwin",
        slogon: "We don't buy superstars, we make them",
        image: "./images/kxip.jpg",
        votes: generateRandomVotes()
    }, {
        id: 4,
        name: "Kolkata Night Riders",
        team: "KKR",
        description: "Team representing the city of Kolkata",
        slogon: "Korbo, Lorbo, Jeetbo Re",
        image: "./images/kkr.jpg",
        votes: generateRandomVotes()
    }, {
        id: 5,
        name: "Mumbai Indians",
        team: "MI",
        description: "Team representing the city of Mumbai lead by Rohit Sharma",
        slogon: "Duniya Hila Denge Hum",
        image: "./images/mi.jpg",
        votes: generateRandomVotes()
    }, {
        id: 6,
        name: "Rajasthan Royals",
        team: "RR",
        description: "Team representing the city of pink city of India, Jaipur",
        slogon: "Halla Bol",
        image: "./images/rr.jpg",
        votes: generateRandomVotes()
    }, {
        id: 7,
        name: "Royal Challengers Bangalore",
        team: "RCB",
        description: "Team representing Bengaluru, lead by Virat Kohli",
        slogon: "Play Bold",
        image: "./images/rcb.jpg",
        votes: generateRandomVotes()
    }, {
        id: 8,
        name: "Sunrisers Hyderabad",
        team: "SRH",
        description: "Team representing Hyderabad",
        slogon: "Rise up to every challenge",
        image: "./images/srh.jpg",
        votes: generateRandomVotes()
    }];
});
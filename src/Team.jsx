import { useState } from "react"

export default function Team () {
    const [team, setTeam] = useState(11);

    const handleTeam = () =>{
        const addTeam = team + 1;
        setTeam(addTeam);
    }
    const handleTeamRemove = () => {
        setTeam(team - 1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius : '15px'
    }
    return (
        <div style={teamStyle}>
            <h2>Team :{team}</h2>
            <button onClick={handleTeam}>add</button>
            <button style={teamStyle} onClick={handleTeamRemove}>Remove</button>
        </div>
    )
}
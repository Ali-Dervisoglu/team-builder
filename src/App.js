import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from './components/TeamMember';
import Form from './components/Form';

function App() {
  const teamMember1 = { name: "Steve", email: "steve@gmail.com", role: "Backend Engineer" };
  const teamMember2 = { name: "Alice", email: "alice@yahoo.com", role: "Designer" };
  const [teamMembers, setTeamMembers] = useState([teamMember1, teamMember2]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <Form 
          teamMembers = {teamMembers}
          setTeamMembers = {setTeamMembers}/>
        </div>
        <div className="team-members">
          {teamMembers.map(member => {
            return (
              <TeamMember
                name={member.name}
                email={member.email}
                role={member.role}
              />
            );
          })}
        </div>

      </header>
    </div>
  );
}

export default App;

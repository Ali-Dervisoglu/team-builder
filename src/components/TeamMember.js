import React from 'react';

const TeamMember = props => {
    const name = props.name;
    const email = props.email;
    const role = props.role;

    return (
        <div>
            <h2>{name}</h2>
            <h3>{role}</h3>
            <a href = {`mailto:${email}`}>
                {email}
            </a>
        </div>
    )
}

export default TeamMember;
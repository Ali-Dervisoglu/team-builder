import React, { useState } from 'react';

const Form = props => {
    const initialTeamMember = { name: "", role:"", email: ""};
    const [newTeamMember, setNewTeamMember] = useState(initialTeamMember);

    const handleSubmit = event => {
        event.preventDefault();
        props.setTeamMembers([newTeamMember, ...props.teamMembers])
    }

    const handleChange = event => {
        setNewTeamMember({
            ...newTeamMember,
            [event.target.name]: event.target.value

        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                value={newTeamMember.name}
            />
            <input
                type="text"
                name="role"
                placeholder="role"
                onChange={handleChange}
                value={newTeamMember.role}
            />
            <input
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
                value={newTeamMember.email}
            />
            <button type="submit">Add new Member    </button>
        </form>

    )
}

export default Form;
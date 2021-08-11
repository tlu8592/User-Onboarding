import React from 'react';

export default function UserInfo(props) {
    const { userDetails } = props;

    return(
        <div>
            <h3>{`${userDetails.first_name} ${userDetails.last_name}`}</h3>
            <p>Email: {userDetails.email}</p>
        </div>
    )
}
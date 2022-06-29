import React from 'react';

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {
    return (
        <div style={{ width: '50rem' }}>
            <div>Profile</div>
            <ul variant="flush">
                <li>
                    <strong>First Name: </strong> {props.graphData.givenName}
                </li>
                <li>
                    <strong>Last Name: </strong> {props.graphData.surname}
                </li>
                <li>
                    <strong>Email: </strong> {props.graphData.userPrincipalName}
                </li>
                <li>
                    <strong>Id: </strong> {props.graphData.id}
                </li>
            </ul>
        </div>
    );
};

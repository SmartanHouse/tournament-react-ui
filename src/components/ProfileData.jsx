import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {
    return (
        <Card style={{ width: '50rem' }}>
            <Card.Header>Profile</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <strong>First Name: </strong> {props.graphData.givenName}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Last Name: </strong> {props.graphData.surname}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Email: </strong> {props.graphData.userPrincipalName}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Id: </strong> {props.graphData.id}
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

import { useMsal } from '@azure/msal-react';
import { useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { loginRequest } from '../config/authConfig';
import { callMsGraph } from '../config/graph';
import { ProfileData } from './ProfileData';

export const ProfileContent = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    const [fetching, setFetching] = useState(false);

    const name = accounts[0] && accounts[0].name;

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    async function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0],
        };
        setFetching(true);

        await delay(5000);

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance
            .acquireTokenSilent(request)
            .then((response) => {
                callMsGraph(response.accessToken).then((response) =>
                    setGraphData(response)
                );
            })
            .catch((e) => {
                instance.acquireTokenPopup(request).then((response) => {
                    callMsGraph(response.accessToken).then((response) =>
                        setGraphData(response)
                    );
                });
            });
        setFetching(false);
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h5 className="card-title">Welcome {name}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {fetching && (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </Spinner>
                        )}
                        {graphData && <ProfileData graphData={graphData} />}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {!graphData && !fetching && (
                            <Button
                                variant="light"
                                onClick={RequestProfileData}
                            >
                                Show Profile Information
                            </Button>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

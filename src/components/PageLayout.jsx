import { useIsAuthenticated } from '@azure/msal-react';
import { Navbar } from 'react-bootstrap';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    Smartanz Tournament App
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            {props.children}
        </>
    );
};

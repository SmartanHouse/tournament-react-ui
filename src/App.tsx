import './App.css';
import { PageLayout } from './components/PageLayout';
import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate,
} from '@azure/msal-react';
import { ProfileContent } from './components/ProfileContent';

function App() {
    return (
        <>
            <PageLayout>
                <AuthenticatedTemplate>
                    <ProfileContent />
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate></UnauthenticatedTemplate>
            </PageLayout>
        </>
    );
}

export default App;

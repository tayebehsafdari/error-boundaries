import './App.scss';
import {Container} from 'react-bootstrap';
import ErrorBoundary from "./ErrorBoundary";
import MyWidget from "./MyWidget";
import EventHandlers from "./EventHandlers";

function App() {
    return (
        <div className="App my-5">
            <Container>
                <ErrorBoundary>
                    <MyWidget/>
                </ErrorBoundary>
                <EventHandlers/>
            </Container>
        </div>
    );
}

export default App;

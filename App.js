import { ChatEngine } from 'react-chat-engine';

import './App.css';

import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="4a2ba288-ec1b-4248-af1d-912b2b9816f6"
        userName="AlphaBot"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
         />
    )
}

export default App;
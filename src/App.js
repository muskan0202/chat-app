import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const App= () => {
    if(!localStorage.getItem('username'))
    return <LoginForm />
    return(
        <ChatEngine
            height="100vh"
            projectID="79a3a2ba-453f-408a-8565-4af07f5be593"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    );
}


export default App;
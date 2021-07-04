import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import Activity from './images/Activity.svg';
import Chatlogo from './images/Chat.svg';
import Calendar from './images/Calendar.svg';
import ActivityActive from './images/ActivityActive.svg';
import ChatActive from './images/ChatActiveIcon.svg';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const App = () => {
  // if (!localStorage.getItem('username')) return <LoginForm />;

  return (<div style={{ display: "flex" }}>

    <LeftNav />
    <div style={{ flexGrow: 1 }}>
      <ChatEngine
        height="100vh"
        projectID="8e67d73f-6c6d-46f1-a70c-3ad393607369"
        userName="riamonga"
        userSecret="12345"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  </div>
  );
};

const Apps = () => {
  // if (!localStorage.getItem('username')) return <LoginForm />;

  return (<div style={{ display: "flex" }}>
    <h1>hello</h1>
    <h1>abc</h1>
  </div>
  );
};

// infinite scroll, logout, more customizations...
const LeftNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link" href="#"><img style={{margin: "10px"}}src={Activity} width="25px"></img></a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#"><img style={{margin: "3px"}} src={ChatActive} width="32px"></img></a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#"><img style={{margin: "9px"}} src={Calendar} width="30px"></img></a>
      </li>
    </ul>
  </nav>
)
export default App;

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

import Activity from './images/Activity.svg';
import Calendar from './images/Calendar.svg';
import ChatActive from './images/ChatActiveIcon.svg';

const projectID = '8e67d73f-6c6d-46f1-a70c-3ad393607369';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (<div style={{ display: "flex" }}>

    <LeftNav />
    <div style={{ flexGrow: 1 }}>
    <SearchIcon />
      <ChatEngine
        height="90vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  </div>
  );
};

// infinite scroll, logout, more customizations...
const LeftNav = () => (
  <nav>
    <ul className="nav">
      <li className="spacer">
      </li>
      <li>
        <a href="#"><img style={{margin: "10px"}} src={Activity} width="25px"></img></a>
      </li>
      <li>
        <a href="#"><img style={{margin: "3px"}} src={ChatActive} width="32px"></img></a>
      </li>
      <li>
        <a href="#"><img style={{margin: "9px"}} src={Calendar} width="30px"></img></a>
      </li>
    </ul>
  </nav>
)

const SearchIcon = () => {
  return (
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </form>
  )
}
export default App;

import LoginPage from './Components/LoginPage/LoginPage.js';
import Dock from './Components/Dock/Dock.js';
import io from "socket.io-client";
import Chats from './Components/Dock/Chats/Chats.js';

const socket = io.connect("http://localhost:8080/")

function App() {
  return(
    <div>
      <Dock socket={socket}/>
    </div>
  );
}

export default App;

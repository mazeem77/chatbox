import "./Dock.css"
import {Helmet} from "react-helmet";
import DashBoard from "./DashBoard/DashBoard";
import Chats from "./Chats/Chats.js"
import Notifications from "./Notifications/Notification";
import Settings from "./Settings/Settings";
import { useState } from 'react'

function Dock(){
    const [dashBoardisOpen, setDashBoardopen] = useState(false);
    const [chatisOpen, setChatopen] = useState(false);
    const [notificationisOpen, setNotificationsopen] = useState(false);
    const [settingisOpen, setSettingsopen] = useState(false);

    // For DashBoard Handling
    function openDashBoard(){
        setDashBoardopen(true);
    }

    function closeDashBoard(){
        setDashBoardopen(false);
    }

    //For Chat Handling
    function openChats(){
        setChatopen(true);
    }

    function closeChats(){
        setChatopen(false);
    }

    //For Notifications Handling
    function openNotifications(){
        setNotificationsopen(true);
    }

    function closeNotifications(){
        setNotificationsopen(false);
    }

    //For Settings Handling
    function openSettings(){
        setSettingsopen(true);
    }

    function closeSettings(){
        setSettingsopen(false);
    }

    function active(e){
        if(document.getElementById(e).className == 'list'){
            for(let i = 1; i <= 4; i++){
                document.getElementById(i).className = 'list';
            }
            document.getElementById("yourImage").style.visibility = 'hidden'
            document.getElementById(e).className = 'listActive';
        }
        switch(e){
            case 1: {
                openDashBoard();
                closeChats();
                closeNotifications();
                closeSettings();
                break;
            }

            case 2: {
                closeDashBoard();
                openChats();
                closeNotifications();
                closeSettings();
                break;
            }

            case 3: {
                closeDashBoard();
                closeChats();
                openNotifications();
                closeSettings();
                break;
            }

            case 4: {
                closeDashBoard();
                closeChats();
                closeNotifications();
                openSettings();
                break;
            }
        }
    }

    return(
        <div>
            <div><img id="yourImage" src="../logo192.png" /></div>
            <div className="dock">
            <ul>
                <li className="list" id="1" onClick={() => active(1)}>
                    <a href="#">
                        <div className="indicator" id="indicator1"></div>
                        <span className="icon"><ion-icon name="apps-outline"></ion-icon></span>
                        <span className="text">DashBoard</span>  
                    </a>       
                </li>

                <li className="list" id="2" onClick={() => active(2)}>
                    <a href="#">
                        <div className="indicator" id="indicator2"></div> 
                        <span className="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                        <span className="text">Chats</span>
                    </a>        
                </li>

                <li className="list" id="3" onClick={() => active(3)}>
                    <a href="#">
                        <div className="indicator" id="indicator3"></div>
                        <span className="icon"><ion-icon name="notifications-outline"></ion-icon></span>
                        <span className="text">Notifications</span>
                    </a>                     
                </li>

                <li className="list" id="4" onClick={() => active(4)}>
                    <a href="#">
                        <div className="indicator" id="indicator4"></div>
                        <span className="icon"><ion-icon name="cog-outline"></ion-icon></span>
                        <span className="text">Settings</span>
                    </a>                             
                </li>
            </ul>
            <Helmet>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            </Helmet>
        </div>
        
        <div>
            {chatisOpen && <Chats />}
            {dashBoardisOpen && <DashBoard />}
            {notificationisOpen && <Notifications />}
            {settingisOpen && <Settings />}
        </div> 
    </div>
    );
}

export default Dock;
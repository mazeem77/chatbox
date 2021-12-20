import '../Chats/Chats.css'
import Dock from '../Dock.js';

function Chats(){
    return(
        <div className='outerBox'>
            <div className="leftColumn">
                <div className="upperLeft">
                    <img src="https://www.kindpng.com/picc/m/690-6904538_men-profile-icon-png-image-free-download-searchpng.png" alt="" />
                    <p className="userName">Muhammad Azeem</p>
                </div>
                <div className="lowerLeft">
                    <p className="title">About:</p>
                    <p className="details">Too lazy</p>
                    <p className="title">Phone Number:</p>
                    <p className="details">0314114714</p>
                    <p className="title">Email:</p>
                    <p className="details">mazeem8856@gmail.com</p>
                    <p className="title">Status:</p>
                    <p className="details">Single</p>
                </div>
            </div>
            <div className="centerColumn">
                <div className="messageBox">
                    <div className="messageText">
                        <input type="text" placeholder="Write Message..." />
                    </div>
                    <div className="sendButton">
                        <button type="submit"><ion-icon size="large" name="send"></ion-icon></button>
                    </div>
                </div>
            </div>
            <div className="rightColumn">
            </div>
        </div>
    );
}

export default Chats;
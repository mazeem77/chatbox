import '../DashBoard/DashBoard.css'
import { UserContext } from '../../../userContext';
import {useContext} from "react"

function DashBoard(){

    const {user, setUser} = useContext(UserContext);

    return(
        <div className='bigBox'>
            <div className="column">
                <div>{user}</div>
            </div>
        </div>
    );
}

export default DashBoard;
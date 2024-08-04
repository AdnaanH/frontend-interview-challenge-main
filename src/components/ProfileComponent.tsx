import avatar from '../assets/images/avatar.png'

const ProfileComponent = () => {
    return ( 
        <div className="profile">
            <div className="profile-info">
                <img src={avatar} alt="" />
                <div>
                    <p>Report for</p>
                    <h1>Stacy Castillo</h1>
                </div> 
            </div>            
            <div className="timelines">
                <ul>
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul>
            </div>
        </div>
     );
}
 
export default ProfileComponent;
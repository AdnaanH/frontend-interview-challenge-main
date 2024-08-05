import avatar from '../assets/images/avatar.png'

type ProfileComponentProps = {
    selectedTimeframe: "daily" | "weekly" | "monthly";
    setSelectedTimeframe: React.Dispatch<React.SetStateAction<"daily" | "weekly" | "monthly">>;
  };
  
  const ProfileComponent: React.FC<ProfileComponentProps> = ({ selectedTimeframe, setSelectedTimeframe }) => {
    return (
      <div className="profile">
        <div className="profile-info">
          <img src={avatar} alt="" />
          <div className="profile-desc">
            <p>Report for</p>
            <h1>Stacy Castillo</h1>
          </div>
        </div>
        <div className="timelines">
          <ul>
            {["daily", "weekly", "monthly"].map((timeframe) => (
              <li
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe as "daily" | "weekly" | "monthly")}
                style={{
                  fontWeight: selectedTimeframe === timeframe ? "bold" : "normal",
                  cursor: "pointer",
                }}
              >
                {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ProfileComponent;
  
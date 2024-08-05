import { useState } from "react";
import CardsComponent from "./CardsComponent";
import ProfileComponent from "./ProfileComponent";

const ComponentManager = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<"daily" | "weekly" | "monthly">("daily");

  return (
    <div className="wrapper">
      <ProfileComponent selectedTimeframe={selectedTimeframe} setSelectedTimeframe={setSelectedTimeframe} />
      <CardsComponent selectedTimeframe={selectedTimeframe} />
    </div>
  );
};

export default ComponentManager;

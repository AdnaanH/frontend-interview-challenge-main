import CardComponent from "./CardComponent";
import job from "../assets/images/job.svg"

const CardsComponent = () => {
    return ( 
        <div className="cards">
            <CardComponent title="Job" currTimeframe={10} prevTimeframe={8} bgColor="#000000" image={job}/>
            <CardComponent title="Job" currTimeframe={10} prevTimeframe={8} bgColor="#000000" image={job}/>
            <CardComponent title="Job" currTimeframe={10} prevTimeframe={8} bgColor="#000000" image={job}/>
            <CardComponent title="Job" currTimeframe={10} prevTimeframe={8} bgColor="#000000" image={job}/>
            <CardComponent title="Job" currTimeframe={10} prevTimeframe={8} bgColor="#000000" image={job}/>
            <CardComponent title="Job" currTimeframe={10} prevTimeframe={8} bgColor="#000000" image={job}/>
        </div>
     );
}
 
export default CardsComponent;
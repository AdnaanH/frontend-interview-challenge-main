import CardComponent from "./CardComponent";
import jobImage from "../assets/images/job.svg"
import funImage from "../assets/images/fun.svg"
import learningImage from "../assets/images/learning.svg"
import sportImage from "../assets/images/sport.svg"
import emailsImage from "../assets/images/emails.svg"
import healthImage from "../assets/images/health.svg"
import {timeframes} from "../data/timeframes"

type TitleType = 'job' | 'fun' | 'learning' | 'sport' | 'emails' | 'health';


const titleToColor: Record<TitleType, string> = {
    job: "hsl(15, 100%, 70%)",
    fun: "hsl(195, 74%, 62%)",
    learning: "hsl(348, 100%, 68%)", 
    sport: "hsl(145, 58%, 55%)", 
    emails: "hsl(264, 64%, 52%)", 
    health: "hsl(43, 84%, 65%)", 
  };
  
  const titleToImage: Record<TitleType, string> = {
    job: jobImage,
    fun: funImage,
    learning: learningImage,
    sport: sportImage,
    emails: emailsImage,
    health: healthImage,
  };
  


const CardsComponent = () => {
    return ( 
        <div className="cards">
            {timeframes.map((item, index) => {
                const title = item.title as TitleType;
                
                return (
                <CardComponent
                    key={index}
                    title={title}
                    currTimeframe={item.timeframes.daily.current}
                    prevTimeframe={item.timeframes.daily.previous}
                    bgColor={titleToColor[title]} 
                    image={titleToImage[title]}
                />
                );
            })}
          </div>
     );
}
 
export default CardsComponent;
import menu from '../assets/images/menu.svg'

const CardComponent = ({title, currTimeframe, prevTimeframe, image, bgColor }) => {
    return ( 
        <div className="card" style={{backgroundColor: bgColor}}>
            <div className="card-icon" style={{backgroundImage: image}}>

            </div>
            <div className="card-desc">
                <div className="card-title">
                    <span>{title}</span>
                    <img src={menu} alt="" />
                </div>
                <div className="current">
                    <h1>{currTimeframe}</h1>
                    <h2>Completed</h2>
                </div>
                <div className="previous">
                    <span>Last week: {prevTimeframe} Completed</span>
                </div>
            </div>
        </div> 
    );
}
 
export default CardComponent;
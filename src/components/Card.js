import React from "react"
import Dropper from '../images/dropper.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src={require('../images/' + props.imageUrl + '.png')} className="card--image" alt={props.description}/>
            <div className="card--info">
                <div className="info--header">
                    <img src={Dropper} className="card--dropper"/>
                    <span className="location">{props.location.toUpperCase()}</span>
                    <span><a className="link" href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <h3 className="card--dates">{props.startDate} - {props.endDate}</h3>
                <p className="info--description">{props.description}</p>
            </div>
        </div>
    )
}

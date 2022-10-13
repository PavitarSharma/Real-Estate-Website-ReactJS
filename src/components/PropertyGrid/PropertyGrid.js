import React from 'react'
import "./PropertyGrid.css"
import { AiOutlineHeart } from "react-icons/ai"
import { IoBedOutline } from "react-icons/io5"
import { BiBath } from "react-icons/bi"
import { WiStars } from "react-icons/wi"
import { TbSquareRotated } from "react-icons/tb"

const PropertyGrid = ({ property }) => {
    return (
        <section>

            <div className="card" key={property.id}>
                <div className="card__header">
                    <img src={property.image} alt={property.title} />
                </div>

                <div className="card__popular">
                    <WiStars />
                    <span>POPULARS</span>
                </div>

                <div className="card__body">
                    <div className="card__price">
                        <p>${property.price} <span>/month</span> </p>
                        <div className="card__like">
                            <AiOutlineHeart size={20} color="#0a5ef9" />
                        </div>
                    </div>

                    <div className="card__title">
                        <h4>{property.title}</h4>
                        <p>{property.address}</p>
                    </div>

                    <div className="card__area">
                        <div className="card__rest">
                            <IoBedOutline size={22} color="#6899f3" />
                            <span>{property.beds} beds</span>
                        </div>

                        <div className="card__rest">
                            <BiBath size={22} color="#6899f3" />
                            <span>{property.bathrooms} Bathrooms</span>
                        </div>

                        <div className="card__rest">
                            <TbSquareRotated size={22} color="#6899f3" />
                            <span className="card__area">{property.squareFit} m <span className="card__square">2</span></span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PropertyGrid

//https://codepen.io/eyupucmaz/pen/oNbeXOb
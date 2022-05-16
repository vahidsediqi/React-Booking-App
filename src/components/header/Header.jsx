import React from 'react'
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCalendarDay, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
export const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} /> 
                        <span>Stays</span>             
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} /> 
                        <span>Flights</span>             
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} /> 
                        <span>Car Rental</span>             
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} /> 
                        <span>Atrractions</span>             
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} /> 
                        <span>Airport Taxis</span>             
                    </div>
                </div>
                <h1 className='headerTitle'>VS Bookking App</h1>
                <p className="headerDesc">
                    Get reworded for your travel unlock the instant savings of 10% for making a free booking account
                </p>
                <button className="headerBtn">Login / Regiter</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                       <FontAwesomeIcon icon={faBed} /> 
                       <input type="text" name="" className="headerSearchInput" placeholder='Where are your you going?'/>
                    </div>
                    <div className="headerSearchItem">
                       <FontAwesomeIcon icon={faCalendarDay} /> 
                        <span className='headerSearchText'>Date to Date</span>
                    </div>
                    <div className="headerSearchItem">
                       <FontAwesomeIcon icon={faBed} /> 
                       <span>2 adults 2 childern 1 room</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

import {useState} from "react";

export default function Details(props) {
    console.log(props.passing)

    console.log(props.check, "from state")
    return ( <> {
        props.check
            ? <div className="main-container-page">
                    <div className='constainer-detail-page'>

                        <div className="card details-card">
                            <div className="child">{props.passing.name}</div>
                            <div className="child">
                                <h3>Contact</h3>
                                <p>{props.passing.email}</p>
                            </div>
                            <div className="child">
                                <h3>City</h3>
                                <p>{props.passing.address.city}</p>
                            </div>
                            <div className="child">
                                <h3>Street</h3>
                                <p>{props.passing.address.street}</p>
                            </div>
                            <div className="child">
                                <button className="button" onClick={() => props.delet(false)}>Heid details</button>
                            </div>
                        </div>

                        <div className="description-container">
                            <details open>
                                <summary className="summary">Description</summary>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet placeat quo
                                    nulla quam, deleniti fuga adipisci quidem, perferendis aut rem voluptates
                                    doloremque nihil ipsam aliquid commodi ipsum qui nisi similique?</p>
                            </details>

                            <div className="sub-description-container">
                                <div className="sub">
                                    <h3>Contact Person :</h3>
                                    <p>{props.passing.username}</p>
                                    <h3>Designation :</h3>
                                    <p>{props.passing.name}</p>
                                    <h3>Email :</h3>
                                    <p>{props.passing.email}</p>
                                    <h3>Phone No :</h3>
                                    <p>{props.passing.phone}</p>
                                  
                                </div>
                                <div className="sub">
                                    <h3>Address :</h3>
                                    <p>{props.passing.address.city} {props.passing.address.street} {props.passing.address.zipcode}</p>
                                    <h3>City :</h3>
                                    <p>{props.passing.address.city}</p>
                                    <h3>zipcode :</h3>
                                    <p>{props.passing.address.street}</p>
                                    <h3>Country :</h3>
                                    <p>India</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            : null
    } </>
    )
}

import logo from '../../assets/marquis_logo_short.png'
import './companyinfo.css'
import React from 'react'

const CompanyInfo = ()=>{
    return (
        <div className="companyInfo">
            <img src={logo} className="logo" height="62px" alt="Logo"/>
            <h3 className="name">MARQUIS MARKET SOLUTIONS</h3>
            <p className="address">604, Holloway Rd<br/> Islington, London<br/> N193PH<br/> United Kingdom<br/> +447411526698</p>
        </div>
    )
}

export default CompanyInfo;

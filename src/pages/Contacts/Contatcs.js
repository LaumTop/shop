import React from 'react';
import Navbar from '../Navbar/navbar';
import './Contatcs.css';

const Contacts = () => {
    return (
        <>
            <Navbar/>
            <div className="Shape_Description">
                <div className="Shape_Description_Title">
                    Nepieciešama palīdzība?
                </div>
                <div className="Shape_Description_Description">
                    Šajā lapā jūs varēstiet saņem palkīdzību no mūsu aģemtiem, izvēlieties Jums labāko variantu...
                    Mēs mēģināsim jums atbildēt maksimāli atri, cik vien tas ir iespējams.
                    Mūsu palīdzības centrs strādā <span style={{ fontWeight: 'bold' }}>katru dienu</span> no <span style={{fontWeight: 'bold'}}> 8.00 līdz 22.00</span> pēc latvijas pulkstens</div>
            </div>
        </>
    );
};

export default Contacts;

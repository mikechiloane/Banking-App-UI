import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grid-one-item capitec-branded-card grid-common grid-c1">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Cards</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c1-content">
            <p >Balance</p>
            <div className="lg-value">R 22,000</div>
            <div className="card-wrapper">
                <span className="card-pin-hidden gold-text">**** **** **** </span>
                <span className="gold-text">1234</span>
            </div>
            <div className="card-logo-wrapper">
                <div>
                    <p className="text text-silver-v1 expiry-text">Expires</p>
                    <p className="text text-sm text-white">12/30</p>
                </div>
                <div className="card-logo">
                    <div className="logo-shape1"></div>
                    <div className="logo-shape2"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards

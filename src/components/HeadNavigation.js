import React from "react"; //import class react dr React nya sndiri
import "../assets/HeadNavigation.css";

class HeadNavigation extends React.Component { //nama class harus sama dgn nama file
    render() {
        return (
            <div>
                <h3 className="title">Fery</h3>
            </div>
            //div hanya boleh 1 kali, krn dibuat per item-item
        )
    }
}
export default HeadNavigation;
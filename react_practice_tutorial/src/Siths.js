import React, { Component } from "react";
import SithLord from "./SithLord";

class Siths extends Component {
    render() {
        const { title, lords } = this.props;
        const sithList = lords.map((sith) => {
            return(
                <SithLord key={sith.uid} name={sith.name} rank={sith.rank} skillLevel={sith.skillLevel} />
            );
        });
        return(
            <div className="sith-list">
                <h2>{title}</h2>
                <ul>
                    {sithList}
                </ul>
            </div>
        )
    }
}

export default Siths;

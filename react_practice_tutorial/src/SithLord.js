import React, { Component } from "react";


class SithLord extends Component {
    render() {
        const { name, rank, skillLevel } = this.props;
        return(
            <li>{name} is a {rank} level Sith lord with lightsaber skill rating of {skillLevel}</li>
        );
    }
}

export default SithLord;

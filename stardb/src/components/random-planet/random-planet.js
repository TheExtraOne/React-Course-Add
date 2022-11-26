import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-services';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  state = {
    planet: {},
  };

  onPlanetLoaded = (planet) => {
    this.setState({planet})
  }

  updatePlanet() {
    const id = 12;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
  };

  render() {
    const { planet: {id, name, population, rotation, diameter} } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotation}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
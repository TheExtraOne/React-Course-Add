export default class SwapIpiService {
  async getResourse (url) {
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error(`Could not fetch ${url}, recieve ${request.status}`);
    }
    return await request.json();
  }

  async getAllPeople() {
    const result = await this.getResourse(`https://swapi.dev/api/people/`);
    return result.results.map(this.transformPerson);
  }
  async getPerson(id) {
    const result = await this.getResourse(`https://swapi.dev/api/people/${id}/`);
    return this.transformPerson(result);
  }
  async getAllPlanets() {
    const result = await this.getResourse(`https://swapi.dev/api/planets/`);
    return result.results.map(this.transformPlanet);
  }
  async getPlanet(id) {
    const result = await this.getResourse(`https://swapi.dev/api/planets/${id}/`);
    return this.transformPlanet(result);
  }
  async getAllStarShips() {
    const result = await this.getResourse(`https://swapi.dev/api/starships/`);
    return result.results.map(this.transformStarship);
  }
  async getStarship(id) {
    const result = await this.getResourse(`https://swapi.dev/api/starships/${id}/`);
    return this.transformStarship(result);
  }

  extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  transformPlanet(planet) {
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      rotation: planet.rotation_period,
      diameter: planet.diameter,
    }
  }
  transformStarship(starship) {
    return {
      id: this.extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  transformPerson(person) {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}

// const swapi = new SwapIpiService();
// swapi.getAllPeople()
//   .then((arr) => arr.forEach((element) => console.log(element.name)));
// swapi.getPerson(2)
//   .then((person) => console.log(person.name));


export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
    
        const rel = await fetch(`${this._apiBase}${url}`);
    
        if (!rel.ok) {
           throw new Error (`Could not fetch ${url}, received ${rel.status}`) 
        }
    
        const body = await rel.json();
        
        return body;
    }
    async getAllPeople() {
        const res = await this.getResource('/people/')
        return res.results;
    }

    getPeople(id) {
        return this.getResource(`/people/${id}/`)
    }
    
    async getAllPlanet() {
        const res = await this.getResource('/planets/')
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = this.getResource('/starships/')
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`)
    }

    _transformPlanet(planet) {
        const idRedExp = /\/([0-9]*)\/$/;
        const id = planet.url.match(idRedExp)[1];

        return {
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
          }
    }
};
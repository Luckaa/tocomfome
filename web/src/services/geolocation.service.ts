import axios from 'axios';
import querystring from 'querystring';

class GeolocationService {
    private baseAPI = `https://api.opencagedata.com/geocode/v1/json`;

    async getStreetFromCoordenates(lat: number, long: number) {
        const query = `${lat},${long}`;
        const key = 'b698770b62aa44798e389aac0dbd3f1c';
        const params = { q: query, key }
        const queryParams = querystring.stringify(params);

        const data = await axios.get(`${this.baseAPI}?${queryParams}`).then(response => response.data);
        const { results } = data;
        const [firstResult] = results;
        const streetName = firstResult.components.road;
        return streetName ;
    }
}

export default new GeolocationService();
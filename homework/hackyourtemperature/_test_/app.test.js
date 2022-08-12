import request from 'supertest';
import app from '../app.js';
import fetchApi from '../helper/fetchApi';

describe('GET /', () => {
  describe('load page', () => {
    test('status code for get method should be 200 ', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
    });
  });
});
describe('POST /weather', () => {
  describe('given valid city name', () => {
    test('should send response headers with HTML template ', async () => {
      const data = await fetchApi('Amsterdam');
      // console.log(data.name);
      const response = await request(app)
        .post('/weather')
        .send({ cityName: data.name });
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('html'),
      );
    });
  });
  describe('given invalid city name', () => {
    test('status code for post method should be 404 ', async () => {
      const data = await fetchApi('swaida');
      const response = await request(app).post('/weather').send(data);
      expect(response.status).toBe(404);
      console.log(response);
    });
  });
});

const request = require('supertest')
const app = require('../src/app');

describe('GET Endpoints', () => {

	it('Accepts GET request to home directory', async () => {
	  	const response = await request(app).get("/");
	    expect(response.statusCode).toBe(200);
	    expect(response.text).toBe('Server running');
	})
});

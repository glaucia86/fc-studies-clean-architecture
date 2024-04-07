/**
 * file: src/infrastructure/api/__tests__/customer.e2e.spec.ts
 * description: file responsible for external API integration with Express.js
 * data: 04/02/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { app, sequelize } from "../express";
import request from 'supertest';

describe('E2E test for: Customer', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should create a customer', async () => {
    const response = await request(app)
      .post('/customer')
      .send({
        name: 'Glaucia',
        address: {
          street: 'Rua 1',
          city: 'Rio de Janeiro',
          number: 123,
          zip: '12345-678'
        },
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Glaucia');
    expect(response.body.address.street).toBe('Rua 1');
    expect(response.body.address.city).toBe('Rio de Janeiro');
    expect(response.body.address.number).toBe(123);
    expect(response.body.address.zip).toBe('12345-678');
  });

  it('should not create a customer', async () => {
    const response = await request(app)
      .post('/customer')
      .send({
        name: 'Glaucia',
      });

    expect(response.status).toBe(500);
  });

  it('should list all customers', async() => {
    const response = await request(app)
      .post('/customer')
      .send({
        name: 'Glaucia',
        address: {
          street: 'Rua 1',
          city: 'Rio de Janeiro',
          number: 123,
          zip: '12345-678'
        },
      });
    
    expect(response.status).toBe(200);

    const response2 = await request(app)
      .post('/customer')
      .send({
        name: 'John',
        address: {
          street: 'Rua 2',
          city: 'São Paulo',
          number: 456,
          zip: '86543-678'
        },
      });

    expect(response2.status).toBe(200);

    const listResponse = await request(app).get('/customer').send();
    
    expect(listResponse.status).toBe(200);
    expect(listResponse.body.customers.length).toBe(2);  

    const customer = listResponse.body.customers[0];
    expect(customer.name).toBe('Glaucia');
    expect(customer.address.street).toBe('Rua 1');

    const customer2 = listResponse.body.customers[1];
    expect(customer2.name).toBe('John');
    expect(customer2.address.street).toBe('Rua 2');
  });
});
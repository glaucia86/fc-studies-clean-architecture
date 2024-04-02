/**
 * file: src/infrastructure/api/__tests__/customer.e2e.spec.ts
 * description: file responsible for external API integration with Express.js
 * data: 04/02/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import e from "express";
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

});
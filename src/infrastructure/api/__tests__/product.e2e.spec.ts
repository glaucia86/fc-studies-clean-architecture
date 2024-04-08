/**
 * file: src/infrastructure/api/__tests__/product.e2e.spec.ts
 * description: file responsible for external API integration with Express.js
 * data: 04/07/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import request from 'supertest';
import { app, sequelize } from "../express";

describe('E2E test for: Product', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should create a product', async () => {
    const response = await request(app).post('/products').send({
      type: 'a',
      name: 'Mouse',
      price: 10
    });

    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(expect.any(String));
    expect(response.body.name).toBe('Mouse');
    expect(response.body.price).toBe(10);
  });

  it('should not create a product', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        name: '',
        price: 10
      });

    expect(response.status).toEqual(500);
  });

  it("should list all products", async () => {

    const response = await request(app)
      .post('/products')
      .send({
        type: 'a',
        name: 'Mouse',
        price: 10
      });

    expect(response.status).toBe(200);

    const response2 = await request(app)
      .post('/products')
      .send({
        type: 'b',
        name: 'Keyboard',
        price: 20
      });

    expect(response2.status).toBe(200);

    const listResponse = await request(app).get('/products').send();
    expect(listResponse.status).toBe(200);
    expect(listResponse.body.products.length).toBe(2);

    const product = listResponse.body.products[0];
    expect(product.id).toEqual(expect.any(String));
    expect(product.name).toBe('Mouse');
    expect(product.price).toBe(10);

    const product2 = listResponse.body.products[1];
    expect(product2.id).toEqual(expect.any(String));
    expect(product2.name).toBe('Keyboard');
    expect(product2.price).toBe(40);
  });
});
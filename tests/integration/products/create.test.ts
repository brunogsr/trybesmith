import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

import { newProductMock, newProductMockReturn } from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () {
    sinon.restore();
  });
  it('Testa controller e espera receber status 201 e o produto criado', async function () {
    const buildStub = ProductModel.build(newProductMockReturn);

    const stub = sinon.stub(ProductModel, 'create').resolves(buildStub);

    const res = await chai.request(app).post('/products').send(newProductMock);
    
    expect(res.status).to.equal(201);
    expect(res.body).to.deep.equal(buildStub.toJSON());
    stub.restore();
  });  
});
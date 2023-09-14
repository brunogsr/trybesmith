import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';

import { newProductMock } from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('POST /products', function () {
  it('Testa controller e espera receber status 201 e o produto criado', async function () {
    const stubValue = {
      type: 201,
      message: newProductMock,
    };

    const stub = sinon.stub(productService, 'createProduct').resolves(stubValue);

    const res = await chai.request(app).post('/products').send(newProductMock);

    expect(res).to.have.status(201);
    expect(res.body).to.deep.equal(stubValue.message);

    stub.restore();
  });
  // it('should handle product creation failure gracefully', async function () {
  //   // Crie um stub para ProductModel.create para simular uma falha na criação do produt
  //   const error = new Error('Failed to create product');
  //   const createStub = sinon.stub(ProductModel, 'create').rejects(error);

  //   const result = await productService.createProduct(newProductMock);

  //   expect(createStub.calledOnce).to.be.true; // Verifique se o método create foi chamado
  //   expect(result.type).to.equal(500); // Verifique o tipo de resposta de erro (por exemplo, 500)
  //   expect(result.message).to.equal('Failed to create product'); // Verifique a mensagem de erro

  //   // Restaure o stub após o teste
  //   createStub.restore();
  // });
});

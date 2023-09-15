import { expect } from 'chai';
import sinon from 'sinon';
import ProductsService from '../../../src/services/product.service';
import ProductModel from '../../../src/database/models/product.model';
import { newProductMock, newProductMockReturn, productsMock } from '../../mocks/products.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Testa a createProduct na Service "ProductsService"', async function () {
    const buildMock = ProductModel.build(newProductMockReturn);
    sinon.stub(ProductModel, 'create').resolves(buildMock);

    const { status, message } = await ProductsService.createProduct(newProductMock);

    expect(status).to.be.equal(201);
    expect(message).to.deep.equal(newProductMockReturn);
  });
  it('Testa a getAllProducts na Service "ProductsService"', async function () {
    const buildMock = ProductModel.bulkBuild(productsMock);
    sinon.stub(ProductModel, 'findAll').resolves(buildMock);

    const { status, message } = await ProductsService.getAllProducts();

    expect(status).to.be.equal(200);
    expect(message).to.deep.equal(buildMock);
  });

});

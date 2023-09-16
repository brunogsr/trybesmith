// import chai, { expect } from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// import { Request, Response } from 'express';
// import ProductsService from '../../../src/services/product.service';
// import ProductsController from '../../../src/controllers/product.controller';
// import { newProductMock, newProductMockReturn, productsMock } from '../../mocks/products.mock';

// chai.use(sinonChai);

// describe('ProductsController', function () {
//   const req = {} as Request;
//   const res = {} as Response;

//   beforeEach(function () {
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns(res);
//     sinon.restore();
//   });
//   it('Testa controller entrega todos os produtos com getAllProducts', async function () {
//     const getAllProductsStub = sinon.stub(ProductsService, 'getAllProducts');
//     getAllProductsStub.resolves({ status: 200, message: productsMock });

//     await ProductsController.getAllProducts(req, res);

//     expect(res.status).to.have.been.calledWith(200);
//     expect(res.json).to.have.been.calledWith(productsMock);

//     getAllProductsStub.restore();
//   });
// });

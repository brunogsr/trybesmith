// import sinon from 'sinon';
// import chai, { expect } from 'chai';
// import chaiHttp from 'chai-http';
// import { productsMock } from '../../mocks/products.mock';
// import ProductModel from '../../../src/database/models/product.model';
// import app from '../../../src/app';

// chai.use(chaiHttp);

// describe('GET /products', function () { 
//   beforeEach(function () { sinon.restore(); });
//   it('should return 200 and show all products', async function () {
//     const stubValue = {
//       type: 200,
//       message: productsMock,
//     };
//     const stub = sinon.stub(ProductModel, 'findAll').resolves(stubValue);
//     const res = await chai.request(app).get('/products');
//     expect(res.status).to.equal(200);
//     expect(res.body).to.eql({ type: 200, message: productsMock });
//     stub.restore();
//   }
//   )
// });

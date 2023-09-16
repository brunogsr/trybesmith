// import { expect } from 'chai';
// import sinon from 'sinon';
// import OrdersService from '../../../src/services/order.service';
// import OrderModel from '../../../src/database/models/order.model';
// import allOrders from '../../mocks/orders.mock';

// describe('OrdersService', function () {
//   beforeEach(function () { sinon.restore(); });
//   it('Testa a getAllOrders na Service "OrderService"', async function () {
//     const buildMock = OrderModel.bulkBuild(allOrders);
//     sinon.stub(OrderModel, 'findAll').resolves(buildMock);

//     const { status, message } = await OrdersService.getAllOrders();

//     expect(status).to.be.equal(200);
//     expect(message).to.deep.equal(buildMock);
//   });

// });

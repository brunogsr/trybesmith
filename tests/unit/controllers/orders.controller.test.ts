import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import OrderService from '../../../src/services/order.service';
import OrderController from '../../../src/controllers/order.controller';
import allOrders from '../../mocks/orders.mock';
import { OrderResponse } from '../../../src/types/Order';

chai.use(sinonChai);
describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Testa se retorna todas as Orders na camada Controller', async function () {
    const getAllOrdersStub = sinon.stub(OrderService, 'getAllOrders');
    getAllOrdersStub.resolves({ status: 200, message: allOrders });
    await OrderController.getAllOrders(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allOrders);
    getAllOrdersStub.restore();
  });
});

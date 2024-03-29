import { Product } from '../../src/types/Product'

const newProductMock = {
  name: 'Set Dragon +15+Luck+DD+HP+4 Sockets',
  price: '50b/50s',
  orderId: 4
};

const newProductMockReturn = {
  id: 1,
  name: 'Set Dragon +15+Luck+DD+HP+4 Sockets',
  price: '50b/50s',
  orderId: 4
};

const productsMock: Product[] = [
  {
    id: 1,
    name: 'Excalibur',
    price: '10 peças de ouro',
    orderId: 1
  },
  {
    id: 2,
    name: 'Espada Justiceira',
    price: '20 peças de ouro',
    orderId: 1
  },
  {
    id: 3,
    name: 'Lira de Orfeu',
    price: '1 peça de ouro',
    orderId: 2
  },
  {
    id: 4,
    name: 'Armadura de Aquiles',
    price: '1 peça de ouro',
    orderId: 2
  },
  {
    id: 5,
    name: 'Harpa de Dagda',
    price: '15 peças de ouro',
    orderId: 3
  }
];

export { newProductMock, productsMock, newProductMockReturn };
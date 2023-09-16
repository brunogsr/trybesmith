type Order = {
  id: number,
  userId: number,
  productIds: number[]
}

const allOrders: Order[] = [
  {
    id: 1,
    userId: 1,
    productIds: [
      2,
      1
    ]
  },
  {
    id: 2,
    userId: 3,
    productIds: [
      4,
      3
    ]
  },
  {
    id: 3,
    userId: 2,
    productIds: [
      5
    ]
  }
]

export default allOrders
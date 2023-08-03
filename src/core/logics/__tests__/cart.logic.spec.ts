import { describe, it } from 'vitest'
import { calculateCart } from '../'

describe('TEST KALKULASI', () => {

  const perhitungan = calculateCart()
  it('CASE : total nett', ({ expect }) => {

    perhitungan.init(
      [
        { qty: 5, price: 7_500, discount: { ammount: 10, type: 'Persen' }, tax: { ammount: 10 } },
        { qty: 4, price: 6_500, tax: { ammount: 11 } },
        { qty: 15, price: 3_000, discount: { ammount: 3, type: 'Persen' } }
      ]
    );

    const hasilKalkulasi = perhitungan.values();
    console.table(hasilKalkulasi.currentCart)
    expect(hasilKalkulasi.totalDiskon).toBe(5100)
  })
})

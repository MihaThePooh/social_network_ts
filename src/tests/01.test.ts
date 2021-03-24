import {sum} from "./01"

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {
    // start data
    const a = 1
    const b = 2
    const c = 3

    // actions
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    // expected result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
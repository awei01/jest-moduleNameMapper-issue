import foo from '@/foo'
// the above line will work.
// to see the bug in action comment out the above line and uncomment the line below
// import foo from '@foo'


describe('foo', () => {
  test('it should return some string', () => {
    expect(foo()).toEqual(expect.any(String))
  })
})

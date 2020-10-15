const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

test('likes count', () => {
    const blogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1799',
            title: 'Ei jumalauta',
            author: 'Mika Heinolasta',
            url: 'www.loimaa.info',
            likes: 9,
            __v: 0
        }
    ]

    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(14)
})

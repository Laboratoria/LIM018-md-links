const fetch = jest.fn(() => {
    return Promise.resolve({ message: 'Ok', status: 200 })
})

module.exports = fetch;
const fetch = require('node-fetch');
const { linksStatus } = require('../src/api.js')

const dataTest = require('./dataTest.js');


jest.mock('node-fetch')

describe('linksStatus', () => {
    it('if status: 200 then message:ok ', () => {
        return linksStatus('./md-link').then(res => {
            expect(res).toEqual(dataTest.arrayTeststatus)
        });
    });

    it("if status >= 400 then message: Fail", () => {
        return linksStatus('./md-linkError').then(res => {
            expect(res).toEqual(dataTest.arrayTeststatusFail)
        })
    })
});






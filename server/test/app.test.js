import { use, expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index.js'
import { describe, it } from 'mocha'

const chai = use(chaiHttp)


describe('API Calls', () => {
    describe('/GET /files/data', () => {
        it('Should return an array of files', async () => {
            const res = await chai.request(app).get('/files/data')
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
        })
    })

    describe('/GET /files/list', () => {
        it('Should return an array of file names', async () => {
            const res = await chai.request(app).get('/files/list')
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
        })
    })
})
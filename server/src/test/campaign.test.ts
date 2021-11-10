import request from 'supertest';
import  {app} from "../index"

const mockPayload = {  
     id: "d8cbeb05-e95d-4897-83ea-9fcb76c681ea",
     startDate: 1636243200000,
     endDate: 1640476800000,
     targetImpressions: 100
}

describe('Campaign endpoint', () => {
    const missingParamPayload = {  
        // id: "d8cbeb05-e95d-4897-83ea-9fcb76c681ea",
        startDate: 1636243200000,
        // endDate: 1640476800000,
        // targetImpressions: 100
   }
    it('should return missing error', async () => {
        const res = await request(app).post('/api/add-campaign').send(missingParamPayload);
        expect(res.status).toEqual(500);
        expect(res.body.error).toBe(true);
        expect(res.body.message).toBe("Missing parameters from the request body")
    });
        // returning a 502 from a backend

    // it('should return success adding campaign', async () => {
    //     const res = await request(app).post('/api/add-campaign').send(mockPayload);
    //     console.log(res);
    //     expect(res.status).toEqual(200);
    //     expect(res.body).toHaveProperty('id');
    //     expect(res.body.message).toBe("Campaign added Succesfully")
    // });
    it('should return success for fetching campaigns', async () => {
        const res = await request(app).get('/api/get-campaigns');
        expect(res.status).toEqual(200);
        expect(res.body.error).toBe(false);
        expect(res.body.message).toBe("Successfully Processed");
        expect(res.body).toHaveProperty('data');
        expect(res.body.data.length).toBeGreaterThan(1);
    });

} )
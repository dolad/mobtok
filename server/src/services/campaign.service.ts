import { NextFunction, Request } from "express";
import { IAddCampaign, IAddCampaignRequest} from "../interfaces/campagn.interface";
import { FetchClient } from "../util/fetchClient";
import { convertToUTC } from "../util/util";
import { v4 as uuid_v4 } from "uuid";
export class CampaignService extends FetchClient {
    public async getCampaigns() : Promise<any> {
        const adServerApiResponse = await this.fetchRequest('/campaigns/*', "GET");
        return adServerApiResponse
    }
    public async getCampaign(req:Request) : Promise<any> {
        const id: string = req.params.id;
        const adServerApiResponse = await this.fetchRequest(`/campaigns/${id}`, "GET");
        return adServerApiResponse
    }
    public async addCampaign(req:IAddCampaignRequest) : Promise<any> {
        const { startDate,endDate, targetImpressions} :  IAddCampaign =  req.body;
        if(!startDate || !endDate || !targetImpressions ) throw new Error("Missing parameters from the request body");
        
        const requestPayload = {
            id: uuid_v4(),
            startDate:convertToUTC(new Date(startDate)),
            endDate:convertToUTC(new Date(endDate)),
            targetImpressions,
        }
        const adServerApiResponse = await this.fetchRequest(`/campaigns`,  "POST", requestPayload);
        return adServerApiResponse
    }
}
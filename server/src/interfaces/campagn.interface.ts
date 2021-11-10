import {Request} from 'express';

export interface IGetCampaign {
    id:string
}

export interface IAddCampaign  {
    startDate:Date;
    endDate:Date;
    targetImpressions:number
}

export interface IAddCampaignRequest extends Request {
    body:IAddCampaign;
}


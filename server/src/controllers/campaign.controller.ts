import { NextFunction, Request, Response } from 'express';
import { IAddCampaignRequest } from '../interfaces/campagn.interface';
import { BaseRoute } from "../routes/base.routes";
import { CampaignService } from '../services/campaign.service';
import { handleJsonResponse } from '../util/util';
export class CampaignController extends BaseRoute {
    constructor() {
        super();
        this._initializeRoutes();
    }
    public _initializeRoutes() {
        this.router.get(`${this.path}/health-check`, this.healthCheck);
        this.router.get(`${this.path}/get-campaigns`, this.getCampaigns);
        this.router.get(`${this.path}/get-campaigns/:id`, this.getCampaign);
        this.router.post(`${this.path}/add-campaign`, this.addCampaign);

    }
    
    public healthCheck(req: Request, res:Response, next:NextFunction ) {
        return res.send({
            message:"Healthstatus true"
        })
    }

    public async addCampaign(req: IAddCampaignRequest, res:Response, next:NextFunction) : Promise<any> {
        try {
            const campaignService = new CampaignService();
            const getCampaignResult = await campaignService.addCampaign(req)
            return res.json(handleJsonResponse(getCampaignResult, "Campaign added Succesfully", 'success'))
        } catch (error: any) {
            return res.status(500).json(handleJsonResponse({}, error.message, 'error'));
        }
    }

    public async getCampaigns(req: Request, res:Response, next:NextFunction) : Promise<any> {
        try {
            const campaignService = new CampaignService();
            const getCampaignResult = await campaignService.getCampaigns()
            return res.json(handleJsonResponse(getCampaignResult, "Campaign fetch Succesfully", 'success'))
        } catch (error: any) {
            return res.status(500).json(handleJsonResponse({}, error.message, 'error'));
        }
    }
  
    public async getCampaign(req: Request, res:Response, next:NextFunction) : Promise<any> {
        try {
            const campaignService = new CampaignService();
            const getCampaignResult = await campaignService.getCampaign(req)
            return res.json(handleJsonResponse(getCampaignResult, "Campaign added Succesfully", 'success'))
        } catch (error: any) {
            return res.status(500).json(handleJsonResponse({}, error.message, 'error'));
        }
    }

}
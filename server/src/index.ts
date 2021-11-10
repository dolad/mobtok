import {
    CampaignController
} from './controllers/campaign.controller';

import {App} from './app';

export const app =  new App(
    [
       new CampaignController()
    ]

)

app.listen();

module.exports =  app 
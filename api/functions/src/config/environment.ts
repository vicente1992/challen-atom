import * as serviceAccount from './admin.json';


export const environment = {
    firebase: {
        databaseURL: `https://${serviceAccount?.project_id ?? ''}.firebaseio.com`,
        credentials: serviceAccount,
    }
}
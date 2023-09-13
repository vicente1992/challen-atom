import { onRequest } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2/options';
import app from './app';

setGlobalOptions({ maxInstances: 10 });

export const api = onRequest(app);


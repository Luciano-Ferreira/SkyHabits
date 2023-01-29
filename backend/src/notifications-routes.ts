import { FastifyInstance } from 'fastify';
import WebPush from 'web-push';
import { z } from 'zod';

console.log(WebPush.generateVAPIDKeys());
const publicKey =
  'BJQzPgnBBtwoNu7zuBQVf-0yQyvB7CI4HI73rhKMQbJyAI42mbgWUbb6qIxIWjEl7X-qTtkDcXQpXMcGjYNgGOk';

const privateKey = 'aQ6kwNBGXC5Ckv4UfN9M0CQI1H81yAwZgsLCmEd5oVo';

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey);

export async function notificationsRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
      publicKey,
    };
  }),
    app.post('/push/register', (req, res) => {
      console.log(req.body);

      return res.status(201).send();
    }),
    app.post('/push/send', async (req, res) => {
      const sendPushBody = z.object({
        subscription: z.object({
          endpoint: z.string(),
          keys: z.object({
            p256dh: z.string(),
            auth: z.string(),
          }),
        }),
      });

      const { subscription } = sendPushBody.parse(req.body);

      setTimeout(() => {
        WebPush.sendNotification(subscription, 'hey by backend')
      }, 5000)

      return res.status(201).send();
    });
}

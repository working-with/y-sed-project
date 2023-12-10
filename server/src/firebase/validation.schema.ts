import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('local', 'develop', 'stage', 'production')
    .default('local'),
  FIREBASE_API_KEY: Joi.string().required(),
  FIREBASE_AUTH_DOMAIN: Joi.string().required(),
  FIREBASE_PROJECT_ID: Joi.string().required(),
  FIREBASE_STORAGE_BUCKET: Joi.string().required(),
  FIREBASE_MESSAGING_SENDER_ID: Joi.string().required(),
  FIREBASE_APP_ID: Joi.string().required(),
});

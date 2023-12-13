import Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('local', 'develop', 'stage', 'production')
    .default('local'),
  CLOVA_REQUEST_URL: Joi.string().required(),
  CLOVA_CLIENT_ID: Joi.string().required(),
  CLOVA_CLIENT_SECRET: Joi.string().required(),
});

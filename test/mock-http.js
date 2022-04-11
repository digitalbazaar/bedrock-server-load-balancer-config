/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import * as bedrock from '@bedrock/core';
import {asyncHandler} from '@bedrock/express';

bedrock.events.on('bedrock-express.configure.routes', app => {
  app.get(
    '/mock',
    asyncHandler(async (req, res) => {
      res.json({success: true});
    }));
});

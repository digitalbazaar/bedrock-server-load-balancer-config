/*
 * Copyright (c) 2020-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const bedrock = require('bedrock');
const {asyncHandler} = require('bedrock-express');

bedrock.events.on('bedrock-express.configure.routes', app => {
  app.get(
    '/mock',
    asyncHandler(async (req, res) => {
      res.json({success: true});
    }));
});

/*
 * Copyright (c) 2020-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config} = require('bedrock');
const {httpClient} = require('@digitalbazaar/http-client');
const {agent} = require('bedrock-https-agent');

describe('HTTP API', () => {
  it('should serve a request', async () => {
    let err;
    let result;
    try {
      result = await httpClient.get(`${config.server.baseUri}/mock`, {agent});
    } catch(e) {
      err = e;
    }
    assertNoError(err);
    should.exist(result.data);
    result.data.success.should.equal(true);
  });
});

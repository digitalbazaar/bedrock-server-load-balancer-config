/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {config} from '@bedrock/core';
import {agent} from '@bedrock/https-agent';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const {httpClient} = require('@digitalbazaar/http-client');

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

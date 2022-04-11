/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import * as bedrock from '@bedrock/core';
import '@bedrock/express';
import '@bedrock/https-agent';
import '@bedrock/server-load-balancer-config';

import './mock-http.js';

import '@bedrock/test';
bedrock.start();

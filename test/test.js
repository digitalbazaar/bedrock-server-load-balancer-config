/*
 * Copyright (c) 2020-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const bedrock = require('bedrock');
require('bedrock-express');
require('bedrock-https-agent');
require('bedrock-server-load-balancer-config');

require('./mock-http');

require('bedrock-test');
bedrock.start();

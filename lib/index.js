/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import * as bedrock from '@bedrock/core';
import * as brServer from '@bedrock/server';
import {logger} from './logger.js';
import './config.js';

const {config} = bedrock;

const cfg = config['server-load-balancer-config'];

bedrock.events.on('bedrock-server.http.listen', () => {
  brServer.servers.http.headersTimeout = cfg.headersTimeout;
  brServer.servers.http.keepAliveTimeout = cfg.keepAliveTimeout;

  logger.debug('Applied HTTP server load balancer settings.', cfg);
});

bedrock.events.on('bedrock-server.https.listen', () => {
  brServer.servers.https.headersTimeout = cfg.headersTimeout;
  brServer.servers.https.keepAliveTimeout = cfg.keepAliveTimeout;

  logger.debug('Applied HTTPS server load balancer settings.', cfg);
});

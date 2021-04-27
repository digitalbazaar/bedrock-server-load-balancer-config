/*!
 * Copyright (c) 2020-2021 Digital Bazaar, Inc. All rights reserved.
 */
import bedrock from 'bedrock';
const {config} = bedrock;

const namespace = 'server-load-balancer-config';
const cfg = config[namespace] = {};

cfg.headersTimeout = 3 * 60 * 1000;
cfg.keepAliveTimeout = 3 * 60 * 1000;


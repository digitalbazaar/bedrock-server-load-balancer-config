/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {config} from '@bedrock/core';

const namespace = 'server-load-balancer-config';
const cfg = config[namespace] = {};

cfg.headersTimeout = 3 * 60 * 1000;
cfg.keepAliveTimeout = 3 * 60 * 1000;

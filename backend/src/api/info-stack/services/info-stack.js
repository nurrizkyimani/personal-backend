'use strict';

/**
 * info-stack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::info-stack.info-stack');
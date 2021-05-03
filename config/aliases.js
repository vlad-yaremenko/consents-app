const path = require('path');

module.exports = {
  '@store': path.resolve(__dirname, '../src/store'),
  '@views': path.resolve(__dirname, '../src/views'),
  '@layouts': path.resolve(__dirname, '../src/layouts'),
  '@services': path.resolve(__dirname, '../src/services'),
  '@components': path.resolve(__dirname, '../src/components'),
  '@http': path.resolve(__dirname, '../src/services/http.service.js')
};

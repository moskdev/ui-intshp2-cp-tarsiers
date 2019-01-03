const config = {};

process.env.NODE_PORT = process.env.NODE_PORT || 3300;
process.env.NODE_TEST_PORT = process.env.NODE_TEST_PORT || 3301;

config.PORT = process.env.NODE_ENV === 'test' ? process.env.NODE_TEST_PORT : process.env.NODE_PORT;

module.exports = config;

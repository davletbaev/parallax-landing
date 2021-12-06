/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react');
const Layout = require('./src/layouts/Main').default;

exports.wrapPageElement = ({ element, props }) => {
  return <Layout { ...props }>{element}</Layout>;
};
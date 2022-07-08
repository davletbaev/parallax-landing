import React from 'react';

import Button from '@components/Button';
import { Heading, Paragraph } from '@components/Typography';

const NotFoundPage = () => {
  return (
    <>
      <div className="container">
        <Heading size="h2">Page not found</Heading>
        <Paragraph size="large" marginTop="16" marginBottom="24">This page doesn`t exist</Paragraph>
        <Button to="/">Return to Main</Button>
      </div>
    </>
  );
};

export default NotFoundPage;
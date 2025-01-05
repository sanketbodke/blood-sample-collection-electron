import React from 'react';
import {PagesHeadingContainer, Line, PageHeading} from "./pagesHeading.styled";

const PagesHeading = ({heading}) => {
  return (
    <PagesHeadingContainer>
      <PageHeading>{heading}</PageHeading>
      <Line></Line>
    </PagesHeadingContainer>
  );
};

export default PagesHeading;

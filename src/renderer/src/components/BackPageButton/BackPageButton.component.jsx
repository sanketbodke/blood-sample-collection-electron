import React from 'react';
import {ArrowLeftOutlined} from "@ant-design/icons"
import {BackButton} from "./backPageButton.styled";

const BackPageButton = ({backLink}) => {
  return (
    <BackButton to={backLink}>
      <ArrowLeftOutlined />
    </BackButton>
  );
};

export default BackPageButton;

import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)``;

export const IconSearch = ({ firstColor = "#666666", ...rest }) => {
  return (
    <Svg viewBox="0 0 9 16" {...rest}>
      <g clipPath="url(#clip0_346_12394)">
        <path
          fill={firstColor}
          d="M8.44492 11.3262L6.54814 9.42942C6.51221 9.39349 6.46533 9.37474 6.41534 9.37474H6.2091C6.70126 8.80445 6.99968 8.0623 6.99968 7.24984C6.99968 5.45462 5.54507 4 3.74984 4C1.95462 4 0.5 5.45462 0.5 7.24984C0.5 9.04507 1.95462 10.4997 3.74984 10.4997C4.5623 10.4997 5.30445 10.2013 5.87474 9.7091V9.91534C5.87474 9.96533 5.89505 10.0122 5.92942 10.0481L7.8262 11.9449C7.89964 12.0184 8.01838 12.0184 8.09182 11.9449L8.44492 11.5918C8.51836 11.5184 8.51836 11.3996 8.44492 11.3262ZM3.74984 9.74972C2.36866 9.74972 1.24996 8.63102 1.24996 7.24984C1.24996 5.86866 2.36866 4.74996 3.74984 4.74996C5.13102 4.74996 6.24972 5.86866 6.24972 7.24984C6.24972 8.63102 5.13102 9.74972 3.74984 9.74972Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_346_12394">
          <rect width="8" height="16" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </Svg>
  );
};
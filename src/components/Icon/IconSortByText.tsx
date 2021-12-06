import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)``;

export const IconSortByText = ({
  firstColor = "#212121",
  secondColor = "#212121",
  ...rest
}) => {
  return (
    <Svg viewBox="0 0 20 32" {...rest}>
      <path
        fill={firstColor}
        d="M4.11272 13.936H1.88872L1.52072 15H0.344719L2.35272 9.408H3.65672L5.66472 15H4.48072L4.11272 13.936ZM3.80872 13.04L3.00072 10.704L2.19272 13.04H3.80872ZM2.39131 22.056H4.90331V23H1.09531V22.136L3.59131 18.36H1.09531V17.416H4.90331V18.28L2.39131 22.056Z"
      />
      <g clipPath="url(#clip0_346_12390)">
        <path
          fill={secondColor}
          d="M20.0173 19.1082L19.7648 18.8557C19.5975 18.6883 19.3261 18.6883 19.1587 18.8557L16.1786 21.8531V8.42857C16.1786 8.19189 15.9867 8 15.75 8H15.3929C15.1562 8 14.9643 8.19189 14.9643 8.42857V21.8531L11.9841 18.8557C11.8168 18.6883 11.5454 18.6883 11.378 18.8557L11.1255 19.1082C10.9582 19.2756 10.9582 19.5469 11.1255 19.7143L15.2684 23.8745C15.4357 24.0418 15.7071 24.0418 15.8745 23.8745L20.0174 19.7143C20.1847 19.5469 20.1847 19.2756 20.0173 19.1082Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_346_12390">
          <rect
            width="9"
            height="16"
            fill="white"
            transform="translate(11 8)"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

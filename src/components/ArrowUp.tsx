import * as React from "react";
import { SVGProps } from "react";
const ArrowUpSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M4.354.646a.5.5 0 0 0-.708 0L.464 3.828a.5.5 0 1 0 .708.708L4 1.707l2.828 2.829a.5.5 0 1 0 .708-.708L4.354.646ZM4.5 12V1h-1v11h1Z"
    />
  </svg>
);
export default ArrowUpSvg;

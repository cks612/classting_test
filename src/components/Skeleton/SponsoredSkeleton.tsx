import React from "react";
import ContentLoader from "react-content-loader";

const SponsoredSkeleton = function () {
  return (
    <>
      <ContentLoader
        width={900}
        height={500}
        speed={2}
        viewBox="0 0 900 600"
        backgroundColor="#d9d7d7"
        foregroundColor="#f3f3f3"
      >
        <rect x="0" y="15" rx="5" ry="5" width="200" height="20" />
        <rect x="220" y="15" rx="5" ry="5" width="100" height="20" />
        <rect x="0" y="70" rx="15" ry="15" width="900" height="170" />
        <rect x="0" y="310" rx="12" ry="12" width="430" height="80" />
        <rect x="480" y="310" rx="12" ry="12" width="420" height="80" />
        <rect x="0" y="430" rx="12" ry="12" width="430" height="80" />
        <rect x="480" y="430" rx="12" ry="12" width="420" height="80" />
      </ContentLoader>
    </>
  );
};

export default SponsoredSkeleton;

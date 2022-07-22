import React from "react";
import ContentLoader from "react-content-loader";

const SponsoredSkeleton = function () {
  return (
    <ContentLoader width={400} height={160} speed={1}>
      <rect x="0" y="15" width="130" height="130" />
      <rect x="139" y="25" width="200" height="20" />
      <rect x="139" y="50" width="180" height="17" />
      <rect x="139" y="78" width="160" height="17" />
      <rect x="269" y="120" rx="16" ry="16" width="80" height="25" />
    </ContentLoader>
  );
};

export default SponsoredSkeleton;

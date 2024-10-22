import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={240}
    height={500}
    viewBox="0 0 240 450"
    backgroundColor="#f3f1f1"
    foregroundColor="#d6d6d6"
  >
    <rect x="0" y="0" rx="0" ry="0" width="240" height="450" />
  </ContentLoader>
);

export default Skeleton;

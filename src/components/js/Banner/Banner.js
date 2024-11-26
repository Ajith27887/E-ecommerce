import bannerImage from "../Banner/web_optimized_banner1.webp";
const Banner = () => {
  return (
    <div
      className="Banner"
      style={{
        Width: "100%",
        height: "70vh",
        overflow: "hidden",
      }}
    >
      <img
        src={bannerImage}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};
export default Banner;

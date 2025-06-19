import { ClipLoader } from "react-spinners";

const Loader = ({ isLoading }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    color: "#ffffff",
  };
  return (
    <ClipLoader
      color={override.color}
      loading={isLoading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;

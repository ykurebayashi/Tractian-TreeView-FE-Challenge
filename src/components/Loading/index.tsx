import { Loader } from "./style";
import { LoadingSpinnerProps } from "./type";

export const LoadingSpinner = ({
  isLoading,
  children,
}: LoadingSpinnerProps) => {
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Loader />{" "}
        </div>
      ) : (
        children
      )}
    </>
  );
};

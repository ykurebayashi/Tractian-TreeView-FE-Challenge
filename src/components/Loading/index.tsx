import { Loader, LoaderContainer } from "./style";
import { LoadingSpinnerProps } from "./type";

export const LoadingSpinner = ({
  isLoading,
  children,
}: LoadingSpinnerProps) => {
  return (
    <>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        children
      )}
    </>
  );
};

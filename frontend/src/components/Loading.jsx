export const LoadingAnimation = () => {
  return (
    <div className="inline-block w-5 h-5 border-2 border-t-2 border-r-transparent border-white rounded-full animate-spin"></div>
  );
};

export const Loading = () => {
  return (
    <div className="flex items-center justify-center max-h-screen mt-36">
      <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-red-500"></div>
    </div>
  );
};

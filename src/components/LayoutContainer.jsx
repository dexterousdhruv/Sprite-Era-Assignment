const LayoutContainer = ({ children }) => {
  return (
    <div className=" container mx-auto max-w-[100rem] px-5 sm:px-12 lg:px-20 ">
      {children}
    </div>
  );
};

export default LayoutContainer;

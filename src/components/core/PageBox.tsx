import type { CoreComponentsProps } from "@/types";

const PageBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames } = props;

  return (
    <div
      className={`relative m-0 flex w-full max-w-full flex-col items-stretch overflow-x-hidden p-0 transition duration-300 ease-in-out ${classNames}`}
    >
      {children}
    </div>
  );
};

export default PageBox;

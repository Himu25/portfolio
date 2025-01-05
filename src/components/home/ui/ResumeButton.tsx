import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link href="/" className="app__outlined_btn min-w-[10rem]" target="_blank">
      Download Resume
    </Link>
  );
};

export default ResumeButton;

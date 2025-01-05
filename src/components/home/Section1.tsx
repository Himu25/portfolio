import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={["Himanshu Singh", "@himanshu6386."]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
          </div>
          <p className="text-sm sm:text-base dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
            Frontend Developer 💻 SDE 🛠️
          </p>

          <div className="gap-4 mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-between">
            <TalkButton />
            <Link
              href="https://drive.google.com/file/d/1FrldjubBu6tIfgKUvXV9ss_yDZ5qXtSl/view?usp=sharing"
              passHref
            >
              <span className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg text-center cursor-pointer hover:bg-blue-600">
                View Resume
              </span>
            </Link>
          </div>
        </Column>

        <div className="mt-8 sm:mt-12 lg:mt-16 w-full flex flex-col items-center">
          <p className="text-base sm:text-lg font-medium">Follow me here</p>

          <Row classNames="mt-2 gap-2">
            {socialLinks.slice(0, 5).map((link, index) => {
              return (
                <Link
                  key={`social-link-${index}`}
                  href={link.url}
                  target="_blank"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                  aria-label={`${link.name}`}
                >
                  <span className="text-base sm:text-lg text-[var(--whiteColor)]">
                    {typeof link.icon === "string" ? null : (
                      <FontAwesomeIcon icon={link.icon} />
                    )}
                  </span>
                </Link>
              );
            })}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;

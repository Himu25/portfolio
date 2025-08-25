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
      id={id}
      classNames="relative overflow-hidden min-h-screen items-center justify-center bg-[var(--bgColor)] dark:bg-[var(--bgColor)] bg-grid-white/[0.1] dark:bg-grid-white/[0.1] rounded-md"
    >
      <ConstrainedBox classNames="z-20 px-4 py-8 pt-16 items-center justify-center">
        <Column classNames="w-full items-center text-center space-y-4">
          {/* Heading */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-[var(--textColor)] dark:text-[var(--textColor)]">
              Hi there, I am
            </p>
            <FlipWords
              words={["Himanshu Singh", "@himanshu6386."]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-[var(--primaryColor)] dark:text-[var(--primaryColor)]"
            />
          </div>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-[var(--textColorLight)] dark:text-[var(--textColorLight)]">
            Frontend Developer 💻 | SDE 🛠️
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <TalkButton />
            <Link
              href="https://drive.google.com/file/d/1FrldjubBu6tIfgKUvXV9ss_yDZ5qXtSl/view?usp=sharing"
              passHref
            >
              <span className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg cursor-pointer transition-all duration-200">
                View Resume
              </span>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex flex-col items-center">
            <p className="text-base sm:text-lg font-medium">Follow me here</p>
            <Row classNames="mt-3 gap-3">
              {socialLinks.slice(0, 5).map((link, index) => (
                <Link
                  key={`social-link-${index}`}
                  href={link.url}
                  target="_blank"
                  aria-label={link.name}
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)] hover:bg-[var(--primaryColor)] hover:text-white transition-colors"
                >
                  {typeof link.icon !== "string" && (
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="text-base sm:text-lg"
                    />
                  )}
                </Link>
              ))}
            </Row>
          </div>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;

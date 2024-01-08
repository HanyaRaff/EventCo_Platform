import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between  flex-col sm:flex-row text-center gap-4 p-5">
        <Link href={"/"}>
          <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38}/>
        </Link>

        <p>2023 Eventco. All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;

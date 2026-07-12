import Image from "next/image";

const localLogos = [
  {
    src: "/footer-widget/IMTD-Logo-medium.gif",
    alt: "IMTD",
    width: 120,
    height: 80,
    unoptimized: true,
  },
  {
    src: "/footer-widget/Pass_Plus_Logo.jpeg",
    alt: "Pass Plus",
    width: 120,
    height: 80,
  },
  {
    src: "/footer-widget/THT logo.png",
    alt: "The Honest Truth Programme",
    width: 120,
    height: 80,
  },
];

export default function AccreditationBanner() {
  return (
    <div className="accreditation-banner">
      <div className="site-shell accreditation-inner">
        {localLogos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            unoptimized={"unoptimized" in logo ? true : undefined}
            style={{ objectFit: "contain" }}
          />
        ))}
        <a
          href="https://www.lofaway2pass.com/accreditation/"
          title="driving test nerves"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://testbuddy.app/wp-content/uploads/2021/11/driving-test-nerves.png"
            alt="driving test nerves"
            width={120}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </a>
      </div>
    </div>
  );
}

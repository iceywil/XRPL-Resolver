import Link from "next/link";

const footerNavs = [

  {
    label: "Community",
    items: [
      {
        href: "",
        name: "GitHub EVM DID Resolver",
      },
      {
        href: "",
        name: "GitHub Mainnet DID Resolver",
      },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                XRPL Resolver
              </span>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                  {nav.label}
                </h2>
                <ul className="gap-2 grid">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              XRPL Resolver
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      {/*   <SiteBanner /> */}
    </footer>
  );
}

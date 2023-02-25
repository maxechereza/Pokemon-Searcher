import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Pokemon Battle",
    route: "/pokemon",
  },
  {
    label: "Flag Searcher",
    route: "/flag",
  },
];

export default function Navigation() {
  return (
    <header className="bg-orange-100 p-4 flex justify-between items-center">
      <nav>
        <ul className="flex">
          {links.map(({ label, route }, index) => (
            <li key={index} className="ml-8">
              <Link href={route} className="text-gray-700 hover:text-red-500">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

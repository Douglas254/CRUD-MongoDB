import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-600/10 px-8 py-3">
      <Link href={"/"} className="font-bold text-3xl text-zinc-700 font-vibes">
        Douglas
        <span className="text-[#BB0000]">2</span>
        <span className="text-[#000000]">5</span>
        <span className="text-[#006600]">4</span>
      </Link>
      <Link
        className="bg-slate-700 text-white px-3 py-1 rounded-md hover:bg-slate-700/80 font-semibold hover:font-bold"
        href={"/addTopic"}
      >
        Add Topic
      </Link>
    </nav>
  );
}

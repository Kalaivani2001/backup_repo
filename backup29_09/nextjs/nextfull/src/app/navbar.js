import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-4">
            <Link href="/" className="text-white font-bold">Logo</Link>
            <Link href="/addItems" className="bg-white py-3 px-3 " >Add Items</Link>
        </nav>
    )
}
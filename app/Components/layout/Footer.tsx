import Link from "next/link";
import { Headset, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-10 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white">
                                <Headset className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Specialist<span className="text-sky-500">Line</span>
                            </span>
                        </div>
                        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
                            Premier BPO partner providing high-intent MCA live transfers, appointment setting, and dedicated outsourcing solutions for business funding institutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h4>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li>
                                <Link href="#services" className="transition hover:text-white">
                                    MCA Live Transfers
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="transition hover:text-white">
                                    Appointment Setting
                                </Link>
                            </li>
                            <li>
                                <Link href="#why-us" className="transition hover:text-white">
                                    Why Specialist Line
                                </Link>
                            </li>
                            <li>
                                <Link href="#stats" className="transition hover:text-white">
                                    Campaign Results
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Contact
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 text-sky-400" />
                                <span>(800) 555-0199</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 text-sky-400" />
                                <span>info@specialistline.com</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <MapPin className="h-4 w-4 text-sky-400" />
                                <span>Wall St, New York, NY</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
                    <p>&copy; 2026 Specialist Line BPO. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-slate-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-400">Terms of Service</Link>
                        <Link href="#" className="hover:text-slate-400">TCPA & DNC Compliance</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

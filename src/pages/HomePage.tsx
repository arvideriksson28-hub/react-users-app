import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <main className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Users App
            </h1>

            <p className="mt-4 max-w-md text-lg text-slate-600">
                Bläddra bland alla användare och se deras roller,
                kontaktuppgifter och inställningar.
            </p>

            <Link
                to="/users"
                className="mt-8 rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
                Visa användare
            </Link>
        </main>
    );
}

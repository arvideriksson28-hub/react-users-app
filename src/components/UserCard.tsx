import type { User } from "../types/User";

interface UserCardProp {
    user: User;
}

interface SettingPillProps {
    label: string;
    enabled: boolean;
}

// Hela klassnamn behövs så att Tailwind hittar dem vid bygget
const avatarColors: string[] = [
    "bg-emerald-100 text-emerald-800",
    "bg-sky-100 text-sky-800",
    "bg-amber-100 text-amber-800",
    "bg-rose-100 text-rose-800",
    "bg-violet-100 text-violet-800",
    "bg-teal-100 text-teal-800",
];

const roleStyles: Record<string, string> = {
    admin: "bg-rose-50 text-rose-700 ring-rose-600/20",
    editor: "bg-amber-50 text-amber-700 ring-amber-600/20",
    user: "bg-slate-50 text-slate-600 ring-slate-500/20",
};

const defaultRoleStyle = "bg-indigo-50 text-indigo-700 ring-indigo-600/20";

function getInitials(name: string): string {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join("");
}

function SettingPill({ label, enabled }: SettingPillProps) {
    return (
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
            <span
                className={`h-2 w-2 rounded-full ${
                    enabled ? "bg-emerald-500" : "bg-slate-300"
                }`}
                aria-hidden="true"
            />
            {label} {enabled ? "på" : "av"}
        </span>
    );
}

export default function UserCard({ user }: UserCardProp) {
    const { profile, settings, roles, username, id } = user;
    const avatarColor = avatarColors[id % avatarColors.length];
    const isDarkTheme = settings.theme.toLowerCase() === "dark";

    return (
        <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Huvud: avatar, namn och användarnamn */}
            <header className="flex items-start gap-4">
                <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-semibold ${avatarColor}`}
                    aria-hidden="true"
                >
                    {getInitials(profile.name)}
                </div>

                <div className="min-w-0 flex-1">
                    <h2 className="truncate text-base font-semibold text-slate-900">
                        {profile.name}
                    </h2>
                    <p className="truncate text-sm text-slate-500">
                        @{username}
                    </p>
                </div>

                <span className="text-xs tabular-nums text-slate-400">
                    #{id}
                </span>
            </header>

            {/* Roller */}
            {roles.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Roller">
                    {roles.map((role) => (
                        <li
                            key={role}
                            className={`rounded-md px-2 py-0.5 text-xs font-medium capitalize ring-1 ring-inset ${
                                roleStyles[role.toLowerCase()] ??
                                defaultRoleStyle
                            }`}
                        >
                            {role}
                        </li>
                    ))}
                </ul>
            )}

            {/* Kontaktuppgifter */}
            <dl className="mt-5 mb-5 space-y-3 text-sm">
                <div>
                    <dt className="text-slate-500">E-post</dt>
                    <dd className="truncate">
                        <a
                            href={`mailto:${profile.email}`}
                            className="text-slate-900 underline decoration-slate-300 underline-offset-2 hover:decoration-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm"
                        >
                            {profile.email}
                        </a>
                    </dd>
                </div>

                <div>
                    <dt className="text-slate-500">Adress</dt>
                    <dd className="text-slate-900">
                        {profile.address.street}
                        <br />
                        {profile.address.zipCode} {profile.address.city}
                    </dd>
                </div>
            </dl>

            {/* Inställningar */}
            <footer className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                <div className="flex gap-4">
                    <SettingPill
                        label="E-post"
                        enabled={settings.notifications.email}
                    />
                    <SettingPill
                        label="Push"
                        enabled={settings.notifications.push}
                    />
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                    <span
                        className={`h-3 w-3 rounded-full ring-1 ring-slate-300 ${
                            isDarkTheme ? "bg-slate-800" : "bg-white"
                        }`}
                        aria-hidden="true"
                    />
                    {isDarkTheme ? "Mörkt tema" : "Ljust tema"}
                </span>
            </footer>
        </article>
    );
}

import type { User } from "../types/User";

export const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch(
        "https://api-userapi.onrender.com/api/users/getUsers",
        {
            headers: {
                "x-api-key": "elev-hemlighet-2026",
            },
        }
    );

    if (!res.ok) {
        throw new Error("Kunde inte hämta användare");
    }

    return res.json();
};

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/fetchUsers";
import UserList from "../components/UserList";

const UserPage = () => {
    const {
        data: users,
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    if (isPending)
        return (
            <p className="p-8 text-center text-slate-500">
                Laddar användare...
            </p>
        );
    if (isError)
        return <p className="p-8 text-center text-rose-600">{error.message}</p>;
    if (users.length === 0)
        return (
            <p className="p-8 text-center text-slate-600">
                Inga användare hittades
            </p>
        );

    return (
        <>
            <div className="mx-auto max-w-6xl px-4 py-8 ">
                <UserList users={users}></UserList>
            </div>
        </>
    );
};
export default UserPage;

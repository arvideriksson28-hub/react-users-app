import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/fetchUsers";
import UserList from "../components/UserList";

const UserPage = () => {
    const {
        data: users,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    if (isLoading) return <p>Laddar användare...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <div className="mx-auto max-w-6x1 px-4 py-8 ">
                <UserList users={users}></UserList>
            </div>
        </>
    );
};
export default UserPage;

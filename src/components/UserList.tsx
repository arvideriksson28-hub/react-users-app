import type { User } from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-10 ">
                {users.map((user) => (
                    <UserCard key={user.id} user={user}></UserCard>
                ))}
            </div>
        </>
    );
};
export default UserList;

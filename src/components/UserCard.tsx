import type { User } from "../types/User";

interface UserCardProp {
    user: User;
}

const UserCard = ({ user }: UserCardProp) => {
    return (
        <div>
            <h3>Namn: {user.profile.name}</h3>
            <p>Email: {user.profile.email}</p>
            <p>Roller: {user.roles}</p>
        </div>
    );
};

export default UserCard;

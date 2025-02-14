
import BaseLayout from "@/components/layouts/BaseLayout";

interface UsersListProps {
  user: any;
}

const UsersList = ({ user }: UsersListProps) => {
  return (
    <BaseLayout user={user}>
      <div>
        <h1>Users List</h1>
      </div>
    </BaseLayout>
  );
};

export default UsersList;

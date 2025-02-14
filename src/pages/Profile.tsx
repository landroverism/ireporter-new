
import BaseLayout from "@/components/layouts/BaseLayout";

interface ProfileProps {
  user: any;
}

const Profile = ({ user }: ProfileProps) => {
  return (
    <BaseLayout user={user}>
      <div>
        <h1>Profile</h1>
      </div>
    </BaseLayout>
  );
};

export default Profile;

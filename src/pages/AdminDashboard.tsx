
import BaseLayout from "@/components/layouts/BaseLayout";

interface AdminDashboardProps {
  user: any;
}

const AdminDashboard = ({ user }: AdminDashboardProps) => {
  return (
    <BaseLayout user={user}>
      <div>
        <h1>Admin Dashboard</h1>
      </div>
    </BaseLayout>
  );
};

export default AdminDashboard;

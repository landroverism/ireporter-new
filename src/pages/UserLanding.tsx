
import { useState } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";

interface UserLandingProps {
  user: any;
}

const UserLanding = ({ user }: UserLandingProps) => {
  return (
    <BaseLayout user={user}>
      <div>
        <h1>Welcome {user?.username}</h1>
      </div>
    </BaseLayout>
  );
};

export default UserLanding;

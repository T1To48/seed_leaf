import { AccountWrapper, AccountSidebar, AccountHeader } from "./components";
const UserAccount = () => {
  return (
    <AccountWrapper sidebar={<AccountSidebar />}>
      <AccountHeader />
    </AccountWrapper>
  );
};

export default UserAccount;

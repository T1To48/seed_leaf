import { useNavigate, useParams } from "react-router";
import type { RouteParams } from "src/types";
import { linksTitles } from "src/constants";
import { AccountWrapper, AccountSidebar, AccountHeader } from "./components";

const UserAccount = () => {
  const navigate = useNavigate();
  const { currentPage } = useParams<{ currentPage: RouteParams }>();

  if (!currentPage) {
    navigate("/orders");
    return null;
  }
  return (
    <AccountWrapper sidebar={<AccountSidebar currentPage={currentPage} />}>
      <AccountHeader title={linksTitles[currentPage]} />
    </AccountWrapper>
  );
};

export default UserAccount;

import { useNavigate, useParams } from "react-router";
import type { RouteParams } from "src/types";
import { linksTitles } from "src/constants";
import {
  AccountWrapper,
  AccountSidebar,
  AccountHeader,
  OrdersHistory,
  Address,
} from "./components";

const accountPages = {
  orders: <OrdersHistory />,
  address: <Address />,
  profile: <div>Profile</div>,
};
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
      {accountPages[currentPage]}
    </AccountWrapper>
  );
};

export default UserAccount;

import { StyledRedirectLink } from "./redirectLink.styles";
const RedirectLink = ({
  linkTo,
  linkText,
}: {
  linkTo: "register" | "login";
  linkText: string;
}) => {
  return <StyledRedirectLink to={"/" + linkTo}>{linkText}</StyledRedirectLink>;
};

export default RedirectLink;

import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user, isLoading: isLoadingUser } = useUser();
  const userInfo = user.user_metadata;

  const getUserName = () => {
    if (!isLoadingUser) {
      const atIndex = user.email.indexOf("@");
      return user.email.substring(0, atIndex);
    }
  };

  return (
    <StyledUserAvatar>
      <Avatar
        src={userInfo.picture ? userInfo.picture : "default-avatar.jpg"}
        alt={"user avt"}
      />
      <span>{userInfo.full_name ? userInfo.full_name : getUserName()}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;

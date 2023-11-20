import { Wrapper, Avatar, UserName } from "./user-card.styled";

interface UserCardProps {
  userData: any;
}

function UserCard({ userData }: UserCardProps) {
  console.log(userData);
  return (
    <Wrapper>
      <Avatar src={userData.avatar_url} />
      <UserName>{userData.login}</UserName>
    </Wrapper>
  );
}

export default UserCard;

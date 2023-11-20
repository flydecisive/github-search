import { useState } from "react";
import { Wrapper, Avatar, UserName } from "./user-card.styled";

interface UserCardProps {
  userData: any;
  id: number | any;
}

function UserCard({ userData, id }: UserCardProps) {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const handleCardClick = (e: any) => {
    setShowInfo(!showInfo);
    console.log(e.currentTarget.id);
  };

  return (
    <Wrapper
      id={id}
      onClick={(e: any) => {
        handleCardClick(e);
      }}
      onMouseLeave={() => {
        setShowInfo(false);
      }}
    >
      {showInfo ? (
        <>
          <p>Информация</p>
          <p>{userData.html_url}</p>
        </>
      ) : (
        <>
          <Avatar src={userData.avatar_url} />
          <UserName>{userData.login}</UserName>
        </>
      )}
    </Wrapper>
  );
}

export default UserCard;

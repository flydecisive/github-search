import { useState } from "react";
import {
  Wrapper,
  Avatar,
  UserName,
  Heading,
  Link,
  InfoWrapper,
  InfoItem,
} from "./user-card.styled";
import { getFollowers } from "../../api";

interface UserCardProps {
  userData: any;
  id: number | any;
}

function UserCard({ userData, id }: UserCardProps) {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [followers, setFollowers] = useState<number>();

  const handleCardClick = (e: any) => {
    setShowInfo(!showInfo);
    // getFollowers(userData?.login);
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
          <Heading>Информация</Heading>
          <Link href={`${userData?.html_url}`} target="_blank">
            Профиль
          </Link>
          <InfoWrapper>
            <InfoItem>Репозитории</InfoItem>
            <InfoItem>Подписчики</InfoItem>
          </InfoWrapper>
          {/* userData.repos_url */}
        </>
      ) : (
        <>
          <Avatar src={userData?.avatar_url} />
          <UserName>{userData?.login}</UserName>
        </>
      )}
    </Wrapper>
  );
}

export default UserCard;

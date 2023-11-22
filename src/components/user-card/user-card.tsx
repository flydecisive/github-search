import { useState } from "react";
import {
  Wrapper,
  Avatar,
  UserName,
  Text,
  Link,
  InfoWrapper,
  InfoItem,
  InfoItemSpan,
} from "./user-card.styled";
import { getUserInfo } from "../../api";
import format from "date-fns/format";

interface UserCardProps {
  userData: any;
  id: number | any;
}

function UserCard({ userData, id }: UserCardProps) {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCardClick = (e: any) => {
    setShowInfo(!showInfo);
    getUserInfo(userData?.login)
      .then((responseData) => {
        console.log(responseData);
        setUserInfo(responseData);
      })
      .catch((error) => {
        alert("Превышено максимальное количество запросов, попробуйте позже.");
      });
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
          <Text>{`Зарегистрирован: ${
            userInfo ? format(new Date(userInfo?.created_at), "dd.MM.yyyy") : ""
          }`}</Text>
          <Link href={`${userInfo?.html_url}`} target="_blank">
            Профиль
          </Link>
          <InfoWrapper>
            <InfoItem>
              Репозитории{" "}
              <InfoItemSpan>{`${userInfo?.public_repos}`}</InfoItemSpan>
            </InfoItem>
            <InfoItem>
              Подписчики <InfoItemSpan>{`${userInfo?.followers}`}</InfoItemSpan>
            </InfoItem>
          </InfoWrapper>
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

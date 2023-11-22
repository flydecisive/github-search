import { useState, useEffect } from "react";
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
import CardLoader from "../loaders/card-loader";

interface UserCardProps {
  userData: any;
  id: number | any;
}

function UserCard({ userData, id }: UserCardProps) {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>();
  const [cardInfo, setCardInfo] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCardClick = (e: any) => {
    setIsLoading(true);
    setShowInfo(!showInfo);
    getUserInfo(userData?.login)
      .then((responseData) => {
        setUserInfo(responseData);
      })
      .catch((error) => {
        alert("Превышено максимальное количество запросов, попробуйте позже.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isLoading) {
      setCardInfo(<CardLoader></CardLoader>);
    } else {
      setCardInfo(
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
      );
    }
  }, [isLoading, userInfo]);

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
        cardInfo
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

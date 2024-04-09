import FeedWrapper from "@/components/feed-wrapper";
import StickWrapper from "@/components/stick-wrapper";
import Header from "./header";
import UserProgress from "./user-progress";

const Learn = () => {
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
      <StickWrapper>
        <UserProgress
          activCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickWrapper>
    </div>
  );
};

export default Learn;

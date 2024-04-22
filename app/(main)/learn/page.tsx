import FeedWrapper from "@/components/feed-wrapper";
import StickWrapper from "@/components/stick-wrapper";
import Header from "./header";
import UserProgress from "./user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const Learn = async () => {
  const userProgress = await getUserProgress();

  if (!userProgress || !userProgress.activeCourses) {
    redirect("/courses");
  }

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title={userProgress.activeCourses.title} />
      </FeedWrapper>
      <StickWrapper>
        <UserProgress
          activCourse={userProgress.activeCourses}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickWrapper>
    </div>
  );
};

export default Learn;

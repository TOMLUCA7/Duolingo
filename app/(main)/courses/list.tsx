"use client";

import { courses, userProgress } from "@/db/schema";
import Card from "./card";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";
import Link from "next/link";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

const List = ({ courses, activeCourseId }: Props) => {
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      return <Link href={"/learn"}></Link>;
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repet(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};

export default List;

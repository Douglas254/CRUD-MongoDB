import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map(({ title, description, _id }) => (
        <div
          className="p-4 border border-slate-300 flex justify-between gap-5 my-3 items-start"
          key={_id}
        >
          <div className="">
            <h2 className="font-bold text-2xl"> {title}</h2>
            <div>{description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={_id} />
            <Link href={`/editTopic/${_id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

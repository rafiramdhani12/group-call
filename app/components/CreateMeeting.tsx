import {randomID} from "@/utils/helper";
import Link from "next/link";
import React from "react";

const CreateMeeting = () => {
  return (
    <>
      {/* random id dengan 5 character */}
      <Link href={`/room/${randomID(5)}`}>
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">
          Creating Meeting
        </button>
      </Link>
    </>
  );
};

export default CreateMeeting;

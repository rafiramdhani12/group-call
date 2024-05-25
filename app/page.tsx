import Image from "next/image";
import JoinMeeting from "./components/JoinMeeting";
import CreateMeeting from "./components/CreateMeeting";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 min-h-[90v] flex flex-col md:flex-row gap-20 items-center justify-between">
        <div>
          <div className="mb-10">
            <h1 className="text-4xl mb-2">
              video calls and meeting for
              <span className="text-blue-500 font-medium">everyone.</span>
            </h1>
            <p>
              join meetings with simple code and share your screen with other
            </p>
          </div>
          <div>
            <CreateMeeting />
            <JoinMeeting />
          </div>
        </div>
        <Image src={"/vc.svg"} alt="video call" height={600} width={600} />
      </div>
    </>
  );
}

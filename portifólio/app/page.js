import { Contador } from "@/components/Contador";
import { MyButton } from "@/components/MyButton";
import Link from "next/link";

export default function Home() {
  let PI = 3.14159;
  return (
    <div>
      <h1>Welcome to my app</h1>
      <hr />
      <Link href="/taskList">Task List</Link>
      <hr />
      <Link href="/foodList">Food List</Link>
      <hr />
      <p>
        Hello there.
        <br />
        <span className="blueText">How do you do?</span>
      </p>
      <hr />
      <Contador />
      <Contador />
      <hr />
      <MyButton />
      <p>Doing math: {2 * PI}</p>
      <hr />
      <img
        className="avatar"
        src="https://www.w3schools.com/howto/img_avatar.png"
        width={100}
        height={100}
      />
    </div>
  );
}
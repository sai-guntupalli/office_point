import PendingTasks from "../../individual/pending_tasks";
import ProfileCard from "../../individual/profile_card";

export default function HomePage(props) {
  return (
    <>
      <ProfileCard {...props}></ProfileCard>

      <PendingTasks />
    </>
  );
}

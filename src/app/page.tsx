import { TopicCreateForm } from "@/components/topics/topic-create-form";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="cols-span-3">
        <h1 className="text-xl">Top Posts</h1>
      </div>
      <TopicCreateForm />
    </div>
  );
}

import { Sidebar } from "@/components/Sidebar";
import { PromptGenerator } from "@/components/PromptGenerator";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gradient-dark">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-white">
            Market Research Dashboard
          </h1>
          <PromptGenerator />
        </div>
      </main>
    </div>
  );
};

export default Index;
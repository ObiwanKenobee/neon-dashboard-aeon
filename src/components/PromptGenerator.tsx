import { useState } from "react";
import { Copy, Download, Share2 } from "lucide-react";

export const PromptGenerator = () => {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    // Sample prompt for demo
    setPrompt(
      "Analyze emerging trends in consumer goods & retail, focusing on supply chain transparency, sustainability, and ethical sourcing. Evaluate how AI, blockchain, and ESG compliance monitoring are reshaping e-commerce, luxury, beauty, and furniture sectors."
    );
  };

  return (
    <div className="bg-panel p-6 rounded-xl border border-glass backdrop-blur-lg">
      <h2 className="text-2xl font-bold text-white mb-4">AI Prompt Generator</h2>
      
      <div className="space-y-4">
        <button
          onClick={handleGenerate}
          className="w-full px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all animate-glow"
        >
          Generate Market Research Prompt
        </button>
        
        {prompt && (
          <div className="space-y-4">
            <div className="p-4 bg-glass rounded-lg">
              <p className="text-gray-200">{prompt}</p>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-cyber hover:bg-cyber-hover rounded-lg text-white transition-all">
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-eco hover:bg-eco-hover rounded-lg text-white transition-all">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-glass hover:bg-white/20 rounded-lg text-white transition-all">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
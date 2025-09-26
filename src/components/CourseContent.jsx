import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

import { Video, ChevronDown } from "lucide-react";

// Helper to render Preview chip
const PreviewBadge = () => (
  <span className="ml-2 px-4 py-1 rounded-full bg-zinc-600 text-xs font-medium text-zinc-200">
    Preview
  </span>
);

const courseSections = [
  {
    title: "Getting Started (7m)",
    lessons: [
      { title: "Welcome", preview: true },
      { title: "Prerequisites", preview: true },
      { title: "What You'll Learn", preview: true },
      { title: "Setting Up Your Development Environment", preview: true },
      { title: "Source Code" },
      { title: "Questions and Support" },
      { title: "Connect with Me" },
    ],
  },
  {
    title: "Introduction to AI Models (40m)",
    lessons: [
      { title: "Introduction", duration: "0m 36s" },
      { title: "Rise of AI Engineering", preview: true },
      { title: "What are Large Language Models?", preview: true },
      { title: "What Can You Do With Language Models?", duration: "2m 25s" },
      { title: "Understanding Tokens and Context Window", duration: "3m 02s" },
      { title: "Counting Tokens", preview: true },
      { title: "Choosing the Right Model", duration: "5m 02s" },
      { title: "Understanding Model Settings", duration: "8m 46s" },
      { title: "Calling Models", duration: "7m 35s" },
      { title: "Summary" },
    ],
  },
  {
    title: "Setting Up a Modern Full-Stack Project (51m)",
    lessons: [
      { title: "Introduction", duration: "1m 12s" },
      { title: "Setting Up Bun", duration: "1m 31s" },
      { title: "Creating the Project Structure", duration: "2m 48s" },
      { title: "Creating the Backend", duration: "6m 38s" },
      { title: "Managing OpenAI API Key", duration: "5m 15s" },
      { title: "Creating the Frontend", duration: "2m 45s" },
      { title: "Connecting the Frontend and Backend", duration: "5m 13s" },
      { title: "Running Both Apps Together", duration: "3m 23s" },
      { title: "Setting Up TailwindCSS", duration: "3m 35s" },
      { title: "Setting Up Shadcn", duration: "6m 30s" },
      { title: "Formatting Code with Prettier", duration: "5m 02s" },
      { title: "Automating Pre-Commit Checks with Husky", duration: "6m 50s" },
      { title: "Summary" },
    ],
  },
  {
    title: "Project: Building a Chatbot (2h)",
    lessons: [
      { title: "Introduction", duration: "0m 29s" },
      { title: "Building the Backend", duration: "0m 36s" },
      { title: "2.1- Building the Chat API", duration: "6m 26s" },
      { title: "2.2- Testing the API", duration: "1m 57s" },
      { title: "2.3- Managing Conversation State", duration: "6m 22s" },
      { title: "2.4- Input Validation", duration: "5m 48s" },
      { title: "2.5- Error Handling", duration: "2m 18s" },
      { title: "Refactoring the Chat API", duration: "2m 08s" },
      { title: "3.1- Extracting Conversation Repository", duration: "5m 20s" },
      { title: "3.2- Extracting Chat Service", duration: "6m 44s" },
      { title: "3.3- Extracting Chat Controller", duration: "3m 58s" },
      { title: "3.4- Extracting Routes", duration: "4m 51s" },
      { title: "Building the Frontend", duration: "0m 19s" },
      { title: "4.1- Building the ChatBot Component", duration: "7m 28s" },
      { title: "4.2- Handling Form Submission", duration: "9m 23s" },
      { title: "4.3- Calling the Backend", duration: "3m 18s" },
      { title: "4.4- Rendering the Messages", duration: "4m 37s" },
      { title: "4.5- Styling Messages", duration: "4m 35s" },
      { title: "4.6- Rendering Markdown Text", duration: "2m 30s" },
      { title: "4.7- Adding a Typing Indicator", duration: "4m 09s" },
      { title: "4.8- Auto-Scrolling to the Latest Message", duration: "2m 20s" },
      { title: "4.9- Improving Copy Behaviour", duration: "4m 47s" },
      { title: "4.10- Improving the Look and Feel", duration: "8m 04s" },
      { title: "4.11- Handling Errors", duration: "3m 28s" },
      { title: "Refactorings", duration: "1m 28s" },
      { title: "5.1- Extracting TypingIndicator Component", duration: "3m 49s" },
      { title: "5.2- Extracting ChatMessages Component", duration: "5m 19s" },
      { title: "5.3- Extracting ChatInput Component", duration: "8m 28s" },
      { title: "5.4- Recap", duration: "2m 36s" },
      { title: "Summary" },
    ],
  },
  {
    title: "Prompt Engineering (32m)",
    lessons: [
      { title: "What is Prompt Engineering", duration: "2m 12s" },
      { title: "Anatomy of a Good Prompt", duration: "2m 26s" },
      { title: "Providing Context", duration: "4m 03s" },
      { title: "Controlling the Output Format", duration: "2m 32s" },
      { title: "Providing Examples", duration: "2m 44s" },
      { title: "Handling Errors and Edge Cases", duration: "1m 55s" },
      { title: "Reducing Hallucinations", duration: "3m 35s" },
      { title: "Refining Prompts", duration: "4m 06s" },
      { title: "Improving Chatbot Responses", duration: "6m 00s" },
      { title: "Adding Sound Effects", duration: "2m 38s" },
      { title: "Exercises" },
      { title: "Summary" },
    ],
  },
  {
    title: "Building a Review Summerizer (2h)",
    lessons: [
      // add lesson data when available
    ],
  },
  {
    title: "Building with Open Source Models (28m)",
    lessons: [
      { title: "Introduction", duration: "0m 22s" },
      { title: "Why Use Open-Source Models", duration: "1m 48s" },
      { title: "Finding Open-Source Models", duration: "4m 17s" },
      { title: "Calling Hugging Face Models", duration: "5m 35s" },
      { title: "Choosing the Right Model For the Job", duration: "6m 43s" },
      { title: "Running Models Locally", duration: "3m 13s" },
      { title: "Using Hugging Face Models with Ollama", duration: "2m 29s" },
      { title: "Calling Ollama Models", duration: "3m 03s" },
    ],
  },
  {
    title: "Course Wrap Up (1m)",
    lessons: [
      { title: "Course Wrap Up", duration: "1m 20s" },
      { title: "Feedback" },
    ],
  },
];

export default function CourseAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-3"
      defaultValue="section-0"
    >
      {courseSections.map((section, idx) => (
        <AccordionItem
          key={idx}
          value={`section-${idx}`}
          className="bg-black rounded-lg mb-2 border border-zinc-800"
        >
          <AccordionTrigger className="text-sm px-6 py-4 font-semibold text-white hover:text-[#a259ff] flex items-center justify-between w-full">
            <span>{section.title}</span>
            <ChevronDown
              className="ml-2 h-5 w-5 text-[#a259ff] transition-transform duration-200"
              aria-hidden="true"
            />
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 px-8 py-3">
              {section.lessons.length > 0 ? (
                section.lessons.map((lesson, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between text-gray-200 hover:bg-zinc-800 rounded-lg px-3 py-2 transition"
                  >
                    <div className="flex items-center gap-3">
                      <Video className="w-4 h-4 text-[#a259ff]" />
                      <span>{lesson.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {lesson.preview && <span className="ml-2 px-4 py-1 rounded-full bg-zinc-600 text-xs font-medium text-zinc-200">Preview</span>}
                      {lesson.duration && (
                        <span className="text-sm text-gray-400">{lesson.duration}</span>
                      )}
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">Content coming soon.</li>
              )}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

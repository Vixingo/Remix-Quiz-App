import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <div className="font-sans p-4 flex flex-col items-center gap-4 bg-slate-500 h-[100vh] justify-center">
            <h1 className="text-3xl font-bold">Welcome to Remix App!</h1>
            <h3>Are you ready for the Quiz?</h3>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2">
                Start Quiz
            </button>
        </div>
    );
}

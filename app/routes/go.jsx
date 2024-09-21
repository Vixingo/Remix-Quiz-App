import { Link } from "@remix-run/react";

export default function go() {
    return (
        <div className="font-sans p-4 flex flex-col items-center gap-4 bg-slate-500 h-[100vh] justify-center">
            <h1 className="text-3xl font-bold">Welcome to Remix App!</h1>
            <h3>Are you ready for the Quiz?</h3>
            <Link to="/go">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2">
                    Start as
                </button>
            </Link>
        </div>
    );
}

import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Nonifol Nursery" },
        { name: "description", content: "Welcome to Nonifol !" },
        { name: "image", content: "/assets/km.png" },
        { name: "url", content: "https://nonifolnursery.com/" },
    ];
};

export default function Index() {
    return (
        <div className="font-sans p-4 flex flex-col items-center gap-4 bg-slate-500 h-[100vh] justify-center">
            <h1 className="text-3xl font-bold">Welcome to Remix App!</h1>
            <h3>Are you ready for the Quiz?</h3>
            <Link to="/go">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2">
                    Start Quiz
                </button>
                <h1 className="font-extrabold text-9xl  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit assumenda iusto animi sapiente optio, earum
                    modi distinctio quas perspiciatis rerum. Labore et vitae
                    saepe asperiores molestias perferendis itaque facilis. Fuga,
                    placeat, id nam natus maiores quis expedita porro laborum,
                    neque aperiam delectus mollitia labore nemo cupiditate!
                    Vitae rem aspernatur ex ratione eos explicabo fugit quae
                    impedit voluptatum debitis ad libero veritatis odio,
                    molestiae natus a, reiciendis iure non in? Laudantium quis
                    quos ex eaque praesentium vel distinctio incidunt, rem
                    quidem officia perspiciatis enim, et tempore quia aspernatur
                    iure debitis itaque hic quae minus quo aut dolore. Eos velit
                    enim dolorum.
                </h1>
            </Link>
        </div>
    );
}

import { Link } from "react-router-dom";

export default function Card({children, title, image, route}) {

route.str

let router = "/" + route
    return (
        <div className="w-full bg-white rounded-lg shadow-xl lg:flex lg:max-w-xl">
            <img
                className="object-cover rounded-lg w-1/2"
                src={image}
                alt="image"
            />
            <div className="p-8">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600 mb-4">
                    {title}
                </h4>
                <p className="mb-2 leading-normal">
                    {children}
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                <Link to={router}>Click me!</Link>
                </button>
            </div>
        </div>
    );
  };
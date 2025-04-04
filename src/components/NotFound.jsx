import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-black">404</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-700">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

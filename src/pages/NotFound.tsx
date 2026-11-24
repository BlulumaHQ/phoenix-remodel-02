import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-start justify-center gap-8 bg-coal px-5 text-bone md:px-10">
    <span className="kicker">404</span>
    <h1 className="display text-[72px] md:text-[140px]">Page not <span className="text-amber">found</span></h1>
    <Link to="/" className="btn-amber">Back to home</Link>
  </div>
);

export default NotFound;

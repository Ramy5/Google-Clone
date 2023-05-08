import SearchHeader from "@/components/Search/SearchHeader/SearchHeader";
import "./../globals.css";

export const metadata = {
  title: "Search page",
  description: "Search for the text or the image",
  icons: {
    shortcut: "/google-search.png",
  },
};

export default function SearchLayout({ children }) {
  return (
    <div>
      {/* SEARCH HEADER */}
      <SearchHeader />

      {/* BODY CONTENT */}
      {children}
    </div>
  );
}

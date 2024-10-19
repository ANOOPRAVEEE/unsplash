import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

// const url = "https://api.unsplash.com/photos/?client_id=SRLSOk0_pwDdwzmpPRlSz_WdtBXEJIieb32SMXVvR0M";
const clientId = import.meta.env.VITE_API_KEY;
const url = `https://api.unsplash.com/search/photos?client_id=${clientId}&page=1&per_page=12`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  // console.log(response.isLoading);
  // console.log(response);

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading..</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>Error..</h4>
      </section>
    );
  }

  const results = response.data.results;

  return (
    <section className="image-container">
      {results.map((item) => {
        return (
          <img
            src={item.urls.regular}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;

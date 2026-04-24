import StarIcon from "@mui/icons-material/Star";

interface RatingsProps {
  rating: number;
}

export const Ratings = ({ rating }: RatingsProps) => {
  const fullStars = Math.floor(rating);

  return (
    <>
      {Array.from({ length: fullStars }).map((_, index) => (
        <StarIcon
          style={{ width: "20px", height: "20px", color: "#F8C51C" }}
          key={`full-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            index
          }`}
        />
      ))}
    </>
  );
};

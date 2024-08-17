import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const CategorySelection = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    { name: "hematology", link: "hematology" },
    { name: "microbiology", link: "microbiology" },
    { name: "biochemistry", link: "biochemistry" },
    { name: "rapidcard", link: "rapidcard" },
    { name: "consumables", link: "consumables" },
  ];
  return (
    <Box className="CategorySelection">
      {categories.map((category, index) => (
        <Link
          to={`/category/${category.link}`}
          style={{ textDecoration: "none" }}
        >
          <Box
            key={index}
            onClick={() => onSelectCategory(category?.name)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              color: category?.name === selectedCategory ? "white" : "#363b4d",
              background:
                category?.name === selectedCategory ? "#4a7dff" : "white",
              padding: "1rem",
              margin: "1rem",
              border: "1px solid #4A7DFF",
            }}
          >
            {category?.name.toUpperCase()}
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default CategorySelection;

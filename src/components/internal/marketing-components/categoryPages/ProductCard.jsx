import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function ProductCard({ item }) {
  return (
    <Box
      sx={{
        perspective: "1000px",
        transition: "transform 0.4s",
        "& > div, & > div > div": {
          transition: "inherit",
        },
        "&:hover": {
          "& > div": {
            transform: "scale(1.1)",
            "& > div:nth-child(2)": {
              transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
            },
            "& > div:nth-child(3)": {
              transform: "translate3d(45px, 50px, 40px)",
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: "300px",
          width: 320,
          backgroundColor: "#fff",
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="#000">
          {item.name} {item.id}
        </Typography>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",

            border: "1px solid #4A7DFF",
          }}
        >
          <img
            src={item.url}
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent
          sx={{
            alignItems: "self-end",
            justifyContent: "flex-end",
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#302E2B" m={3}>
            Fully Automated Clinical Chemistry Analyzer
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

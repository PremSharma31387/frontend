import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 34,
  height: 155,
  position: "absolute",
});

const Acheivement = () => {
  return (
    <Card sx={{ position: "relative", bgcolor: "#242B2E", color: "white" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop With Zosh
        </Typography>
        <Typography variant="body2">Congratulations 🥳 </Typography>
        <Typography variant="h5" sx={{ my: 3.1 }}>
          {" "}
          420.8k{" "}
        </Typography>

        <Button size="small" variant="contained">
          View Sales
        </Button>

        <TriangleImg src=""></TriangleImg>
        <TrophyImg src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b5eed03-3715-42fd-8716-9b189aa554ad/d9dtwte-f182fd91-a5a5-42c2-8689-6258747a7c16.png/v1/fill/w_894,h_894,strp/trophy_icon_by_papillonstudio_d9dtwte-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzViNWVlZDAzLTM3MTUtNDJmZC04NzE2LTliMTg5YWE1NTRhZFwvZDlkdHd0ZS1mMTgyZmQ5MS1hNWE1LTQyYzItODY4OS02MjU4NzQ3YTdjMTYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.czjzw5LT-abKpTIfLuMmVUITzdH-W_aln-Woi5pQWIQ" />
      </CardContent>
    </Card>
  );
};

export default Acheivement;

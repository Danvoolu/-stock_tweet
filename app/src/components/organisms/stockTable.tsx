import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import axios from "axios";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

type Stock = {
  code: string;
  name: string;
};

export default function StockTable() {
  const [data, setData] = React.useState<Stock[]>([]);
  useEffect(() => {
    axios.get(`/api/stock/stocks`).then((response) => {
      console.log("axios_stock", response);
      setData(response.data);
    });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 700 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>証券コード</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>Tweets</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.code}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.code}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <div>
                    <TwitterIcon sx={{ color: "#1D9BF0" }} />
                    <Link href={`/tweets/${row.code}`}>
                      <a>Link</a>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

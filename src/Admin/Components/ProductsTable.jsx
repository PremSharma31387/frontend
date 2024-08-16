import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  console.log("Products ----->", products);
  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 2000,
      stock: "in_stock",
    };

    // console.log("data", data);

    // Dispatch your action here with the data
    dispatch(findProducts(data));
  }, [products.deletedProduct]);

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.products?.content?.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar src={item.imageUrl} />
                  </TableCell>
                  <TableCell align="left">{item.title}</TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">₹{item.discountedPrice}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeleteProduct(item.id)}
                      variant="outlined"
                      sx={{ borderColor: "red", color: "red" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductsTable;

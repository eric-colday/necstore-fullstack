"use client";

import React, { useContext, useState } from "react";
import styles from "./productInfos.module.css";
import { ThemeContext } from "../../../context/ThemeContext";
import { addToCart } from "../../../redux/cartReducer";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";

const ProductInfos = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [err, setErr] = useState("");

  console.log(err);

  const dispatch = useDispatch();
  return (
    <div className={styles.itemInfo}>
      <h1 className={styles.itemTitle}>{data?.title}</h1>
      <p className={styles.itemPrice}> {data.price} €</p>
      <p className={styles.itemDesc}>{data.description}</p>
      <div className={styles.itemFilter}>
        <p className={styles.itemFilterTitle}>Couleur</p>
        <div className={styles.itemWrap}>
          {data.color?.map((c) => (
            <div
              className={styles.itemColor}
              style={{
                backgroundColor: c,
                cursor: "pointer",
                border: color === c ? "5px solid #C2E5FF" : "1px solid #C2E5FF",
              }}
              key={c}
              onClick={() => setColor(c)}
            ></div>
          ))}
        </div>
        <div className={styles.itemSize}>
          <h4 className={styles.itemFilterTitle}>Size</h4>
          <Box
            sx={{
              minWidth: 120,
              border: "1px solid white",
              borderRadius: "5px",
            }}
            style={
              theme === "dark"
                ? {
                    color: "white",
                  }
                : {
                    color: "black",
                  }
            }
          >
            <FormControl
              fullWidth
              style={
                theme === "dark"
                  ? {
                      color: "white",
                    }
                  : {
                      color: "black",
                    }
              }
            >
              <InputLabel
                id="demo-simple-select-label"
                style={
                  theme === "dark"
                    ? {
                        color: "white",
                      }
                    : {
                        color: "black",
                      }
                }
              >
                Taille
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="size"
                value={size}
                id="size"
                label="Taille"
                onChange={(e) => setSize(e.target.value)}
                style={
                  theme === "dark"
                    ? {
                        color: "white",
                      }
                    : {
                        color: "black",
                      }
                }
              >
                {data.size?.map((s) => (
                  <MenuItem value={s} key={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className={styles.ButtonFlex}>
        <button
          className={styles.itemButton}
          onClick={() => {
            if (!color || !size) {
              setErr("Veuillez sélectionner une couleur et une taille");
            } else {
              dispatch(
                addToCart({
                  id: data.id,
                  title: data.title,
                  price: data.price,
                  image: data.image[0],
                  color,
                  size,
                  quantity,
                })
              );
              setErr("");
            }
          }}
        >
          {data.inStock > 0 ? "Ajouter au panier" : "Rupture de stock"}
        </button>
        {err && <p className="text-red-400">{err}</p>}
      </div>
    </div>
  );
};

export default ProductInfos;

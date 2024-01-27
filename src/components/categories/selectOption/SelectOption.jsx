"use client";

import { ThemeContext } from "../../../context/ThemeContext";
import React, { useContext, useState } from "react";
import styles from "./selectOption.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProductSelected from "../productSelected/ProductSelected";

const SelectOption = ({ page, cat }) => {
  const { theme } = useContext(ThemeContext);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.categorieItems}>
        <div className={styles.categorieSelect}>
          <h4 className="">Filtrer par:</h4>
          <div className={styles.categorieFilter}>
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
                  Couleur
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  name="color"
                  id="color"
                  label="Couleur"
                  onChange={handleFilters}
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
                  <MenuItem value="white">white</MenuItem>
                  <MenuItem value="wlack">wlack</MenuItem>
                  <MenuItem value="red">red</MenuItem>
                  <MenuItem value="blue">blue</MenuItem>
                  <MenuItem value="yellow">yellow</MenuItem>
                  <MenuItem value="black">Black</MenuItem>
                </Select>
              </FormControl>
            </Box>
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
                  id="size"
                  label="Taille"
                  onChange={handleFilters}
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
                  <MenuItem value="XS">XS</MenuItem>
                  <MenuItem value="S">S</MenuItem>
                  <MenuItem value="M">M</MenuItem>
                  <MenuItem value="L">L</MenuItem>
                  <MenuItem value="XL">XL</MenuItem>
                  <MenuItem value="XXL">XXL</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className={styles.categorieSelect}>
          <h4 className="text-lg font-semibold">Trier par :</h4>
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
                Choix
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="sort"
                value={sort}
                id="sort"
                label="Choix"
                onChange={(e) => setSort(e.target.value)}
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
                <MenuItem value="newest">Newest</MenuItem>
                <MenuItem value="asc">price (asc)</MenuItem>
                <MenuItem value="desc">price (desc)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <ProductSelected
        cat={cat}
        page={page}
        filters={filters}
        sort={sort}
      />
    </div>
  );
};

export default SelectOption;

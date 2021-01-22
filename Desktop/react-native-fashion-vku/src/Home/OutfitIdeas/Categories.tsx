import React from "react";
import { ScrollView, View } from "react-native";

import Category from "./Category";

const categories = [
  {
    id: "shirt",
    title: "Sơ mi",
    color: "#FFE8E9",
  },
  {
    id: "tee",
    title: "Áo thun",
    color: "#F1E0FF",
  },
  {
    id: "paint",
    title: "Quần",
    color: "#BFEAF5",
  },
  {
    id: "Shoes",
    title: "Giày",
    color: "#BFEAF5",
  },
  {
    id: "wallet",
    title: "Túi & Ví",
    color: "#FFE8E9",
  },
];

const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

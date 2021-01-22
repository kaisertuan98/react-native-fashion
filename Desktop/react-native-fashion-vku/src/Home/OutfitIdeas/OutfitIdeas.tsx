import React, { useState } from "react";
import { useTiming } from "react-native-redash";

import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Background from "./Background";
import Card from "./Card";
import Categories from "./Categories";

const cards = [
  {
    index: 3,
    source: require("../../Authentication/assets/i4.png"),
  },
  {
    index: 2,
    source: require("../../Authentication/assets/i3.png"),
  },
  {
    index: 1,
    source: require("../../Authentication/assets/i6.png"),
  },
  {
    index: 0,
    source: require("../../Authentication/assets/i7.png"),
  },
];

const step = 1 / (cards.length - 1);

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const aIndex = useTiming(currentIndex);
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="TRANG PHỤC GỢI Ý"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Categories />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                index={index}
                aIndex={aIndex}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                {...{ source, step }}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;

import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Box, Button, Text } from "../../components";

import Card, { CardType } from "./Card";
import AddCard from "./AddCard";

interface CheckoutProps {
  minHeight: number;
}

const cards = [
  {
    id: 0,
    type: CardType.VISA,
    last4digits: 5467,
    expirationDate: "05/24",
  },
  {
    id: 1,
    type: CardType.MASTERCARD,
    last4digits: 2620,
    expirationDate: "02/24",
  },
];

interface LineItemProps {
  label: string;
  value: number;
}

const LineItem = ({ label, value }: LineItemProps) => {
  return (
    <Box flexDirection="row" paddingVertical="s">
      <Box flex={1}>
        <Text variant="title3" color="background">
          {label}
        </Text>
      </Box>
      <Box>
        <Text color="primary" variant="title3">
          {value}₫
        </Text>
      </Box>
    </Box>
  );
};

const Checkout = ({ minHeight }: CheckoutProps) => {
  const [selectedCard, setSelectedCard] = useState(cards[0].id);
  return (
    <Box flex={1} backgroundColor="secondary" style={{ paddingTop: minHeight }}>
      <Box flex={1} padding="m">
        <ScrollView
          style={{ flexGrow: 0 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <AddCard />
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              selected={selectedCard === card.id}
              onSelect={() => setSelectedCard(card.id)}
            />
          ))}
        </ScrollView>
        <Box marginTop="xl">
          <Text color="background" variant="title3">
            Địa chỉ giao hàng
          </Text>
          <Box flexDirection="row" opacity={0.5} paddingVertical="m">
            <Box flex={1}>
              <Text color="background">
                Đại học Công nghệ thông tin Việt Hàn{" "}
              </Text>
              <Text color="background">Hòa Quý, Ngũ Hành Sơn, Tp. Đà Nẵng</Text>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Text color="background">Thay đổi</Text>
            </Box>
          </Box>
          <LineItem label="Tổng số mặt hàng (4)" value={2296000} />
          <LineItem label="Giao hàng tiêu chuẩn" value={30000} />
          <LineItem label="Tổng tiền thanh toán" value={2326000} />
        </Box>
        <Box
          paddingVertical="l"
          alignItems="center"
          justifyContent="flex-end"
          flex={1}
        >
          <Button
            label="Hoàn tất thanh toán"
            variant="primary"
            onPress={() => null}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;

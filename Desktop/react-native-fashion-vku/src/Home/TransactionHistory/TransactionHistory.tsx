import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet, Dimensions } from "react-native";
import moment from "moment";

import {
  Box,
  Header,
  Text,
  makeStyles,
  Theme,
  ScrollableContent,
} from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Graph, { DataPoint } from "./Graph";
import Transaction from "./Transaction";

const ASPECT_RATIO = 5.5;
const footerHeight = Dimensions.get("window").width / ASPECT_RATIO;

const startDate = new Date("2020-09-01").getTime();
const endDate = new Date("2021-04-01").getTime();
const numberOfMonths = moment(endDate).diff(moment(startDate), "month");

const data: DataPoint[] = [
  {
    date: new Date("2020-09-01").getTime(),
    value: 449.0,
    color: "primary",
    id: 245673,
  },
  {
    date: new Date("2020-12-01").getTime(),
    value: 1298.0,
    color: "graph1",
    id: 245672,
  },
  {
    date: new Date("2021-02-01").getTime(),
    value: 799.0,
    color: "graph2",
    id: 245674,
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  const styles = useStyles();
  return (
    <ScrollableContent>
      <Box flex={1} backgroundColor="background">
        <Header
          title="Lịch sử giao dịch"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{ icon: "share", onPress: () => true }}
        />
        <Box padding="m" flex={1}>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box>
              <Text variant="header" color="secondary" opacity={0.3}>
                LỊCH SỬ CHI TIÊU
              </Text>
              <Text variant="title1">2.296.000₫</Text>
            </Box>
            <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
              <Text color="primary">Thời gian</Text>
            </Box>
          </Box>
          <Graph
            data={data}
            startDate={startDate}
            numberOfMonths={numberOfMonths}
          />
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {data.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ScrollView>
        </Box>
      </Box>
    </ScrollableContent>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));

export default TransactionHistory;

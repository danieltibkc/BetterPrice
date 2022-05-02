import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import NavigateButton from "../components/UI/NavigateButton";
import Background from "../components/UI/Background";
import { Globals } from "../constants/styles";
import Checkbox from "expo-checkbox";
import Card from "../components/UI/Card";
import { useState } from "react";

const ResultsScreen = ({ navigation, route }) => {
  const { items, base } = route.params;

  const handleGoToForm2 = () => {
    navigation.goBack();
  };

  let initialItemsState = items.map((e) => ({ ...e, check: false }));

  const [itemsCond, setItemsCond] = useState(initialItemsState);
  const [totalPrice, setTotalPrice] = useState(base);

  const calculateTotal = (item) => {
    const addRemove = item.check ? +item.amount : -item.amount;
    setTotalPrice(totalPrice + addRemove);
  };

  const toggleCheckbox = (cb, idx) => {
    const checkboxData = [...itemsCond];
    checkboxData[idx].check = !checkboxData[idx].check;
    setItemsCond(checkboxData);
    calculateTotal(cb);
  };

  const AddItem = () => {
    return itemsCond.map((cb, idx) => (
      <View style={[styles.rowContainer, { marginVertical: 20 }]} key={cb.id}>
        <View style={styles.powerUpContainer}>
          <Checkbox
            value={cb.check}
            onValueChange={() => toggleCheckbox(cb, idx)}
            style={styles.checkboxStyle}
            color={Globals.colors.teal500}
          />
        </View>

        <Card style={styles.powerUpTextContainer}>
          <Text style={styles.addAmenityTextStyle}>{cb.description}</Text>
        </Card>

        <Text style={styles.addAmenityPriceStyle}>
          + ${cb.amount.toFixed(2)}
        </Text>
      </View>
    ));
  };

  return (
    <Background>
      <View style={styles.rootContainer} accessibilityHint="ResultsScreen">
        <NavigateButton
          onPress={handleGoToForm2}
          accessibilityHint="goToForm2Button"
          direction="back"
        />
        <View style={styles.linkContainer}>
          <Text style={[styles.textBase, { fontSize: 48 }]}>Base price</Text>

          <View style={[styles.rowContainer, { margin: 16 }]}>
            <Text style={[styles.textBase, { color: Globals.colors.teal500 }]}>
              ${base.toFixed(2)}
            </Text>
            <Text style={styles.textBase}>/ night</Text>
          </View>

          <AddItem />
          <View
            style={[
              styles.rowContainer,
              { alignItems: "center", marginVertical: 40 },
            ]}
          >
            <View style={styles.totalContainer}>
              <Text style={styles.totalTextStyle}>Total</Text>
            </View>
            <Text style={[styles.textBase, { color: "#4c4c4c" }]}>
              ${totalPrice.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </Background>
  );
};

ResultsScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.func,
    items: PropTypes.array,
    base: PropTypes.number,
  }),
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  linkContainer: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  textBase: {
    fontSize: 24,
    fontWeight: "bold",
    color: Globals.colors.text,
  },
  totalContainer: {
    backgroundColor: Globals.colors.teal500,
    paddingVertical: 24,
    paddingHorizontal: 80,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginHorizontal: 32,
  },
  totalTextStyle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  addAmenityPriceStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4c4c4c",
    alignSelf: "center",
  },
  addAmenityTextStyle: {
    padding: 8,
    fontSize: 18,
    alignSelf: "center",
  },
  powerUpTextContainer: {
    minWidth: 75,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  checkboxStyle: {
    width: 32,
    height: 32,
  },
  powerUpContainer: {
    minWidth: 75,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
});

export default ResultsScreen;

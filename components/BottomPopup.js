import BottomSheet from "react-native-simple-bottom-sheet";
import react from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function BottomPopup() {
  return (
    <View style={{ flex: 1 }}>
      <BottomSheet isOpen>
        {(onScrollEndDrag) => (
          <ScrollView onScrollEndDrag={onScrollEndDrag}>
            <View>
              <Text>Your prediction is under</Text>

              <Text>Entry Tickets</Text>

              <View>
                {[...Array(10)].map((_, index) => (
                  <View key={`${index}`} style={styles.listItem}>
                    <Text>{index + 1}</Text>
                  </View>
                ))}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>You Can Win</Text>

                <Text style={{ marginLeft: 320, textSize: 25 }}>Total</Text>
                <MaterialIcons name="stars" size={15} color="gold" />
                <Text>5</Text>
              </View>
              <View>
                <Text style={{ color: "green" }}>$2000</Text>
              </View>

              <Button title="Submit My Prediction"></Button>
            </View>
          </ScrollView>
        )}
      </BottomSheet>
    </View>
  );
}
export default BottomPopup;

const styles = StyleSheet.create({
  listItem: {
    color: "black",
    alignItems: "center",
  },
});

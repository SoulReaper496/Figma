import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Modal,
} from "react-native";

export default class BottomPopup extends Component {
  constructor() {
    super();
    this.state = {
      showMe: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.showMe}
          onRequestClose={() => {
            console.warn("closing modal");
          }}
        >
          <View style={styles.modalView}>
            <Text style={{ alignItems: "center" }}>Hey.Modal is open now</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  showMe: false,
                });
              }}
            >
              <Text style={styles.closeText}>Submit Application</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* To open  Modal  */}
        <TouchableOpacity
          onPress={() => {
            this.setState({
              showMe: true,
            });
          }}
        >
          <Text style={styles.openText}>ToggleModal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "#aaa",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    backgroundColor: "#333",
    color: "#bbb",
    padding: 5,
    margin: 20,
  },
  openText: {
    backgroundColor: "#333",
    color: "#bbb",
    padding: 5,
    margin: 20,
  },
});

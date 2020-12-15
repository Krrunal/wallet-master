import React, { useContext, useEffect, useState } from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
const { height, width } = Dimensions.get('window');
import { BgView } from "../../components/Layouts";
import { Paragraph, Lead } from "../../components/Typography";
import Button from "../../components/Button";
import SnowflakeContext from "../../context/SnowFlake/snowflakeContext";
import AsyncStorage from "@react-native-community/async-storage";



const AuthLanding = ({ navigation }) => {
  const [wallet_address_Value, setwallet_address_Value] = useState('');
  const onSubmit = async () => {
    const address = await AsyncStorage.getItem('@wallet_address_key');
    const hydroId = await AsyncStorage.getItem('@hydro_id_key');
    console.log('wallet_address_key--------------------------->', address,)
    console.log('Hydro----', hydroId);
    setwallet_address_Value(address);
    if (address, hydroId !== null) {

      navigation.navigate("app", { screen: "home", params: { address, hydroId } });
    } else {

      navigation.navigate("register");
    }


  };

  return (
    <BgView>
      <View style={styles.topContainer}>

        <Image style={styles.logo} source={require("../../assets/images/logo.png")} />

        <Lead style={styles.testVersion}>(Alpha Test Version)</Lead>

        <Image style={styles.hydro} source={require("../../assets/images/mist.png")} />

        <Paragraph style={styles.paragraph}>
          Register now to create your digital identity, transact and use the hydro
          protocols to secure who you are online.
        </Paragraph>

        <View style={styles.buttonContainer}>
          <Button text="Get Started" onPress={onSubmit} />
          <Button text="Recover" style={styles.recover} />
        </View>
     
      </View>
      <Text style={{marginLeft:5}}>versionName "1.1"</Text>
    </BgView>
  );
};

const styles = StyleSheet.create({

  topContainer: {
    alignItems: 'center',
    paddingTop: width * 0.08,
    flex: 1
  },

  logo: {
    resizeMode: "contain",
    width: width * 0.4,
  },

  hydro: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: "contain",
    marginTop: width * 0.1
  },

  testVersion: {
    textAlign: "center",
    paddingTop: width * 0.03,
  },

  paragraph: {
    textAlign: "center",
    marginTop: width * 0.1,
    paddingHorizontal: width * 0.03
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: width * 0.040,
    width: width
  },

  recover: {
    marginVertical: 15
  }
})

export default AuthLanding;

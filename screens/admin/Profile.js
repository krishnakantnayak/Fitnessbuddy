import { StyleSheet, View,Image,ScrollView, Text } from "react-native";
import React from "react";
import { ViewComponent } from "react-native";
import { DataTable } from 'react-native-paper';
// import { ScrollView } from "react-native-web"; #need enable when using web as output

const Profile = () => {
  const Users = {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  return (
    <ScrollView style={styles.Container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} src={Users.avatarUrl} />
       <Text style={{ fontSize: 25, fontWeight: "bold",color:"darkgrey" }}>
          {Users.fullName}</Text>
        <Text style={{ fontSize: 20,color:"grey" }}>id: Afkh01</Text>
      </View>
      

      <View >
        <View style={[styles.fieldSet,styles.detailsContainer]}>
         <Text style={styles.legend}>Personal Details</Text>
          <DataTable>
            <DataTable.Row>
            <DataTable.Cell>Phone:</DataTable.Cell>
                <DataTable.Cell>7777777777</DataTable.Cell>
            </DataTable.Row>
                
           
            <DataTable.Row>
                <DataTable.Cell>Age:</DataTable.Cell>
                <DataTable.Cell>77</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Sex:</DataTable.Cell>
                <DataTable.Cell>Male</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Weight:</DataTable.Cell>
                <DataTable.Cell>80</DataTable.Cell>
            </DataTable.Row>
            </DataTable>
          
        </View>
      </View>

      <View >
      <View style={[styles.fieldSet,styles.detailsContainer]}>
      <Text style={styles.legend}>Subscritpion Details</Text>
          <DataTable>
            <DataTable.Row>
                <DataTable.Cell>DOJ:</DataTable.Cell>
                <DataTable.Cell>25 Jul,2023</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Plan:</DataTable.Cell>
                <DataTable.Cell>Yearly</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Dues:</DataTable.Cell>
                <DataTable.Cell>0</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Last Payment:</DataTable.Cell>
                <DataTable.Cell>25 July,2023</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Next Payment:</DataTable.Cell>
                <DataTable.Cell>25 July,2024</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
          
        </View>
      </View>
      <View >
        <View style={[styles.fieldSet,styles.detailsContainer]}>
      <Text style={styles.legend}>Subscritpion Details</Text>
          <DataTable>
            <DataTable.Row>
                <DataTable.Cell>Attendace:</DataTable.Cell>
                <DataTable.Cell>27/33</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Goal:</DataTable.Cell>
                <DataTable.Cell>Weight Loss</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Improvement:</DataTable.Cell>
                <DataTable.Cell>Bad</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Last Payment:</DataTable.Cell>
                <DataTable.Cell>25 July,2023</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Next Payment:</DataTable.Cell>
                <DataTable.Cell>25 July,2024</DataTable.Cell>
            </DataTable.Row> 
          </DataTable>
          
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#dbdada",
    flexDirection: "column",
    padding: 10,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },

  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  detailsContainer: {
    paddingTop: 10,
    margin: 10,
    backgroundColor: "whitesmoke",
    borderRadius:10,
  },
  fieldSet:{
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#000'
},
legend:{
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF'
}
});



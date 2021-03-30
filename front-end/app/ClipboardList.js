import React, { useEffect, useState } from "react";
import db from './firebase.config.js';

import Moment from 'moment';
import firebase from 'firebase';

import {
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Clipboard,
  RefreshControl,
} from "react-native";


const Item = ({ date, content }) => {
  const writeToClipboard = async () => {
    await Clipboard.setString(content);
    alert("Copied to Clipboard!");
  };
  return (
    <TouchableOpacity style={styles.item} onPress={writeToClipboard}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.clipboardContent}>{content}</Text>
    </TouchableOpacity>
  );
};

const ClipboardList = () => {
  let url = "https://my.api.mockaroo.com/clipboardcontent.json?key=a7c3ef30";
  let [data, loadData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [refreshing, setRefreshing] = React.useState(false);

  const [blogs,setBlogs]=useState([]);
  
  const temp = [];


  

  const fetchBlogs=async()=>{
    const response=db.collection('things');
    const data=await response.get();
    data.docs.forEach(item=>{
      console.log(item.data());
      //temp.push(item.data());
      let x = item.data();
      x.date=Moment(item.date).format('MMMM Do, YYYY H:mma').toString();
      temp.push(x);
      console.log(temp);
      loadData(temp)
    });
  };



  useEffect(() => {
    fetchBlogs();
    setIsLoading(false);
  }, []);

  console.log(blogs);

let things = db.collection("/things");
  try {
    things
      .add({
      content: "the other sample data",
      date: Date.now(),
      key:1,
      name: "tomato",
      title: "ball"
      });
  } catch (err) {
    console.log(err);
  }


    
 


  const renderItem = ({ item }) => (
    <Item date={item.date} content={item.content} />
  );
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       loadData(json);
  //       console.log(json);
  //       setIsLoading(false);
  //     });
  // }, []);

  return isLoading ? (
    <ActivityIndicator size="large" />
  ) : (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={styles.list}
      // refreshControl={
      //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      // }
      keyExtractor={(item, index) => {
        return index.toString();
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    minWidth: "85%",
  },
  date: {
    fontSize: 12,
    color: "darkgray",
  },
  clipboardContent: {
    fontSize: 18,
  },
  list: { flex: 1 },
});

export default ClipboardList;
import React from 'react';
import { Text } from 'react-native-paper';

const AppText = ({value, color}:{value:String | Number, color?:string}) => {
  return (
    <Text style={{color:color ?? 'grey'}} variant="displayLarge">{value.toString()}</Text>
  );
};

export default AppText
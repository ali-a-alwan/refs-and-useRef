import React, { useRef } from "react";
import { View, TextInput, Text, Button } from "react-native";

const MyComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <View>
      <TextInput
        ref={inputRef}
        placeholder="Enter some text"
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Focus input" onPress={focusInput} />
    </View>
  );
};

export default MyComponent;
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.inputWrapper}>
      <TextInput style={styles.input} placeholder="What's your goal?" />
      <Button title="Add" />
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    flex: 1
  }
})

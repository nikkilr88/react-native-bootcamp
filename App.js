import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  FlatList
} from 'react-native'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [goals, setGoals] = useState([
    { key: Math.random().toString(), value: 'Learn React Native' }
  ])

  const handleTextChange = textValue => {
    setInputValue(textValue)
  }

  const handleAddGoal = () => {
    setGoals(prevGoals => [
      ...prevGoals,
      { key: Math.random().toString(), value: inputValue }
    ])
    setInputValue('')
  }

  return (
    <View style={styles.view}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={inputValue}
          style={styles.input}
          placeholder="What's your goal?"
          onChangeText={handleTextChange}
        />
        <Button title="Add" onPress={handleAddGoal} />
      </View>
      <FlatList
        data={goals}
        renderItem={goal => (
          <View style={styles.listItem}>
            <Text>{goal.item.value}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    paddingVertical: 50,
    paddingHorizontal: 25,
    backgroundColor: 'whitesmoke',
    flex: 1
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    flex: 1
  },
  listItem: {
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 5
  }
})

export default App

import { View, Text } from 'react-native'
import React from 'react'
import {take, put, call, fork} from 'redux-saga'

const ReactSagaScreen = () => {
    const [items, setItems] = React.useState([])
    const [isFetching, setIsFetching] = React.useState(false)
    const [failure, setFailure ] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState(undefined)


    const apiRequest = () => {
        setIsFetching(true)
    }

    const apiSuccess = (arg) => {
        setIsFetching(false);
        setItems(arg);
        setFailure(false);
        setErrMsg(undefined)
    }

    const apiFailure = (arg) => {
        setIsFetching(false)
        setFailure(true)
        setErrMsg(arg)
    }

    useEffect(() => {
      
    
      return () => {
        
      }
    }, [])
    
    
    
  return (
    <View>
      <Text>ReactSagaScreen</Text>
    </View>
  )
}

export default ReactSagaScreen
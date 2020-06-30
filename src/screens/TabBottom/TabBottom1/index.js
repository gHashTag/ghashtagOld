// @flow
import React, { memo, useEffect, useState } from 'react'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { Analytics } from 'aws-amplify'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import { useTheme } from '@react-navigation/native'
import GallerySwiper from 'react-native-gallery-swiper'
import _ from 'lodash'
import { Gallery } from '../../../models'
import { Loading } from '../../../components'

type TabBottom1T = {
  textStyle?: TextStyleProp,
  viewStyle?: ViewStyleProp
}

const TabBottom1 = memo<TabBottom1T>(() => {
  const [loading, setLoading] = useState(false)
  const [elem, setElem] = useState([])
  const {
    colors: { backgroundColor }
  } = useTheme()

  const getData = async () => {
    setLoading(true)
    try {
      const array = await DataStore.query(Gallery, Predicates.ALL, {
        page: 0,
        limit: 100
      })
      const random = _.shuffle(array)
      setElem(random)
      setLoading(false)
    } catch (err) {
      Analytics.record({
        name: 'TabBottom1',
        attributes: err
      })
    }
  }
  // const createGallery = async (values) => {
  //   const uri = await DataStore.save(new Gallery({ ...values }))
  //   console.log('uri', uri)
  // }

  // const deleteJob = async () => {
  //   //await DataStore.clear(Gallery)
  //   const job = await DataStore.query(Gallery, '297211eb-d5ae-496c-a099-5e7417efbc75')
  //   const del = await DataStore.delete(job)
  //   console.warn('del', del)
  // }

  useEffect(() => {
    //createGallery({ uri: 'https://s3.eu-central-1.wasabisys.com/ghashtag/Photo/Tab1/30.JPG' })
    //deleteJob()
    setLoading(true)
    getData()
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <GallerySwiper images={elem} initialNumToRender={2} sensitiveScroll={false} style={{ backgroundColor }} />
      )}
    </>
  )
})

export { TabBottom1 }

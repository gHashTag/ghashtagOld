// @flow
import React, { memo, useEffect, useState } from 'react'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { Analytics } from 'aws-amplify'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import { useTheme } from '@react-navigation/native'
import GallerySwiper from 'react-native-gallery-swiper'
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
        limit: 1000
      })
      //console.log('array', array)
      //const job = await DataStore.query(Element, 'f609910e-a66d-45c1-a46d-38a149d6dccd')
      //await DataStore.delete(job)
      setElem(array)
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
  //   const job = await DataStore.query(Gallery, 'eac78c40-f390-4023-8978-848e6861c7e3')
  //   const del = await DataStore.delete(job)
  //   console.warn('del', del)
  // }

  useEffect(() => {
    //createGallery({ uri: 'https://s3.eu-central-1.wasabisys.com/ghashtag/Photo/Tab1/31.JPG' })
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

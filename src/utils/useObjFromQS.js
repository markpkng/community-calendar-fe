import React from 'react'
import {useLocation} from 'react-router-dom'

const useObjFromQS = () => {
  // set up filter
  let pageLocation = useLocation()
  // create a search params object
  const urlQS = new URLSearchParams(pageLocation.search)
  // filters object which will be passed to apollo query
  let filtersObj = {
    index: undefined,
    location: undefined,
    ticketPrice: undefined,
    dateRange: undefined,
    tags: undefined,
  }

  urlQS.forEach((v, k) => {
    // get searchText from query string and format string for gql query
    if (/searchtext/i.test(k)) {
      filtersObj.index = v
    }
    // create array of tags from query string
    else if (/tag/i.test(k)) {
      if (!filtersObj.tags) filtersObj.tags = []
      filtersObj.tags.push(v)
    }
    // create array of ticketPrices from query string
    else if (/minprice/i.test(k)) {
      if (!filtersObj.ticketPrice) filtersObj.ticketPrice = []
      let ind = k.slice(k.indexOf('-') + 1)
      filtersObj.ticketPrice[ind] = {
        ...filtersObj.ticketPrice[ind],
        minPrice: +v,
      }
    } else if (/maxprice/i.test(k)) {
      if (!filtersObj.ticketPrice) filtersObj.ticketPrice = []
      let ind = k.slice(k.indexOf('-') + 1)
      filtersObj.ticketPrice[ind] = {
        ...filtersObj.ticketPrice[ind],
        maxPrice: +v,
      }
    }
    // create location filter object from query string
    else if (/(user(latitude)|(longitude))|(radius)/gi.test(k)) {
      if (!filtersObj.location) filtersObj.location = {}
      if (k === 'userLatitude' || k === 'userLongitude') {
        filtersObj.location[k] = parseFloat(v)
      } else if (k === 'radius') {
        filtersObj.location[k] = parseInt(v)
      }
    }
    // create date filter object from query string
    else if (/(start)|(end)/i.test(k)) {
      if (!filtersObj.dateRange) filtersObj.dateRange = {}
      filtersObj.dateRange[k] = v
    }
  }) // end forEach

  return filtersObj
}

export default useObjFromQS
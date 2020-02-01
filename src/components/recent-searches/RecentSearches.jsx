import React from 'react'
import {buildQS} from '../../utils'
import {useHistory} from 'react-router-dom'

const RecentSearches = ({recentSearches = null}) => {
  const rccHistory = useHistory()
  return (
    <div className='is-flex'>
      <p className='has-text-grey-lighter'>
        Recent Searches:&nbsp;
        {recentSearches.length &&
          recentSearches.map((search, ind) => {
            let filterCount = Object.keys(search).reduce((acc, curr) => {
              return !/(index)|(__typename)/i.test(curr) && search[curr]
                ? (acc += 1)
                : acc
            }, 0)
            return (
              <span
                key={`${JSON.stringify(search)}-${ind} `}
                onClick={() => {
                  let qsObj = {
                    searchText: search.index,
                  }

                  // if filters exist flatten into new object
                  if (search) {
                    // if "tags" exist add to qs
                    if (search.tags) {
                      search.tags.forEach((tag, ind) => {
                        qsObj[`tag${ind}`] = tag
                      })
                    }
                    // if "locations" exist add to qs
                    if (search.location) {
                      Object.keys(search.location).forEach(k => {
                        if (!/^__typename/.test(k))
                          qsObj[k] = search.location[k]
                      })
                    }
                    // if "dateRange" exist add to qs
                    if (search.dateRange) {
                      Object.keys(search.dateRange).forEach(k => {
                        if (!/^__typename/i.test(k))
                          qsObj[k] = search.dateRange[k]
                      })
                    }
                    // if "ticketPrice" exist add to qs
                    if (search.ticketPrice) {
                      search.ticketPrice.forEach((priceRange, ind) => {
                        qsObj[`minPrice-${ind}`] = priceRange.minPrice
                        qsObj[`maxPrice-${ind}`] = priceRange.maxPrice
                      })
                    }
                  }
                  rccHistory.push(`/search${buildQS(qsObj)}`)
                }}
                className='has-text-link is-clickable'
              >
                {`${search.index}${filterCount ? `(${filterCount})` : ''}`}
                {ind !== recentSearches.length - 1 && ', '}
              </span>
            )
          })}
      </p>
    </div>
  )
}

export default RecentSearches

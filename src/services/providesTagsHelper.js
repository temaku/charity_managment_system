
export function providesTagsHelper(resultsWithIds, tagType, ID) {
  const {data} = resultsWithIds
  
  const _data = data.data

    return _data
      ? [
          { type: tagType, id: ID },
          ..._data.map(({ id }) => ({ type: tagType, id })),
        ]
      : [{ type: tagType, id: ID }]
  }

  
export function providesTagsHelperObject(resultsWithIds, tagType, ID) {
  
    return resultsWithIds ? [
          { type: tagType, id: ID }, { type: tagType, id: resultsWithIds.id },
        ]
      : [{ type: tagType, id: ID }]
  }


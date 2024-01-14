import { useEffect, useState } from 'react'
import './App.css'
import { fetchData } from './api/common'

function App() {
  const [data, setData] = useState(null)
  // const iframeRef = useRef(null)
  useEffect(() => {
    if (!data) {
      fetchData().then(d => {
        setData(d)
      })
    }
  }, [data])
  const vikingData = data?.teams?.find?.(d => d?.id === 7)
  return (
    <>
      <h1 style={{userSelect: 'none'}}>
        {(vikingData?.place === 1) ? 'Yes sir!': 'Not yet...' }
      </h1>
      { vikingData &&
        <p style={{ userSelect: 'none' }}>
          {vikingData?.name} Placement: {vikingData?.place}
        </p>
      }
    </>
  )
}

export default App

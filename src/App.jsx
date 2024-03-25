import { useEffect, useState } from 'react'
import './App.css'
import { fetchData } from './api/common'
import { Rain } from 'react-rainfall'

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
    <div style={{position: 'fixed', inset: 0}}>
      <Rain />
    </div>
      <h1 style={{userSelect: 'none'}}>
        {(vikingData?.played > 0 && +vikingData?.place === 1) ? 'letsgoooo' : 'Nope 🥲'}
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

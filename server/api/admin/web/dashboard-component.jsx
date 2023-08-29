// my-dashboard-component.jsx
import React, { useState, useEffect } from 'react';
import { ApiClient } from 'adminjs'
import { Box, H3, H4,  } from '@adminjs/design-system'

const api = new ApiClient()

const Dashboard = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    api.getDashboard().then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <Box variant="grey">
      <Box variant="white" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        {/* some: { data.some } */}
        <img src={""} />
        <H3>
          This is an automated administrator with the help of the AdminBro framework, it is built with reactjs and is fully customized
        </H3>
      </Box>
      <Box variant="white" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        {/* some: { data.some } */}
        <H4>
          Cristhian Pereira
        </H4>
      </Box>
    </Box>
  )
}

export default Dashboard
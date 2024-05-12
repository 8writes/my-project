/** @format */
'use client'
import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'>
          <Tab label='Mission Statement' {...a11yProps(0)} />
          <Tab label='Vision Statement' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <p className='text-slate-700 py-4 text-base leading-relaxed tracking-wider font-medium'>
          To ensure that customers’ construction needs and demands are met
          through the most accessible and affordable way that creates, captures
          and sustains value of all stakeholders.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <p className='text-slate-700 py-4 text-base leading-relaxed tracking-wider font-medium'>
          To be the top civil and electrical engineering company in Nigeria,
          delivering superior quality service, geared towards customer’s
          satisfaction.
        </p>
      </CustomTabPanel>
    </Box>
  )
}

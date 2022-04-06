import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import checkNotAddress from '../functions/util/checkNotAddress'

import MintSearchBar from '../components/search/MintSearchBar'
import MintFooter from '../components/footer/MintFooter'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintSubHeader from '../components/header/MintSubHeader'
import MintSearchContents from '../components/search/MintSearchContents'
import { Box } from '@mui/material'

function MintSearch({ bright }) {
  document.title = 'MINT - 검색 결과'

  const navigate = useNavigate()
  const [searchList, setSearchList] = useState([])
  console.log(searchList, '검색결과')

  const Header = () => {
    return (
      <>
        <MintSubHeader content="검색" />
        <Box sx={{ padding: '10px 20px 0 20px' }}>
          <MintSearchBar setSearchList={setSearchList} />
        </Box>
      </>
    )
  }
  const Contents = () => <MintSearchContents searchList={searchList} />
  const Footer = () => <MintFooter />

  useEffect(() => {
    checkNotAddress(() => navigate('/address'))
  })
  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}

export default MintSearch

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import checkNotAddress from '../functions/util/checkNotAddress'

import MintFooter from '../components/footer/MintFooter'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintSubHeader from '../components/header/MintSubHeader'
import MintSearchContents from '../components/search/MintSearchContents'

function MintSearch({ bright }) {
  const navigate = useNavigate()

  const Header = () => <MintSubHeader content="검색" />
  const Contents = () => <MintSearchContents />
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

import React from 'react'

import MintPageTemplate from '../components/common/MintPageTemplate'
import MintFooter from '../components/footer/MintFooter'
import MintHeader from '../components/header/MintHeader'
import MintNoticeList from '../components/notice/MintNoticeList'

function MintNotice({ bright }) {
  const Header = () => <MintHeader bright={bright} />
  const Contents = () => <MintNoticeList />
  const Footer = () => <MintFooter bright={bright} />
  return <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
}

export default MintNotice

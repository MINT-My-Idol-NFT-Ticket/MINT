import { Box } from '@mui/material'

import MintHeader from '../components/header/MintHeader'
import MintFooter from '../components/footer/MintFooter'
import MintHomeContents from '../components/home/MintHomeContents'
import MintPageTemplate from '../components/common/MintPageTemplate'

export default function MintHome({ bright }) {
  const Header = () => <MintHeader bright={bright} />
  const Contents = () => <MintHomeContents />
  const Footer = () => <MintFooter bright={bright} />

  return (
    <Box>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </Box>
  )
}

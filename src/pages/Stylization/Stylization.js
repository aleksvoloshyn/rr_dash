import PageContainer from '../PageContainer/PageContainer'
import StylizationInline from './StylizationInline/StylizationInline'
import StylizationVanila from './StylizationVanila'
import StylizationMod from './StylizationMod'

import './stylization.scss'

const colors = [
  'tomato',
  'red',
  'green',
  'teal',
  'salmon',
  'blue',
  'grey',
  'pink',
  'purple',
  'black',
]

const Stylization = () => {
  return (
    <PageContainer>
      <div className="stylizationBlock">
        <StylizationInline colors={colors} />
      </div>
      <div className="stylizationBlock">
        <StylizationVanila colors={colors} />
      </div>
      <div className="stylizationBlock">
        <StylizationMod colors={colors} />
      </div>
    </PageContainer>
  )
}

export default Stylization

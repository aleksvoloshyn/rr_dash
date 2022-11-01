// import { useNavigate } from 'react-router-dom'
import PanelComp from './PanelComp/PanelComp'
import BoardComp from './Board/BoardComp'

import {
  //   BackButton,
  Container,
  Wrapper,
} from './cv.styled'

const Cv = () => {
  //   const navigate = useNavigate()
  return (
    <>
      <Container>
        {/* <BackButton
          onClick={() => {
            navigate('../')
          }}
        >
          &#171;
        </BackButton> */}
        <Wrapper>
          <PanelComp />
          <BoardComp />
        </Wrapper>
      </Container>
    </>
  )
}

export default Cv

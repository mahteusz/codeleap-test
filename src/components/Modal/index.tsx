import { useEffect } from 'react'
import * as S from './styled'
import { Props } from './types'
import { Button } from '..'

const Modal = ({ title, open, children, confirmButton, onClose }: Props) => {

  useEffect(() => {
    if (open)
      disableBodyScroll()
    else
      enableBodyScroll()
  }, [open])

  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const enableBodyScroll = () => {
    document.body.style.overflow = 'unset'
  }

  const renderContent = () => {
    return (
      <S.Container>
        <S.ContentContainer>
          <S.ModalTitle visible={Boolean(title)}>
            {title}
          </S.ModalTitle>
          {children}
          <S.ButtonsContainer>
            <Button
              onClick={onClose}
              styleProps={{ variant: "outlined" }}
            >
              Cancel
            </Button>
            {confirmButton}
          </S.ButtonsContainer>
        </S.ContentContainer>
      </S.Container>
    )
  }

  return (
    <>
      {
        open ? renderContent() : null
      }
    </>
  )

}

export default Modal
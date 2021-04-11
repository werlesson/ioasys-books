import Image from 'next/image'
import * as S from './styles'
import { GrClose } from 'react-icons/gr'
import { ImQuotesLeft } from 'react-icons/im'

const Modal = ({ show = false }) => {
  return (
    show && (
      <S.Modal>
        <S.ModalContent>
          <S.Close>
            <GrClose />
          </S.Close>
          <S.Cover>
            <S.Img>
              <Image
                height={435}
                width={300}
                src="https://lojasaraiva.vteximg.com.br/arquivos/ids/12108086/1008927999.jpg?v=637142244686730000"
              />
            </S.Img>
          </S.Cover>
          <S.Content>
            <S.ContentTitle className="mb-4">
              <S.Title>Crossing the Chasm</S.Title>
              <S.Author>Geoffrey A. Moore</S.Author>
            </S.ContentTitle>
            <S.ContentDetails className="mb-4">
              <S.Subtitle>Informações</S.Subtitle>
              <S.Details>
                <span className="text-weight-medium text-black">Páginas</span>
                <span>150 páginas</span>
              </S.Details>
              <S.Details>
                <span className="text-weight-medium text-black">Editora</span>
                <span>Editora Loyola</span>
              </S.Details>
              <S.Details>
                <span className="text-weight-medium text-black">
                  Publicação
                </span>
                <span>2020</span>
              </S.Details>
              <S.Details>
                <span className="text-weight-medium text-black">Idioma</span>
                <span>Inglês</span>
              </S.Details>
              <S.Details>
                <span className="text-weight-medium text-black">
                  Título Original
                </span>
                <span>Change By Design</span>
              </S.Details>
              <S.Details>
                <span className="text-weight-medium text-black">ISBN-10</span>
                <span>0062856626</span>
              </S.Details>
              <S.Details>
                <span className="text-weight-medium text-black">ISBN-13</span>
                <span>978-0062856623</span>
              </S.Details>
            </S.ContentDetails>
            <S.ContentResume>
              <S.Subtitle>Resenha da editora</S.Subtitle>
              <ImQuotesLeft
                style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}
              />
              The subject of “design thinking” is the rage at business schools,
              throughout corporations, and increasingly in the popular press—due
              in large part to the work of IDEO, a leading design firm, and its
              celebrated CEO, Tim Brown, who uses this book to show how the
              techniques and strategies of design belong at every level of
              business.
            </S.ContentResume>
          </S.Content>
        </S.ModalContent>
      </S.Modal>
    )
  )
}
export default Modal

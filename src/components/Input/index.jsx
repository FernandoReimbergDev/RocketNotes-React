import { Container } from './styles'

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}
// envolver em chaves o icone e passar dois && é para só exibir o icone se ele existir
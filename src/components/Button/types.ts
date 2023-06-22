type Props = {
  children: string | JSX.Element,
  onClick: React.MouseEventHandler,
  styleProps: StyleProps
}

type StyleProps = {
  variant: 'primary' | 'outlined' | 'success' | 'warning' | 'outlined-light',
  disabled?: boolean,
  uppercase?: boolean,
  alignSelf?: 'center' | 'flex-end' | 'flex-start',
    marginTop?: number,
  marginRight?: number,
  marginBottom?: number,
  marginLeft?: number
}

export { type Props, type StyleProps }
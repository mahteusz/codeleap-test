type Props = {
  children: string | JSX.Element,
  onClick: React.MouseEventHandler,
  styleProps: StyleProps
}

type StyleProps = {
  variant: 'primary' | 'outlined' | 'success' | 'warning',
  disabled?: boolean,
  uppercase?: boolean,
  bold?: boolean
}

export { type Props, type StyleProps }
import { Btn } from "./Button.styled"

export const Button = ({onClick}) => {
  return (
    <Btn onClick={onClick}>Load more</Btn>
  )
}
import { memo } from "react";

export const Small = memo(({value}) => {
    console.log('XD');
  return (
    <small>{value}</small>
  )
})

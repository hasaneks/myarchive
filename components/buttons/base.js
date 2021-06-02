import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

function LinkButton({ children, ...props }) {
  return (
    <Link href={props.href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function DefaultButton({ children, ...props }) {
  return <button {...props}>{children}</button>
}

function BaseButton({ children, className, ...props }) {
  const Comp = props.href ? LinkButton : DefaultButton
  return (
    <Comp className={cn(className)} {...props}>
      {children}
    </Comp>
  )
}
export default BaseButton

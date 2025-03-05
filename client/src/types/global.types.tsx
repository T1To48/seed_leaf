import { PropsWithChildren } from 'react'

type FCWithChildren = PropsWithChildren

type FCWithChildrenAndProps<T> = PropsWithChildren<T>

type IsMobileBool = boolean

export type {FCWithChildren, FCWithChildrenAndProps, IsMobileBool}
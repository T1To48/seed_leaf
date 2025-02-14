import { PropsWithChildren } from 'react'

type FCWithChildren = PropsWithChildren

type FCWithChildrenAndProps<T> = PropsWithChildren<T>

export type {FCWithChildren, FCWithChildrenAndProps}
import { Metadata } from 'next';
import { ReactNode } from 'react';

export type LayoutProps = { children: ReactNode; params?: any }
export type PageProps = { searchParams?: any; params?: any }
export type ErrorPageProps = { error: Error; reset: () => void }

export type LayoutMetaDataType<P = LayoutProps> = (props: LayoutProps & P) => Promise<Metadata>
export type PageMetaDataType<P = PageProps> = (props: PageProps & P) => Promise<Metadata>
export type DynamicLayoutType<P = LayoutProps> = (props: LayoutProps & P) => Promise<JSX.Element>
export type DynamicPageType<P = PageProps> = (props: PageProps & P) => Promise<JSX.Element>

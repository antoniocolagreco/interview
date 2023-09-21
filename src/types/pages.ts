import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

export type ErrorPageProps = { error: Error; reset: () => void }
export type ErrorPage<P = ErrorPageProps> = FC<ErrorPageProps & P>

export type LayoutProps = { children: ReactNode; params?: any }
export type LayoutMetaData<P = LayoutProps> = (props: Omit<LayoutProps, keyof P> & P) => Promise<Metadata>
export type Layout<P = LayoutProps> = FC<Omit<LayoutProps, keyof P> & P>
export type DynamicLayout<P = LayoutProps> = (props: Omit<LayoutProps, keyof P> & P) => Promise<JSX.Element>

export type PageProps = { searchParams?: any; params?: any }
export type PageMetaData<P = PageProps> = (props: Omit<PageProps, keyof P> & P) => Promise<Metadata>
export type Page<P = PageProps> = FC<Omit<PageProps, keyof P> & P>
export type DynamicPage<P = PageProps> = (props: Omit<PageProps, keyof P> & P) => Promise<JSX.Element>

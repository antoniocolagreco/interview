import clsx from 'clsx'
import { FC, SVGAttributes } from 'react'
import css from './LoadingSpinner.module.css'

type LoadingSpinnerProps = SVGAttributes<SVGElement> & {
  size?: number
  strokeWidth?: number
  foregroundClassName: SVGAttributes<SVGCircleElement>['className']
  backgroundClassName: SVGAttributes<SVGCircleElement>['className']
}

const LoadingSpinner: FC<LoadingSpinnerProps> = (props) => {
  const { foregroundClassName, backgroundClassName, strokeWidth = 10, children, size = 20, ...otherProps } = props

  return (
    <svg fill='none' height={size} width={size} viewBox='0 0 66 66' {...otherProps}>
      <circle cx='33' cy='33' fill='none' r='28' className={backgroundClassName} strokeWidth={strokeWidth} />
      <circle
        cx='33'
        cy='33'
        fill='none'
        r='28'
        stroke='currentColor'
        strokeDasharray='40, 134'
        strokeDashoffset='325'
        strokeLinecap='round'
        strokeWidth={strokeWidth}
        className={clsx(css.loadingSpinner, foregroundClassName)}
      />
    </svg>
  )
}

export default LoadingSpinner

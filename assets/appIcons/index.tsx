import Svg, { Path, SvgProps, Circle } from 'react-native-svg'

export const HomeIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill='none' {...props}>
    <Path
      fill={props.color ?? '#9610FF'}
      d='M7.51 18.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 0 0 2.443-1 3.41 3.41 0 0 0 1.013-2.422V7.867c0-.735-.328-1.431-.895-1.902L12.309.675A3.097 3.097 0 0 0 8.36.748L1.842 5.965a2.474 2.474 0 0 0-.967 1.902v8.702C.875 18.464 2.422 20 4.331 20h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009Z'
    />
  </Svg>
)

export const CompassIcon = (props: SvgProps) => (
  <Svg width={22} height={21} fill='none' {...props}>
    <Path
      stroke={props.color ?? '#9E9E9E'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m7.395 13.952 1.593-5.09 5.089-1.592-1.593 5.09-5.089 1.592Z'
      clipRule='evenodd'
    />
    <Circle
      cx={10.736}
      cy={10.611}
      r={9.611}
      stroke={props.color ?? '#9E9E9E'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
  </Svg>
)

export const ListIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill='none' {...props}>
    <Path
      stroke={props.color ?? '#9E9E9E'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M13.591 14.223h-7.22M13.591 10.037h-7.22M9.126 5.86H6.371'
    />
    <Path
      stroke={props.color ?? '#9E9E9E'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m13.784.75-7.69.004C3.335.77 1.627 2.587 1.627 5.357v9.196c0 2.784 1.722 4.607 4.506 4.607l7.689-.003c2.76-.017 4.47-1.834 4.47-4.604V5.357c0-2.784-1.723-4.607-4.507-4.607Z'
      clipRule='evenodd'
    />
  </Svg>
)

export const UserIcon = (props: SvgProps) => (
  <Svg width={17} height={20} fill='none' {...props}>
    <Path
      stroke={props.color ?? '#9E9E9E'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M8.61 13.346c-3.868 0-7.17.585-7.17 2.927S4.72 19.22 8.61 19.22c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948Z'
      clipRule='evenodd'
    />
    <Path
      stroke={props.color ?? '#9E9E9E'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.429}
      d='M8.61 10.006A4.596 4.596 0 1 0 4.014 5.41a4.58 4.58 0 0 0 4.563 4.596h.033Z'
      clipRule='evenodd'
    />
  </Svg>
)

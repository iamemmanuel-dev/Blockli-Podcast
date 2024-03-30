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

export const BellIcon = (props: SvgProps) => (
  <Svg width={20} height={24} fill='none' {...props}>
    <Path
      stroke='#212121'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M9.996.933c-5.174 0-7.422 4.685-7.422 7.781 0 2.315.336 1.634-.945 4.457-1.565 4.023 4.727 5.668 8.367 5.668 3.638 0 9.93-1.645 8.366-5.668-1.28-2.823-.945-2.142-.945-4.457 0-3.096-2.25-7.78-7.421-7.78Z'
      clipRule='evenodd'
    />
    <Path
      stroke='#212121'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M12.69 21.93c-1.51 1.688-3.865 1.708-5.39 0'
    />
  </Svg>
)

export const PlayIcon = (props: SvgProps) => (
  <Svg width={9} height={10} fill='none' {...props}>
    <Path
      fill='#fff'
      d='M0 7.88V1.81C0 .568 1.35-.21 2.429.41L5.06 1.925l2.632 1.522a1.613 1.613 0 0 1 0 2.797L5.06 7.765 2.43 9.281C1.35 9.902 0 9.129 0 7.88Z'
    />
  </Svg>
)

export const AddItemIcon = (props: SvgProps) => (
  <Svg width={18} height={13} fill='none' {...props}>
    <Path
      fill='#212121'
      d='M9.833 3.917H1.5a.836.836 0 0 0-.833.833c0 .458.375.833.833.833h8.333a.836.836 0 0 0 .834-.833.836.836 0 0 0-.834-.833Zm0-3.334H1.5a.836.836 0 0 0-.833.834c0 .458.375.833.833.833h8.333a.836.836 0 0 0 .834-.833.836.836 0 0 0-.834-.834ZM14 7.25v-2.5a.836.836 0 0 0-.833-.833.836.836 0 0 0-.834.833v2.5h-2.5A.836.836 0 0 0 9 8.083c0 .459.375.834.833.834h2.5v2.5c0 .458.375.833.834.833a.836.836 0 0 0 .833-.833v-2.5h2.5a.836.836 0 0 0 .833-.834.836.836 0 0 0-.833-.833H14ZM1.5 8.917h5a.836.836 0 0 0 .833-.834.836.836 0 0 0-.833-.833h-5a.836.836 0 0 0-.833.833c0 .459.375.834.833.834Z'
    />
  </Svg>
)

export const DownloadIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill='none' {...props}>
    <Path
      fill='#212121'
      fillRule='evenodd'
      d='M5.388 1.917c-2.108 0-3.471 1.444-3.471 3.68v6.806c0 2.236 1.363 3.68 3.471 3.68h7.225c2.108 0 3.47-1.444 3.47-3.68V5.597c0-2.236-1.362-3.68-3.47-3.68H5.388Zm7.225 15.416H5.388c-2.824 0-4.721-1.981-4.721-4.93V5.597c0-2.949 1.897-4.93 4.721-4.93h7.225c2.824 0 4.72 1.981 4.72 4.93v6.806c0 2.949-1.896 4.93-4.72 4.93Z'
      clipRule='evenodd'
    />
    <Path
      fill='#212121'
      fillRule='evenodd'
      d='M9 13.03a.625.625 0 0 1-.625-.625v-6.81a.625.625 0 0 1 1.25 0v6.81c0 .345-.28.625-.625.625Z'
      clipRule='evenodd'
    />
    <Path
      fill='#212121'
      fillRule='evenodd'
      d='M9 13.03a.621.621 0 0 1-.443-.183L5.434 9.71a.625.625 0 0 1 .885-.883L9 11.52l2.68-2.693a.624.624 0 1 1 .886.883l-3.124 3.137A.621.621 0 0 1 9 13.03Z'
      clipRule='evenodd'
    />
  </Svg>
)

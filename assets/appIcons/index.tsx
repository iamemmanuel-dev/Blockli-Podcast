import Svg, {
  Path,
  SvgProps,
  Circle,
  LinearGradient,
  Stop,
  Defs,
} from 'react-native-svg'

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

export const BackIcon = (props: SvgProps) => (
  <Svg width={20} height={17} fill='none' {...props}>
    <Path
      fill='#212121'
      d='M19.333 8.32c0 .443-.329.81-.756.867l-.119.008H.958A.875.875 0 0 1 .84 7.453l.118-.008h17.5c.484 0 .875.392.875.875Z'
    />
    <Path
      fill='#212121'
      d='M8.634 14.728a.875.875 0 0 1-1.137 1.325l-.098-.085L.341 8.942a.875.875 0 0 1-.086-1.142L.341 7.7 7.399.671a.875.875 0 0 1 1.32 1.142l-.085.098-6.436 6.41 6.436 6.407Z'
    />
  </Svg>
)

export const ChainIcon = (props: SvgProps) => (
  <Svg width={24} height={25} fill='none' {...props}>
    <Path
      fill='#212121'
      d='m9.516 19.053-2.065 2.006a2.887 2.887 0 1 1-4.083-4.083l5.296-5.308a2.87 2.87 0 0 1 3.955-.105l.14.116a1.168 1.168 0 0 0 1.634-1.668 3.184 3.184 0 0 0-.21-.245 5.203 5.203 0 0 0-7.105.257L1.71 15.33a5.227 5.227 0 0 0 7.385 7.385l2.018-1.972a1.167 1.167 0 0 0-1.598-1.691ZM21.988 2.439a5.238 5.238 0 0 0-7.385 0l-2.019 1.972a1.167 1.167 0 0 0 1.599 1.692L16.2 4.096a2.887 2.887 0 1 1 4.083 4.083l-5.296 5.309a2.87 2.87 0 0 1-3.955.105l-.14-.117a1.167 1.167 0 1 0-1.634 1.668c.085.087.175.169.269.245a5.215 5.215 0 0 0 7.105-.256l5.308-5.309a5.239 5.239 0 0 0 .047-7.385Z'
    />
  </Svg>
)

export const CircleEllipsisIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <Path
      stroke='#212121'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M12 1.208c5.96 0 10.792 4.832 10.792 10.792S17.96 22.792 12 22.792 1.21 17.959 1.21 12C1.209 6.04 6.04 1.208 12 1.208Z'
      clipRule='evenodd'
    />
    <Path
      stroke='#212121'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M16.596 12.015h.01M11.919 12.015h.01M7.242 12.015h.01'
    />
  </Svg>
)

export const MicIcon = (props: SvgProps) => (
  <Svg width={22} height={27} fill='none' {...props}>
    <Path
      fill='url(#a)'
      fillRule='evenodd'
      d='M11 .667c-3.535 0-6.4 2.78-6.4 6.21v5.713c0 3.43 2.865 6.21 6.4 6.21 2.887 0 5.327-1.855 6.125-4.403a6.57 6.57 0 0 1-2.684 1.04c-.837.126-1.69.09-2.513-.104a6.538 6.538 0 0 1-2.28-1.03 6.37 6.37 0 0 1-1.138-1.035c-.342-.397-.192-.98.264-1.249.456-.27 1.044-.12 1.412.256a4.575 4.575 0 0 0 2.2 1.235c.575.136 1.173.161 1.759.073a4.6 4.6 0 0 0 1.653-.585 4.465 4.465 0 0 0 1.602-1.619V6.876c0-3.43-2.865-6.21-6.4-6.21Zm3.215 6.413c0 .967-.807 1.75-1.803 1.75-.996 0-1.803-.783-1.803-1.75 0-.966.807-1.749 1.803-1.749.996 0 1.803.783 1.803 1.75Z'
      clipRule='evenodd'
    />
    <Path
      fill='url(#b)'
      d='M19.235 12.755c0-.664.545-1.2 1.216-1.2.671 0 1.216.536 1.216 1.2 0 5.4-4.14 9.86-9.45 10.46v2.416c0 .662-.545 1.2-1.216 1.2a1.208 1.208 0 0 1-1.216-1.2v-2.417C4.474 22.615.333 18.156.333 12.754c0-.663.545-1.2 1.216-1.2.67 0 1.216.537 1.216 1.2 0 4.484 3.694 8.133 8.236 8.133 4.54 0 8.234-3.649 8.234-8.132Z'
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={21.667}
        x2={-4.396}
        y1={26.831}
        y2={20.67}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#9610FF' />
        <Stop offset={1} stopColor='#AF48FF' />
      </LinearGradient>
      <LinearGradient
        id='b'
        x1={21.667}
        x2={-4.396}
        y1={26.831}
        y2={20.67}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#9610FF' />
        <Stop offset={1} stopColor='#AF48FF' />
      </LinearGradient>
    </Defs>
  </Svg>
)

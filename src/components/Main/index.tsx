import * as S from './styles'

const Main = () => (
  <S.Svg
    width="600"
    height="500"
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="triangles" clipPath="url(#clip0)">
      <g id="yelGroup">
        <path
          id="yel1"
          opacity="0.7"
          d="M38.5 45.6699C41.8333 47.5944 41.8333 52.4056 38.5 54.3301L16 67.3205C12.6667 69.245 8.5 66.8394 8.5 62.9904L8.5 37.0096C8.5 33.1606 12.6667 30.755 16 32.6795L38.5 45.6699Z"
        />
      </g>
      <g id="magGroup">
        <path
          id="mag1"
          opacity="0.9"
          d="M61.5 45.6699C64.8333 47.5944 64.8333 52.4056 61.5 54.3301L39 67.3205C35.6667 69.245 31.5 66.8394 31.5 62.9904L31.5 37.0096C31.5 33.1606 35.6667 30.755 39 32.6795L61.5 45.6699Z"
        />
        <path
          id="mag2"
          opacity="0.9"
          d="M38.5 45.6699C41.8333 47.5944 41.8333 52.4056 38.5 54.3301L16 67.3205C12.6667 69.245 8.5 66.8394 8.5 62.9904L8.5 37.0096C8.5 33.1606 12.6667 30.755 16 32.6795L38.5 45.6699Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="120" height="100" fill="white" />
      </clipPath>
    </defs>
  </S.Svg>
)

export default Main

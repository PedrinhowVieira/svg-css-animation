import * as S from './styles'

const Main = () => (
  <>
    <S.Play
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
    </S.Play>
    <S.Gears>
      <S.BigGear
        width="250"
        height="250"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="gear1">
          <path
            id="bigGear"
            d="M50 28.3667V21.6333C46.5604 20.4104 44.3896 20.0667 43.2937 17.4271V17.425C42.1958 14.7771 43.5021 12.9792 45.0583 9.70208L40.2979 4.94167C37.0458 6.4875 35.2292 7.80625 32.575 6.70625H32.5729C29.9292 5.61042 29.5833 3.42292 28.3667 0H21.6333C20.4208 3.40625 20.0729 5.60833 17.4271 6.70625H17.425C14.7771 7.80625 12.9833 6.50208 9.70208 4.94167L4.94167 9.70208C6.49375 12.9687 7.80625 14.7729 6.70625 17.425C5.60833 20.0729 3.40625 20.4208 0 21.6333V28.3667C3.4 29.575 5.60833 29.9271 6.70625 32.5729C7.81042 35.2437 6.46875 37.0854 4.94167 40.2958L9.70208 45.0583C12.9562 43.5104 14.7729 42.1937 17.425 43.2937H17.4271C20.0729 44.3896 20.4187 46.5833 21.6333 50H28.3667C29.5792 46.5917 29.9271 44.3958 32.5896 43.2875H32.5917C35.2208 42.1958 37.0083 43.4979 40.2958 45.0604L45.0562 40.2979C43.5083 37.0417 42.1917 35.2292 43.2896 32.5771C44.3875 29.9292 46.5979 29.5771 50 28.3667V28.3667ZM25 35.4167C19.2458 35.4167 14.5833 30.7521 14.5833 25C14.5833 19.2479 19.2458 14.5833 25 14.5833C30.7542 14.5833 35.4167 19.2479 35.4167 25C35.4167 30.7521 30.7542 35.4167 25 35.4167ZM31.25 25C31.25 28.4458 28.4458 31.25 25 31.25C21.5542 31.25 18.75 28.4458 18.75 25C18.75 21.5542 21.5542 18.75 25 18.75C28.4458 18.75 31.25 21.5542 31.25 25Z"
            fill="url(#paint0_radial)"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(25 25) rotate(90) scale(25)"
          >
            <stop stopColor="#FCCE43" />
            <stop offset="0.723958" stopColor="#ED285E" />
          </radialGradient>
        </defs>
      </S.BigGear>

      <S.SmallGear
        width="150"
        height="150"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="gear2">
          <path
            id="smallGear"
            d="M30 17.02V12.98C27.9362 12.2462 26.6325 12.04 25.9762 10.4562V10.455C25.3175 8.86625 26.1012 7.7875 27.035 5.82125L24.1788 2.965C22.2275 3.8925 21.1375 4.68375 19.545 4.02375H19.5438C17.9575 3.36625 17.75 2.05375 17.02 0H12.98C12.2525 2.04375 12.0437 3.365 10.4562 4.02375H10.455C8.86625 4.68375 7.79 3.90125 5.82125 2.965L2.965 5.82125C3.89625 7.78125 4.68375 8.86375 4.02375 10.455C3.365 12.0437 2.04375 12.2525 0 12.98V17.02C2.04 17.745 3.365 17.9563 4.02375 19.5438C4.68625 21.1463 3.88125 22.2512 2.965 24.1775L5.82125 27.035C7.77375 26.1062 8.86375 25.3162 10.455 25.9762H10.4562C12.0437 26.6337 12.2512 27.95 12.98 30H17.02C17.7475 27.955 17.9575 26.6375 19.5537 25.9725H19.555C21.1325 25.3175 22.205 26.0987 24.1775 27.0362L27.0338 24.1788C26.1038 22.225 25.315 21.1375 25.9737 19.5462C26.6325 17.9575 27.9588 17.7463 30 17.02V17.02ZM15 20C12.2387 20 10 17.7613 10 15C10 12.2387 12.2387 10 15 10C17.7613 10 20 12.2387 20 15C20 17.7613 17.7613 20 15 20Z"
            fill="url(#paint1_radial)"
          />
        </g>
        <defs>
          <radialGradient
            id="paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(15 15) rotate(90) scale(15)"
          >
            <stop stopColor="#FCCE43" />
            <stop offset="0.78125" stopColor="#ED285E" />
          </radialGradient>
        </defs>
      </S.SmallGear>
    </S.Gears>
  </>
)

export default Main

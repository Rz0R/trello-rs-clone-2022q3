import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="40"
        aria-label="Trello"
        viewBox="0 0 312 64"
      >
        <linearGradient id="trello-logo-default" x1="50.048%" x2="50.048%" y1="100%" y2="0%">
          <stop offset="0" stopColor="#0052cc" />
          <stop offset="1" stopColor="#2684ff" />
        </linearGradient>
        <g fill="none" fillRule="evenodd">
          <path
            fill="url(#trello-logo-default)"
            d="M55.59.07H8A7.42 7.42 0 00.58 7.48V55A7.42 7.42 0 008 62.45h47.59A7.42 7.42 0 0063 55V7.48A7.42 7.42 0 0055.59.07zM27.5 45a2.48 2.48 0 01-2.5 2.47H14.6A2.47 2.47 0 0112.14 45V14.05a2.47 2.47 0 012.46-2.47H25a2.48 2.48 0 012.47 2.47zm24-14.21a2.47 2.47 0 01-2.5 2.47H38.6a2.48 2.48 0 01-2.47-2.47V14.05a2.48 2.48 0 012.47-2.47H49a2.47 2.47 0 012.46 2.47z"
          />
          <g fill="#293856" fillRule="nonzero">
            <path
              d="M42.92 4.64V16.7H28.63v45.75H14.85V16.7H.56V4.64zM60.46 62.45H47.72v-45h12.74v8.62c2.42-6.07 6.29-9.68 13.18-9.24v13.33c-9-.7-13.18 1.5-13.18 8.71zM143.24 62.8c-8.35 0-13.6-4-13.6-13.46V.07h12.83v47.51c0 2.73 1.8 3.7 4 3.7a14.08 14.08 0 001.9-.09v11.09a18.75 18.75 0 01-5.13.52zM170 62.8c-8.35 0-13.61-4-13.61-13.46V.07h12.83v47.51c0 2.73 1.81 3.7 4.05 3.7a13.86 13.86 0 001.89-.09v11.09a18.66 18.66 0 01-5.16.52zM181.31 39.93c0-13.9 8-23.41 21.78-23.41S224.7 26 224.7 39.93s-7.92 23.58-21.61 23.58-21.78-9.77-21.78-23.58zm12.49 0c0 6.77 2.84 12.14 9.29 12.14s9.13-5.37 9.13-12.14-2.75-12-9.13-12-9.29 5.22-9.29 12zM90.84 44c3.567.392 7.152.602 10.74.63 9.76 0 18-2.62 18-12.07 0-9.17-8.47-16.06-18.66-16.06-13.72 0-22.51 9.95-22.51 23.85 0 14.43 7.58 23 24.71 23A41.08 41.08 0 00118 60.69V49.91c-4.4 1.41-9.35 2.81-14.43 2.81-6.82 0-11.57-2.24-12.73-8.72zm9.82-17.68c3.61 0 6.51 2.45 6.51 5.8 0 4.31-4.55 5.66-9.79 5.66a44.69 44.69 0 01-6.66-.53 15.16 15.16 0 011.77-6 9.43 9.43 0 018.17-4.91z"
              transform="translate(87)"
            />
          </g>
        </g>
      </svg>
    </Link>
  );
}

export default Logo;

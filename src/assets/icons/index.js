import { chakra } from "@chakra-ui/react"
import React from "react"

const WhatsappIcon = props => (
  <chakra.svg
    xmlns="https://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
  >
    <path
      d="M16.6,14c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1
	c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7c-0.1-0.2,0-0.4,0.1-0.5
	c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.6-1.3-0.8-1.8C9.4,7.3,9.2,7.3,9,7.3
	c-0.1,0-0.3,0-0.5,0C8.3,7.3,8,7.5,7.9,7.6C7.3,8.2,7,8.9,7,9.7c0.1,0.9,0.4,1.8,1,2.6c1.1,1.6,2.5,2.9,4.2,3.7
	c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1c0.7-0.1,1.3-0.6,1.7-1.2c0.2-0.4,0.2-0.8,0.1-1.2C17,14.2,16.8,14.1,16.6,14
	 M19.1,4.9C15.2,1,8.9,1,5,4.9c-3.2,3.2-3.8,8.1-1.6,12L2,22l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c5.5,0,9.9-4.4,9.9-9.9
	C22,9.3,20.9,6.8,19.1,4.9 M16.4,18.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3l-0.2-0.3
	C2.6,12.4,3.8,7.4,7.7,4.9S16.6,3.7,19,7.5C21.4,11.4,20.3,16.5,16.4,18.9"
      {...props}
    />
  </chakra.svg>
)

const SpotifyIcon = props => (
  <chakra.svg
    enableBackground="new 0 0 24 24"
    height="512"
    viewBox="0 0 24 24"
    width="512"
    xmlns="https://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" fill="#4caf50" r="12" />
    <g fill="#212121">
      <path d="m16.872 17.656v.001c-.203 0-.329-.063-.518-.174-3.019-1.82-6.532-1.896-10.002-1.185-.189.049-.436.126-.576.126-.47 0-.765-.373-.765-.765 0-.499.295-.736.659-.813 3.963-.875 8.013-.798 11.467 1.268.295.189.47.358.47.798 0 .438-.344.744-.735.744z" />

      <path d="m18.175 14.483h-.001c-.252 0-.421-.111-.596-.203-3.025-1.79-7.533-2.512-11.545-1.423-.232.063-.358.126-.576.126-.518 0-.938-.421-.938-.938s.252-.861.75-1.001c1.345-.378 2.719-.659 4.732-.659 3.14 0 6.174.779 8.565 2.202.392.232.547.533.547.953-.005.521-.411.943-.938.943z" />

      <path d="m4.548 6.998c1.703-.499 3.61-.735 5.686-.735 3.532 0 7.234.735 9.939 2.313.378.218.624.518.624 1.093 0 .658-.533 1.127-1.122 1.127l-.001-.001c-.252 0-.407-.063-.625-.189-3.444-2.056-9.605-2.549-13.591-1.436-.175.048-.393.125-.625.125-.639 0-1.127-.499-1.127-1.142 0-.657.407-1.029.842-1.155z" />
    </g>
  </chakra.svg>
)

const InstagramIcon = props => (
  <chakra.svg
    xmlns="https://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      fill="none"
      stroke="#020202"
      className="nc-icon-wrapper"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </g>
  </chakra.svg>
)

const MailIcon = props => (
  <chakra.svg
    xmlns="https://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      fill="none"
      stroke="#020202"
      className="nc-icon-wrapper"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </g>
  </chakra.svg>
)

const FacebookIcon = props => (
  <chakra.svg
    xmlns="https://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      fill="none"
      stroke="#020202"
      className="nc-icon-wrapper"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </g>
  </chakra.svg>
)

const TwitterIcon = props => (
  <chakra.svg
    xmlns="https://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      fill="none"
      stroke="#020202"
      className="nc-icon-wrapper"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </g>
  </chakra.svg>
)

const GooglePodcastIcon = props => (
  <chakra.svg
    xmlns="https://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48px"
    height="48px"
    {...props}
  >
    <path
      fill="#f9a825"
      d="M24.5,12L24.5,12c-1.381,0-2.5-1.119-2.5-2.5v-3C22,5.119,23.119,4,24.5,4h0 C25.881,4,27,5.119,27,6.5v3C27,10.881,25.881,12,24.5,12z"
    />
    <path
      fill="#f9a825"
      d="M24.5,33L24.5,33c-1.381,0-2.5-1.119-2.5-2.5v-13c0-1.381,1.119-2.5,2.5-2.5h0 c1.381,0,2.5,1.119,2.5,2.5v13C27,31.881,25.881,33,24.5,33z"
    />
    <path
      fill="#f9a825"
      d="M24.5,44L24.5,44c-1.381,0-2.5-1.119-2.5-2.5v-3c0-1.381,1.119-2.5,2.5-2.5h0 c1.381,0,2.5,1.119,2.5,2.5v3C27,42.881,25.881,44,24.5,44z"
    />
    <path
      fill="#e53935"
      d="M15.5,36L15.5,36c-1.381,0-2.5-1.119-2.5-2.5v-3c0-1.381,1.119-2.5,2.5-2.5h0 c1.381,0,2.5,1.119,2.5,2.5v3C18,34.881,16.881,36,15.5,36z"
    />
    <path
      fill="#43a047"
      d="M33.5,20L33.5,20c-1.381,0-2.5-1.119-2.5-2.5v-3c0-1.381,1.119-2.5,2.5-2.5h0 c1.381,0,2.5,1.119,2.5,2.5v3C36,18.881,34.881,20,33.5,20z"
    />
    <path
      fill="#e53935"
      d="M15.5,25L15.5,25c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.381,1.119-2.5,2.5-2.5h0 c1.381,0,2.5,1.119,2.5,2.5v9C18,23.881,16.881,25,15.5,25z"
    />
    <path
      fill="#43a047"
      d="M33.5,37L33.5,37c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.381,1.119-2.5,2.5-2.5h0 c1.381,0,2.5,1.119,2.5,2.5v9C36,35.881,34.881,37,33.5,37z"
    />
    <path
      fill="#1565c0"
      d="M6.5,28L6.5,28C5.119,28,4,26.881,4,25.5v-3C4,21.119,5.119,20,6.5,20h0C7.881,20,9,21.119,9,22.5v3 C9,26.881,7.881,28,6.5,28z"
    />
    <path
      fill="#1e88e5"
      d="M42.5,28L42.5,28c-1.381,0-2.5-1.119-2.5-2.5v-3c0-1.381,1.119-2.5,2.5-2.5h0 c1.381,0,2.5,1.119,2.5,2.5v3C45,26.881,43.881,28,42.5,28z"
    />
  </chakra.svg>
)

const CopyrightIcon = props => (
  <chakra.svg
    xmlns="https://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <g>
          <path d="M11.88,9.14c1.28,0.06,1.61,1.15,1.63,1.66h1.79c-0.08-1.98-1.49-3.19-3.45-3.19C9.64,7.61,8,9,8,12.14 c0,1.94,0.93,4.24,3.84,4.24c2.22,0,3.41-1.65,3.44-2.95h-1.79c-0.03,0.59-0.45,1.38-1.63,1.44C10.55,14.83,10,13.81,10,12.14 C10,9.25,11.28,9.16,11.88,9.14z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" />
        </g>
      </g>
    </g>
  </chakra.svg>
)

const CloseIcon = props => (
  <chakra.svg
    xmlns="https://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="#020202"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
      className="0"
    ></path>
  </chakra.svg>
)

const MenuIcon = props => (
  <chakra.svg
    xmlns="https://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
      className="0"
    ></path>
  </chakra.svg>
)

export {
  WhatsappIcon,
  SpotifyIcon,
  InstagramIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  GooglePodcastIcon,
  CopyrightIcon,
  CloseIcon,
  MenuIcon,
}

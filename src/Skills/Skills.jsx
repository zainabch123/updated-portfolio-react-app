import "./skills.css";

export default function Skills() {
  return (
    <section className="skills-section" id="skills-section">
      <div className="project-title-section animated-section">
        <h2 className="title">My Skills</h2>
        <p className="skills-tag-line">
          Here are some of the skills I have developed.
        </p>
      </div>
      <section className="skills-grid">
        <div className="skill-card animated-section">
          <div className="skill-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 6.667969 4 C 5.207031 4 4 5.207031 4 6.667969 L 4 43.332031 C 4 44.792969 5.207031 46 6.667969 46 L 43.332031 46 C 44.792969 46 46 44.796875 46 43.332031 L 46 6.667969 C 46 5.207031 44.796875 4 43.332031 4 Z M 6.667969 6 L 43.332031 6 C 43.703125 6 44 6.296875 44 6.667969 L 44 43.332031 C 44 43.703125 43.703125 44 43.332031 44 L 6.667969 44 C 6.296875 44 6 43.703125 6 43.332031 L 6 6.667969 C 6 6.296875 6.296875 6 6.667969 6 Z M 23 23 L 23 35.574219 C 23 37.503906 22.269531 38 21 38 C 19.671875 38 18.75 37.171875 18.140625 36.097656 L 15 38 C 15.910156 39.925781 18.140625 42 21.234375 42 C 24.65625 42 27 40.179688 27 36.183594 L 27 23 Z M 35.453125 23 C 32.046875 23 29.863281 25.179688 29.863281 28.042969 C 29.863281 31.148438 31.695313 32.617188 34.449219 33.789063 L 35.402344 34.199219 C 37.140625 34.960938 38 35.425781 38 36.734375 C 38 37.824219 37.171875 38.613281 35.589844 38.613281 C 33.707031 38.613281 32.816406 37.335938 32 36 L 29 38 C 30.121094 40.214844 32.132813 42 35.675781 42 C 39.300781 42 42 40.117188 42 36.683594 C 42 33.496094 40.171875 32.078125 36.925781 30.6875 L 35.972656 30.28125 C 34.335938 29.570313 33.625 29.109375 33.625 27.964844 C 33.625 27.039063 34.335938 26.328125 35.453125 26.328125 C 36.550781 26.328125 37.253906 26.792969 37.90625 27.964844 L 40.878906 26.058594 C 39.625 23.84375 37.878906 23 35.453125 23 Z"></path>
            </svg>
          </div>
          <div className="skill-text">
            <h3 className="skill-title">JavaScript</h3>
          </div>
        </div>
        <div className="skill-card animated-section">
          <div className="skill-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                d="M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9509974 22.90625 7.4023438 C 21.147758 5.9719089 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.404125 12.173992 10.763672 14.412109 C 10.888559 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671996 41.431263 26.366006 42.068338 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.413715 46.164908 36.748047 45.394531 C 38.082379 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.855304 39.195312 35.617188 C 39.031899 34.599965 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677151 15.800695 32.435744 15.435401 30.046875 15.220703 C 28.847638 13.559329 27.615404 12.045781 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015452 7.6275969 21.642578 8.9511719 C 22.267037 9.4591336 22.905298 10.047651 23.548828 10.673828 C 22.297283 12.027473 21.054862 13.55414 19.847656 15.230469 C 17.468889 15.449074 15.236606 15.81635 13.201172 16.310547 C 13.014826 15.545537 12.849558 14.798586 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.238404 12.677734 8.9140625 C 12.960128 7.5897208 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791172 13.029071 26.605956 13.99916 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.91454 18.402344 28.810547 C 17.668186 27.538949 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.548828 17.410156 C 33.197299 17.615841 34.745083 17.901405 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725422 19.243926 32.140408 18.316416 31.548828 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398803 20.758169 13.190811 22.834118 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 15.341797 27.365234 C 15.762496 28.177853 16.200028 28.993283 16.671875 29.810547 C 17.041048 30.449973 17.418073 31.072393 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 34.619141 27.365234 C 35.143284 28.605725 35.599609 29.819681 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765252 28.981717 34.201083 28.171917 34.619141 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.64638 35.904859 22.092967 37.709497 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842987 33.980548 37.069013 34.98935 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.468699 43.247993 35.748047 43.664062 C 35.027395 44.080132 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.399747 28.314453 41.076172 C 27.678439 40.558811 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882144 35.473968 21.867188 34.101562 z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="skill-text">
            <h3 className="skill-title">React</h3>
          </div>
        </div>
        <div className="skill-card animated-section">
          <div className="skill-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height="95"
              width="95"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 48 48"
            >
              <g>
                <g>
                  <path d="M47.987,21.938c-0.006-0.091-0.023-0.178-0.053-0.264c-0.011-0.032-0.019-0.063-0.033-0.094    c-0.048-0.104-0.109-0.202-0.193-0.285c-0.001-0.001-0.001-0.001-0.001-0.001L42,15.586V10c0-0.022-0.011-0.041-0.013-0.063    c-0.006-0.088-0.023-0.173-0.051-0.257c-0.011-0.032-0.019-0.063-0.034-0.094c-0.049-0.106-0.11-0.207-0.196-0.293l-9-9    c-0.086-0.086-0.187-0.147-0.294-0.196c-0.03-0.014-0.06-0.022-0.091-0.033c-0.085-0.029-0.172-0.047-0.262-0.052    C32.039,0.01,32.021,0,32,0H7C6.448,0,6,0.448,6,1v14.586l-5.707,5.707c0,0-0.001,0.001-0.002,0.002    c-0.084,0.084-0.144,0.182-0.192,0.285c-0.014,0.031-0.022,0.062-0.033,0.094c-0.03,0.086-0.048,0.173-0.053,0.264    C0.011,21.96,0,21.978,0,22v19c0,0.552,0.448,1,1,1h5v5c0,0.552,0.448,1,1,1h34c0.552,0,1-0.448,1-1v-5h5c0.552,0,1-0.448,1-1V22    C48,21.978,47.989,21.96,47.987,21.938z M44.586,21H42v-2.586L44.586,21z M38.586,9H33V3.414L38.586,9z M8,2h23v8    c0,0.552,0.448,1,1,1h8v5v5H8v-5V2z M6,18.414V21H3.414L6,18.414z M40,46H8v-4h32V46z M46,40H2V23h5h34h5V40z" />
                  <polygon points="28.93,34.77 28.862,34.77 26.55,25.964 23.813,25.964 23.813,38 25.666,38 25.632,28.752 25.683,28.752     28.046,38 29.644,38 32.058,28.752 32.109,28.752 32.075,38 34.064,38 34.064,25.964 31.191,25.964   " />
                  <polygon points="16.095,27.698 18.356,27.698 18.356,38 20.362,38 20.362,27.698 22.623,27.698 22.623,25.964 16.095,25.964   " />
                  <polygon points="12.882,30.843 9.278,30.843 9.278,25.964 7.255,25.964 7.255,38 9.278,38 9.278,32.662 12.882,32.662 12.882,38     14.905,38 14.905,25.964 12.882,25.964   " />
                  <polygon points="38.552,25.964 36.495,25.964 36.495,38 41.867,38 41.867,36.113 38.552,36.113   " />
                </g>
              </g>
            </svg>
          </div>
          <div className="skill-text">
            <h3 className="skill-title">HTML</h3>
          </div>
        </div>
        <div className="skill-card animated-section">
          <div className="skill-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                fillRule="evenodd"
                d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"
              ></path>
            </svg>
          </div>
          <div className="skill-text">
            <h3 className="skill-title">CSS</h3>
          </div>
        </div>
        <div className="skill-card animated-section">
          <div className="skill-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="100"
              height="100"
              baseProfile="basic"
            >
              <path d="M37.005,31.5c-0.975,0-1.91-0.463-2.502-1.237l-5.599-7.321l-5.6,7.321 c-0.592,0.774-1.527,1.237-2.502,1.237h-2.22l8.433-11.028L18.625,9.5h2.22c0.975,0,1.911,0.462,2.502,1.236l5.556,7.266 l5.557-7.266C35.051,9.962,35.987,9.5,36.962,9.5h2.22l-8.391,10.972L39.225,31.5H37.005z" />
              <path d="M38.17,10l-8.008,10.472L38.213,31h-1.208c-0.825,0-1.604-0.385-2.105-1.04l-5.996-7.841 l-5.996,7.841c-0.501,0.656-1.28,1.04-2.105,1.04h-1.208l8.051-10.528L19.636,10h1.208c0.825,0,1.604,0.385,2.105,1.04l5.954,7.785 l5.954-7.785c0.501-0.656,1.28-1.04,2.105-1.04H38.17 M40.194,9H38.17h-1.208c-1.129,0-2.213,0.536-2.899,1.433l-5.159,6.747 l-5.159-6.747C23.058,9.536,21.974,9,20.845,9h-1.208h-2.024l1.229,1.607l7.544,9.865l-7.586,9.92L17.57,32h2.024h1.208 c1.129,0,2.213-0.536,2.899-1.433l5.202-6.803l5.202,6.803C34.791,31.464,35.875,32,37.005,32h1.208h2.024l-1.229-1.607 l-7.586-9.92l7.544-9.865L40.194,9L40.194,9z" />
              <g>
                <path d="M10,32.5c-5.238,0-9.5-4.409-9.5-9.828v-4.345C0.5,12.909,4.762,8.5,10,8.5s9.5,4.408,9.5,9.827 v4.172L3.5,22.5v0.172c0,3.765,2.916,6.828,6.5,6.828c1.977,0,3.893-0.996,5.125-2.663c0.628-0.851,1.551-1.338,2.532-1.338h1.469 l-0.248,0.673C17.484,29.957,13.917,32.5,10,32.5z M16.5,19.5v-1.173c0-3.765-2.916-6.827-6.5-6.827s-6.5,3.062-6.5,6.827V19.5 H16.5z" />
                <path d="M10,9c4.962,0,9,4.185,9,9.327V22L3,22v0.672C3,26.713,6.14,30,10,30 c2.188,0,4.223-1.102,5.527-2.866C16.035,26.447,16.802,26,17.657,26l0.752,0c0,0,0,0,0.001,0.001c-1.322,3.588-4.704,6-8.41,6 c-4.962,0-9-4.185-9-9.328v-4.345C1,13.185,5.038,9,10,9 M3,20h14v-1.673C17,14.287,13.86,11,10,11s-7,3.287-7,7.327V20 M10,8 C4.486,8,0,12.633,0,18.327v4.345C0,28.367,4.486,33,10,33c4.125,0,7.881-2.674,9.348-6.654l0.495-1.344L18.411,25L17.658,25 c-1.142,0-2.211,0.561-2.935,1.54C13.584,28.08,11.819,29,10,29c-3.204,0-5.83-2.663-5.992-6L19,23l1,0v-1v-3.672 C20,12.633,15.514,8,10,8L10,8z M4,19v-0.673C4,14.838,6.692,12,10,12s6,2.838,6,6.327V19H4L4,19z" />
              </g>
            </svg>
          </div>
          <div className="skill-text">
            <h3 className="skill-title">ExpressJS</h3>
          </div>
        </div>
        <div className="skill-card animated-section">
          <div className="skill-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="100"
              height="100"
            >
              <path d="M 34.902344 2 C 32.863281 2 31.097656 2.550781 29.875 3.09375 C 28.675781 2.691406 26.6875 2.003906 24.300781 2.5 C 22.910156 2.742188 21.632813 3.316406 20.460938 4.195313 C 18.53125 3.265625 16.515625 2.695313 14.402344 2.601563 C 13.101563 2.5 7.800781 3.101563 5.898438 5.898438 C 5.199219 7 4.5 8.398438 4.199219 10.097656 C 3.898438 11.597656 3.898438 13.300781 4.398438 16.800781 C 4.699219 19.199219 5.101563 20.800781 6 24.097656 C 6.101563 24.398438 6.601563 26 8.101563 30.402344 C 8.398438 31.199219 9 32.699219 10.199219 34.097656 C 11 35.097656 11.800781 35.699219 12.800781 35.699219 C 14.101563 35.699219 15 34.800781 15.800781 33.800781 C 15.859375 33.734375 15.921875 33.660156 15.980469 33.59375 C 15.90625 33.710938 15.839844 33.839844 15.800781 34 C 15.601563 35 16.800781 35.800781 17.800781 36.199219 C 18.601563 36.597656 19.5 36.699219 20.199219 36.699219 C 21.097656 36.699219 21.800781 36.5 22.199219 36.402344 C 22.542969 36.285156 23.285156 35.964844 24.078125 35.4375 C 24.113281 37.992188 24.136719 41.007813 24.199219 41.699219 C 24.5 44.300781 25.199219 46.097656 26.5 47.097656 C 27.5 47.898438 29.300781 48 29.402344 48 C 31.199219 48 34 46.800781 35.199219 44.902344 C 35.800781 44 36 43.199219 36.199219 42.097656 C 36.398438 41.5 36.597656 38 36.699219 37.300781 C 36.835938 36.195313 36.941406 35.105469 37.046875 34.046875 C 37.707031 34.21875 38.519531 34.402344 39.402344 34.402344 C 41 34.402344 43.101563 33.300781 43.5 33.097656 C 44.300781 32.5 45.898438 31.101563 45.199219 29.902344 C 44.800781 29.199219 44.199219 29.199219 42.699219 29.402344 C 42.699219 29.402344 40.300781 29.699219 40.097656 29.597656 C 39.953125 29.542969 39.730469 29.402344 39.480469 29.21875 C 40 28.414063 40.460938 27.617188 41 26.902344 C 42.199219 24.601563 42.902344 22.800781 43.402344 21.402344 C 44.300781 18.902344 44.800781 16.898438 45.097656 15.5 C 45.800781 12.5 46 11.101563 45.597656 9.5 C 44.800781 6.699219 41.898438 4.300781 40.699219 3.601563 C 39.898438 3.199219 37.902344 2 34.902344 2 Z M 34.902344 4 C 37.402344 4 39.101563 5 40 5.398438 C 41.101563 6 43.601563 8 43.800781 9.898438 C 43.902344 11 44 12.101563 43.300781 15 C 42.902344 16.398438 42.5 18.199219 41.597656 20.699219 C 41.097656 22.097656 40.5 23.800781 39.300781 25.902344 C 39.269531 25.953125 39.234375 26.007813 39.203125 26.0625 C 39.320313 25.640625 39.402344 25.300781 39.402344 25.300781 C 39.601563 24.300781 39.601563 23.5 39.5 22.300781 C 39.398438 21.699219 39.300781 20.199219 39.300781 19.597656 C 39.300781 19.300781 39.597656 16.199219 39.699219 15.097656 C 39.800781 13.300781 38.699219 11.097656 38.402344 10.699219 C 36.902344 8.398438 36.101563 7.101563 34.5 5.800781 C 34.101563 5.460938 33.417969 4.894531 32.488281 4.324219 C 33.222656 4.144531 34.035156 4 34.902344 4 Z M 26.066406 4.410156 C 27.371094 4.441406 28.476563 4.800781 29.300781 5.101563 C 31.402344 5.800781 32.699219 6.898438 33.300781 7.398438 C 34.601563 8.5 35.300781 9.601563 36.800781 11.902344 C 36.910156 12.121094 37.195313 12.585938 37.421875 13.234375 C 35.375 13.046875 34.015625 13.765625 33.199219 14.5 C 32 15.5 32.097656 17 32.199219 18.097656 C 32.199219 18.898438 32.402344 19.902344 33.902344 23.300781 C 34.5 24.800781 35.097656 26.398438 35.699219 27.5 C 36.011719 28.121094 36.394531 28.691406 36.804688 29.199219 C 36.566406 29.320313 36.324219 29.476563 36.097656 29.699219 C 35.5 30.398438 35.398438 31.101563 35.199219 32.402344 C 35 33.402344 34.800781 35.5 34.699219 37.199219 C 34.699219 37.898438 34.402344 41.300781 34.300781 41.800781 C 34 42.800781 33.898438 43.300781 33.5 43.902344 C 32.800781 45 30.601563 45.902344 29.300781 45.800781 C 28.902344 45.800781 28.300781 45.800781 27.800781 45.402344 C 26.699219 44.601563 26.300781 42.800781 26.199219 41.402344 C 26.097656 40.402344 26.199219 33.199219 26 31.597656 C 25.898438 31.199219 25.800781 30.199219 25 29.5 C 24.664063 29.21875 23.96875 29.074219 23.3125 28.976563 C 23.320313 28.640625 23.339844 28.304688 23.402344 28 C 23.5 27.398438 23.699219 27.097656 23.902344 26.597656 C 24 26.300781 24.199219 25.902344 24.402344 25.402344 C 25.300781 22.601563 25.097656 18.898438 24.597656 16.597656 C 24.5 16.398438 24.097656 14.800781 22.699219 13.902344 C 21.199219 13 19.597656 13.5 18.699219 13.800781 C 18.328125 13.902344 17.960938 14.0625 17.59375 14.25 C 17.65625 13.832031 17.710938 13.410156 17.800781 13 C 18.199219 11 18.601563 9.300781 19.902344 7.601563 C 21.300781 5.898438 22.898438 4.800781 24.699219 4.5 C 25.175781 4.425781 25.632813 4.398438 26.066406 4.410156 Z M 13.71875 4.585938 C 13.953125 4.582031 14.152344 4.585938 14.300781 4.601563 C 15.863281 4.683594 17.359375 5.050781 18.84375 5.675781 C 18.660156 5.878906 18.476563 6.082031 18.300781 6.300781 C 16.601563 8.300781 16.199219 10.398438 15.800781 12.5 C 15.300781 15 15.199219 17.597656 15.597656 20.199219 L 15.402344 22.097656 C 15.300781 23.097656 15.097656 25 16.199219 27 C 16.585938 27.664063 17.011719 28.226563 17.480469 28.707031 C 16.464844 30.050781 15.386719 31.320313 14.300781 32.5 C 13.699219 33.199219 13.199219 33.699219 12.800781 33.699219 C 12.699219 33.699219 12.300781 33.5 11.699219 32.800781 C 10.597656 31.601563 10.199219 30.300781 10 29.800781 C 8.800781 26.199219 8.101563 23.898438 8 23.597656 C 7.199219 20.398438 6.800781 18.800781 6.398438 16.5 C 5.898438 13.300781 5.898438 11.699219 6.199219 10.402344 C 6.5 9 7 7.898438 7.5 7.101563 C 8.726563 5.175781 12.09375 4.628906 13.71875 4.585938 Z M 36.664063 15.125 C 36.984375 15.125 37.332031 15.164063 37.699219 15.242188 C 37.6875 16.175781 37.300781 19.105469 37.300781 19.5 C 37.300781 20.300781 37.5 21.898438 37.5 22.5 C 37.601563 23.601563 37.601563 24.199219 37.5 25 C 37.5 25 37.351563 25.714844 37.199219 26.222656 C 36.734375 25.171875 36.21875 23.917969 35.597656 22.5 C 34.097656 19.101563 34 18.402344 34 17.902344 C 34 17.199219 34 16.300781 34.597656 15.902344 C 35.160156 15.402344 35.84375 15.132813 36.664063 15.125 Z M 21.140625 15.417969 C 21.339844 15.441406 21.523438 15.5 21.699219 15.597656 C 22.5 16 22.699219 17 22.699219 17 C 23.199219 19.199219 23.398438 22.5 22.597656 24.699219 C 22.5 25.097656 22.300781 25.398438 22.199219 25.699219 C 22 26.199219 21.800781 26.699219 21.597656 27.597656 C 21.546875 27.96875 21.523438 28.335938 21.511719 28.703125 C 20.820313 28.558594 20.167969 28.3125 19.699219 28 C 18.898438 27.601563 18.300781 26.898438 17.902344 26.097656 C 17.199219 24.597656 17.300781 23.199219 17.402344 22.402344 L 17.597656 20.097656 C 17.457031 18.972656 17.390625 17.84375 17.40625 16.722656 C 17.867188 16.328125 18.46875 15.925781 19.300781 15.699219 C 19.902344 15.550781 20.558594 15.34375 21.140625 15.417969 Z M 35.886719 16.089844 C 35.625 16.101563 35.347656 16.148438 35.199219 16.199219 C 34.800781 16.300781 34.699219 16.300781 34.597656 16.5 C 34.5 16.699219 34.800781 17 34.902344 17.199219 C 35 17.199219 35.300781 17.5 35.699219 17.402344 C 36 17.300781 36.199219 17.101563 36.300781 17 C 36.402344 16.898438 36.800781 16.398438 36.5 16.199219 C 36.398438 16.097656 36.148438 16.074219 35.886719 16.089844 Z M 20.914063 16.816406 C 20.804688 16.824219 20.699219 16.851563 20.597656 16.902344 C 20.5 16.902344 20.300781 17 20.199219 17.199219 C 20.097656 17.398438 20.199219 17.597656 20.300781 17.699219 C 20.5 18 20.800781 18.300781 21.300781 18.300781 C 21.402344 18.300781 21.800781 18.300781 22.097656 18 C 22.097656 18 22.402344 17.699219 22.402344 17.402344 C 22.300781 17.199219 22.101563 17.101563 21.800781 17 C 21.574219 16.925781 21.238281 16.792969 20.914063 16.816406 Z M 19.074219 29.902344 C 19.6875 30.230469 20.425781 30.496094 21.234375 30.679688 C 21.019531 31.109375 20.710938 31.464844 20.402344 31.699219 C 19.699219 32.199219 18.800781 32.5 17.902344 32.699219 C 17.699219 32.699219 17.601563 32.800781 17.402344 32.800781 C 16.917969 32.9375 16.449219 33.089844 16.128906 33.421875 C 17.109375 32.332031 18.09375 31.128906 19.074219 29.902344 Z M 38.355469 30.703125 C 38.792969 31.03125 39.222656 31.273438 39.597656 31.402344 C 40.199219 31.601563 40.699219 31.601563 42.5 31.402344 C 42.199219 31.699219 41.300781 32.199219 40 32.402344 C 39.164063 32.484375 38.125 32.285156 37.28125 32.042969 C 37.359375 31.476563 37.449219 31.152344 37.597656 31 C 37.652344 30.949219 37.984375 30.847656 38.355469 30.703125 Z M 23.296875 31.003906 C 23.503906 31.039063 23.667969 31.066406 23.699219 31.097656 C 23.898438 31.300781 24 31.800781 24 32 C 24.011719 32.171875 24.019531 32.605469 24.027344 32.90625 C 23.203125 33.871094 21.878906 34.40625 21.597656 34.5 C 21.199219 34.699219 20 34.898438 18.800781 34.5 C 19.800781 34.199219 20.800781 33.902344 21.597656 33.300781 C 22.296875 32.800781 22.898438 32.003906 23.296875 31.003906 Z" />
            </svg>
          </div>
          <div className="skill-text">
            <h3 className="skill-title">PostgreSQL</h3>
          </div>
        </div>
        <div className="skill-card animated-section">
          <div className="skill-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="100"
              height="100"
            >
              <path d="M44.674,37.568L27.405,1.49c-0.89-1.859-3.473-2.012-4.575-0.271L3.679,31.461c-0.413,0.652-0.401,1.486,0.03,2.126 l9.647,14.323c0.599,0.889,1.7,1.29,2.729,0.994l26.994-7.775C44.596,40.692,45.357,38.994,44.674,37.568z M40.86,38.865 l-22.703,6.369c-0.526,0.148-1.02-0.318-0.906-0.853L25.3,6.749c0.145-0.678,1.064-0.788,1.364-0.163l14.843,30.881 C41.766,38.033,41.459,38.697,40.86,38.865z" />
            </svg>
          </div>
          <div className="skill-text">
            <h3 className="skill-title">Prisma ORM</h3>
          </div>
        </div>
      </section>
    </section>
  );
}

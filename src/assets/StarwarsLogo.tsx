import React from 'react';

interface StarwarsLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const StarwarsLogo: React.FC<StarwarsLogoProps> = ({ width = 1346, height = 662, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="1398 87.8 1346 662"
      height={height}
      width={width}
      className={className}
    >
      <switch>
        <g>
          <radialGradient
            id="a"
            cx={2073.8}
            cy={412.69}
            r={377.56}
            gradientTransform="matrix(1 0 0 -1 0 841.67)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={0}
              style={{
                stopColor: '#c61e25',
              }}
            />
            <stop
              offset={0.18}
              style={{
                stopColor: '#c31e24',
              }}
            />
            <stop
              offset={0.33}
              style={{
                stopColor: '#b91c22',
              }}
            />
            <stop
              offset={0.47}
              style={{
                stopColor: '#a81a1f',
              }}
            />
            <stop
              offset={0.6}
              style={{
                stopColor: '#90161b',
              }}
            />
            <stop
              offset={0.72}
              style={{
                stopColor: '#711115',
              }}
            />
            <stop
              offset={0.84}
              style={{
                stopColor: '#4b0c0e',
              }}
            />
            <stop
              offset={0.95}
              style={{
                stopColor: '#1f0505',
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: '#0a0201',
              }}
            />
          </radialGradient>
          <path
            d="M2622.6 545.9s25.5 18.6 19.8 77.3c0 0-5.4 88.9-100.2 96.7H1518.9l-90.6-291.3v-142h175.6s-32.7-37.6-9.6-99.7c0 0 17.1-57 88-65.7h835.6s68.9 1.2 99.5 68.8c0 0 19 43.2-2.1 95.1h104v260.8h-96.7z"
            style={{
              fill: 'url(#a)',
              // stroke: '#f98820',
              strokeWidth: 6,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="b"
            x1={1815.4}
            x2={2113.3}
            y1={283.379}
            y2={283.379}
            gradientTransform="matrix(1 0 0 -1 0 841.67)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={0}
              style={{
                stopColor: '#f59f13',
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: '#fbbd09',
              }}
            />
          </linearGradient>
          <path
            d="M2035.3 432.2c-.4-1.3-1.5-2.3-2.9-2.4h-137.9c-1.3.1-2.4 1-2.8 2.3 0 0-76.3 251.9-76.3 252.4 0 1.3 1 2.3 2.3 2.3h91.1c.7-.3 1.3-.9 1.5-1.7l10.6-34c.4-.9 1.2-1.4 2.1-1.5h84c.9.1 1.7.6 2.1 1.5l10.8 34c.2.8.8 1.4 1.5 1.7h89.6c1.2.1 2.2-.9 2.3-2.1v-.1c0-.5-78-252.4-78-252.4zm-50.7 147.5h-37.5c-1.3 0-2.3-1.5-2.3-2.9s20-65 20-65c.7-2.4.8-2.5 1-2.5h.1c.3 0 .3.1 1 2.5 0 0 20 64.5 20 65s-1 2.9-2.3 2.9z"
            style={{
              fill: 'url(#b)',
              stroke: '#fddc44',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="c"
            x1={2134.1}
            x2={2684}
            y1={283.88}
            y2={283.88}
            gradientTransform="matrix(1 0 0 -1 0 841.67)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={0}
              style={{
                stopColor: '#fcc207',
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: '#f1881c',
              }}
            />
          </linearGradient>
          <path
            d="M2558.4 513.2H2684v-82.3h-161.5c-15.1 0-36.4 7.8-48.6 16.8-12.2 9-29.8 29.6-29.8 57.9s17.2 50.4 17.2 50.4c8.8 10.9 31.1 33.7 31.1 33.7.5.5.8 1.3.8 2 0 1.7-1.4 3.1-3.1 3.1h-124.4c-15.2 0-16.2-6.1-16.2-6.9s1.9-2.5 1.9-2.5c5.6-2.8 17.2-11.8 17.2-11.8 24.6-19.1 27.6-45.3 27.6-59.4 0-14.1-2.2-39-27.4-60.8-25.2-21.8-57.1-22.4-57.1-22.4h-177.6v252.2c.1.8.8 1.5 1.6 1.5h98.8v-70.8c0-1.2 1.9 0 1.9 0l51.5 51.6c18.3 18.5 48.5 19.2 48.5 19.2h194.7c33.2 0 51.7-18 56.8-23s21.8-24 21.8-55.3-14.3-47.2-20.4-54.6c-6.1-7.4-27.1-29.5-31.7-34.2-.5-.5-.8-1.2-.8-1.9-.1-1.1.6-2.1 1.6-2.5zm-265.9 21.6h-55.4c-.9-.3-1.5-1.1-1.5-2.1v-27.9c-.1-.9.5-1.8 1.4-2.1h50.9c5.9 0 17.9 2.9 17.9 16.6s-13.3 15.5-13.3 15.5z"
            style={{
              fill: 'url(#c)',
              stroke: '#fddc44',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="d"
            x1={1464}
            x2={1851.302}
            y1={283.429}
            y2={283.429}
            gradientTransform="matrix(1 0 0 -1 0 841.67)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={0}
              style={{
                stopColor: '#f1861d',
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: '#f8b00d',
              }}
            />
          </linearGradient>
          <path
            d="M1850.3 429.8h-94.6c-.5 0-.8.4-.9.9l-19.6 66.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9l-20.5-66.1c-.1-.5-.4-.9-.9-.9h-104.5c-.3.1-.6.3-.7.6l-18.4 66.3c-.1.6-.4.9-.9.9-.4 0-.8-.3-.9-.7l-19.4-66.3c-.1-.4-.4-.8-.8-.8h-100.9c-.8 0-1.5.7-1.5 1.5 0 .1.1.3.1.4 0 0 77.8 253.7 77.9 253.8s.6 1.2 1.3 1.2h83.8c.6-.2 1-.7 1.1-1.3.1 0 29.2-94.4 29.2-94.4s.4-1 .9-1 .8.5.9.9l28.4 95c.2.5.7.8 1.2.8h84.4c.7 0 1.3-.5 1.4-1.2 0 0 76.7-254 76.7-254.2 0-.7-.4-1.3-1-1.5z"
            style={{
              fill: 'url(#d)',
              stroke: '#fddc44',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="e"
            x1={1465.4}
            x2={2054}
            y1={556.88}
            y2={556.88}
            gradientTransform="matrix(1 0 0 -1 0 841.67)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={0}
              style={{
                stopColor: '#f1871c',
              }}
            />
            <stop
              offset={0.1}
              style={{
                stopColor: '#f28e1a',
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: '#fdc805',
              }}
            />
          </linearGradient>
          <path
            d="M1700.7 157.6c-15.2 0-36.4 7.8-48.5 16.8-12.1 9-29.8 29.7-29.8 58.1 0 28.4 17.2 50.5 17.2 50.5 8.8 10.9 31 33.9 31 33.9.5.6.8 1.3.8 2.1 0 1.7-1.4 3.1-3.1 3.1h-202.9V412h243.9c33.2 0 51.7-18.1 56.7-23.2 5-5.1 21.8-23.9 21.8-55.3s-14.2-47.6-20.3-54.9c-6.1-7.3-27.1-29.5-31.7-34.2-.5-.5-.8-1.2-.8-1.9 0-1.1.6-2.1 1.6-2.5H1854v172h90.4V240.5H2054v-82.9h-353.3z"
            style={{
              fill: 'url(#e)',
              stroke: '#fddc44',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="f"
            x1={2331.3}
            x2={2684.1}
            y1={556.878}
            y2={556.878}
            gradientTransform="matrix(1 0 0 -1 0 841.67)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={0}
              style={{
                stopColor: '#f9b50b',
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: '#f1891b',
              }}
            />
          </linearGradient>
          <path
            d="M2561.9 321.9c-15 0-16.1-6.1-16.1-6.9s1.9-2.6 1.9-2.6c5.6-2.7 17.1-11.7 17.1-11.7 24.5-19.2 27.5-45.5 27.5-59.6 0-14.1-2.1-39.1-27.3-61s-56.9-22.5-56.9-22.5h-176.8v253c.1.8.8 1.5 1.6 1.4h98.4v-70.9c0-1.3 1.9 0 1.9 0l51.3 51.7c18.2 18.6 48.3 19.2 48.3 19.2h151.3v-90.1h-122.2zm-72.8-60.2h-55.2c-.9-.3-1.5-1.2-1.5-2.2v-28c0-.9.5-1.8 1.4-2.1h50.7c5.8 0 17.7 3 17.7 16.7s-13.1 15.6-13.1 15.6z"
            style={{
              fill: 'url(#f)',
              stroke: '#fddc44',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="g"
            x1={2017.5}
            x2={2315.5}
            y1={556.479}
            y2={556.479}
            gradientTransform="matrix(1 0 0 -1 0 841.67)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={0}
              style={{
                stopColor: '#fecf02',
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: '#fbbe08',
              }}
            />
          </linearGradient>
          <path
            d="M2237.3 160.6c-.4-1.2-1.5-2.1-2.8-2.2h-138c-1.3.1-2.4 1-2.8 2.2 0 0-76.2 248.7-76.2 249.1 0 1.3 1 2.3 2.3 2.3h91.1c.7-.3 1.3-.9 1.5-1.7l10.6-33.6c.4-.8 1.2-1.4 2.1-1.4h84c.9.1 1.7.6 2.1 1.5l10.9 33.5c.2.7.7 1.4 1.4 1.7h89.7c1.2.1 2.2-.9 2.3-2.1v-.1c0-.4-78.2-249.2-78.2-249.2zm-50.5 145.7h-37.6c-1.4 0-2.2-1.5-2.2-2.9s19.9-64.1 19.9-64.1c.8-2.4 1-2.4 1.1-2.4.2 0 .4 0 1.1 2.4 0 0 20 63.6 20 64.1s-1 2.9-2.3 2.9z"
            style={{
              fill: 'url(#g)',
              stroke: '#fddc44',
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
          />
        </g>
      </switch>
    </svg>
  );
};

export default StarwarsLogo;

const U = 28;
const G = 6;
const H = 52;
const PAD = 16;
const UNITS = 15;

const FRAME = "#2a2a27";
const KEY = "#3a3a36";
const KEY_STROKE = "#5c5c56";
const TEXT = "#f4f4ee";
const SHIFT_TEXT = "#bdbdb5";
const HIGHLIGHT_FILL = "#24301f";
const HIGHLIGHT_STROKE = "#8bff6a";

type KeySpec = {
  w: number;
  primary: string;
  secondary?: string;
  highlight?: boolean;
};

/** Widths on each row sum to 15. Enter occupies the last 1.25 on the A and Z rows. */
const ROWS: KeySpec[][] = [
  [
    { w: 1, primary: "`", secondary: "¬" },
    { w: 1, primary: "1" },
    { w: 1, primary: "2", secondary: '"', highlight: true },
    { w: 1, primary: "3", secondary: "£" },
    { w: 1, primary: "4", secondary: "$" },
    { w: 1, primary: "5", secondary: "%" },
    { w: 1, primary: "6", secondary: "^" },
    { w: 1, primary: "7", secondary: "&" },
    { w: 1, primary: "8", secondary: "*" },
    { w: 1, primary: "9", secondary: "(" },
    { w: 1, primary: "0", secondary: ")" },
    { w: 1, primary: "-", secondary: "_" },
    { w: 1, primary: "=", secondary: "+" },
    { w: 2, primary: "⌫" },
  ],
  [
    { w: 1.5, primary: "Tab" },
    { w: 1, primary: "Q" },
    { w: 1, primary: "W" },
    { w: 1, primary: "E" },
    { w: 1, primary: "R" },
    { w: 1, primary: "T" },
    { w: 1, primary: "Y" },
    { w: 1, primary: "U" },
    { w: 1, primary: "I" },
    { w: 1, primary: "O" },
    { w: 1, primary: "P" },
    { w: 1, primary: "[", secondary: "{", highlight: true },
    { w: 1, primary: "]", secondary: "}", highlight: true },
    { w: 1.5, primary: "" },
  ],
  [
    { w: 1.75, primary: "Caps" },
    { w: 1, primary: "A" },
    { w: 1, primary: "S" },
    { w: 1, primary: "D" },
    { w: 1, primary: "F" },
    { w: 1, primary: "G" },
    { w: 1, primary: "H" },
    { w: 1, primary: "J" },
    { w: 1, primary: "K" },
    { w: 1, primary: "L" },
    { w: 1, primary: ";" },
    { w: 1, primary: "'", secondary: "@" },
    { w: 1, primary: "#", secondary: "~" },
  ],
  [
    { w: 1.25, primary: "Shift" },
    { w: 1, primary: "\\", secondary: "|" },
    { w: 1, primary: "Z" },
    { w: 1, primary: "X" },
    { w: 1, primary: "C" },
    { w: 1, primary: "V" },
    { w: 1, primary: "B" },
    { w: 1, primary: "N" },
    { w: 1, primary: "M" },
    { w: 1, primary: ",", secondary: "<", highlight: true },
    { w: 1, primary: ".", secondary: ">", highlight: true },
    { w: 1, primary: "/", secondary: "?" },
    { w: 1.5, primary: "Shift" },
  ],
  [
    { w: 1.25, primary: "Ctrl" },
    { w: 1.25, primary: "Win" },
    { w: 1.25, primary: "Alt" },
    { w: 6.25, primary: "Space" },
    { w: 1.25, primary: "Alt" },
    { w: 1.25, primary: "Win" },
    { w: 1.25, primary: "Menu" },
    { w: 1.25, primary: "Ctrl" },
  ],
];

function keyWidth(units: number) {
  return units * U + Math.max(0, units - 1) * G;
}

function spanWidth(units: number) {
  return units * (U + G) - G;
}

const BOARD_W = PAD * 2 + spanWidth(UNITS);
const BOARD_H = PAD * 2 + ROWS.length * H + (ROWS.length - 1) * G;

function KeyCap({
  x,
  y,
  width,
  height = H,
  spec,
}: {
  x: number;
  y: number;
  width: number;
  height?: number;
  spec: KeySpec;
}) {
  if (!spec.primary) return null;

  const hi = spec.highlight;
  const longLabel = spec.primary.length > 1;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        fill={hi ? HIGHLIGHT_FILL : KEY}
        stroke={hi ? HIGHLIGHT_STROKE : KEY_STROKE}
        strokeWidth={hi ? 2.5 : 1}
      />
      {spec.secondary ? (
        <text
          x={x + width / 2}
          y={y + 16}
          textAnchor="middle"
          fill={hi ? HIGHLIGHT_STROKE : SHIFT_TEXT}
          fontSize={11}
          fontFamily="ui-monospace, monospace"
        >
          {spec.secondary}
        </text>
      ) : null}
      <text
        x={x + width / 2}
        y={y + (spec.secondary ? 36 : height / 2 + 5)}
        textAnchor="middle"
        fill={hi ? "#f4f4ee" : TEXT}
        fontSize={spec.primary.length > 4 ? 10 : longLabel ? 12 : 15}
        fontWeight={hi ? 700 : 500}
        fontFamily="ui-monospace, monospace"
      >
        {spec.primary}
      </text>
    </g>
  );
}

export function KeyboardSymbolsDiagram() {
  const enterW = spanWidth(1.25);
  const enterX = PAD + spanWidth(UNITS - 1.25) + G;
  const enterY = PAD + 2 * (H + G);

  return (
    <figure className="keyboard-diagram keyboard-diagram-full">
      <svg
        viewBox={`0 0 ${BOARD_W} ${BOARD_H}`}
        preserveAspectRatio="xMidYMid meet"
        className="keyboard-diagram-svg"
        role="img"
        aria-label="UK English keyboard. Highlighted keys are 2 for quotation marks, the square bracket keys for brackets and braces, and comma and full stop for angle brackets."
      >
        <rect
          x={6}
          y={6}
          width={BOARD_W - 12}
          height={BOARD_H - 12}
          rx={14}
          fill={FRAME}
        />

        {ROWS.map((row, rowIndex) => {
          let x = PAD;
          const y = PAD + rowIndex * (H + G);
          return (
            <g key={rowIndex}>
              {row.map((spec, keyIndex) => {
                const width = keyWidth(spec.w);
                const node = (
                  <KeyCap
                    key={`${rowIndex}-${keyIndex}`}
                    x={x}
                    y={y}
                    width={width}
                    spec={spec}
                  />
                );
                x += width + G;
                return node;
              })}
            </g>
          );
        })}

        <KeyCap
          x={enterX}
          y={enterY}
          width={enterW}
          height={2 * H + G}
          spec={{ w: 1.25, primary: "Enter" }}
        />
      </svg>

      <figcaption>
        <p className="keyboard-diagram-note">
          UK English layout. Highlighted keys match a typical UK laptop keyboard.
        </p>
        <dl className="keyboard-symbol-legend">
          <div>
            <dt>
              <code>&lt;</code> <code>&gt;</code>
            </dt>
            <dd>Angle brackets. Shift + comma and Shift + full stop</dd>
          </div>
          <div>
            <dt>
              <code>[</code> <code>]</code>
            </dt>
            <dd>Square brackets. Keys to the right of P</dd>
          </div>
          <div>
            <dt>
              <code>{"{"}</code> <code>{"}"}</code>
            </dt>
            <dd>Curly braces. Shift + those square bracket keys</dd>
          </div>
          <div>
            <dt>
              <code>&quot;</code>
            </dt>
            <dd>Quotation mark. Shift + 2</dd>
          </div>
        </dl>
      </figcaption>
    </figure>
  );
}

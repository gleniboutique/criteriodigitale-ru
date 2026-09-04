export type FieldDiagramMotif = "dependency" | "representation" | "boundary";

export function FieldDiagram({ motif }: { motif: FieldDiagramMotif }) {
  return (
    <figure className={`phase-field phase-field--${motif}`} aria-hidden="true">
      <svg viewBox="0 0 620 420" focusable="false">
        {motif === "dependency" && (
          <>
            <g className="phase-field__field">
              <path d="M18 352C112 310 142 336 215 292C284 250 266 184 343 151C414 120 468 164 535 111" />
              <path d="M38 391C124 356 190 375 256 334C321 293 319 235 386 211C454 187 511 220 600 171" />
            </g>
            <g className="phase-field__relations">
              <path d="M86 329C151 296 174 266 222 241" />
              <path d="M222 241C268 208 301 172 325 126" />
              <path d="M222 241C277 266 328 272 377 244" />
              <path d="M222 241C249 309 302 333 362 323" />
              <path d="M377 244C433 225 470 195 500 150" />
              <path className="phase-field__open" d="M500 150C540 112 564 101 601 91" />
            </g>
            <g className="phase-field__marks">
              <path d="M77 320h18v18H77zM213 232h18v18H213zM316 117h18v18H316z" />
              <path d="M368 235h18v18H368zM353 314h18v18H353z" />
              <path d="M491 141h18v18H491z" />
              <path className="phase-field__action" d="M590 82l20 9-20 9M573 91h37" />
            </g>
          </>
        )}

        {motif === "representation" && (
          <>
            <g className="phase-field__field">
              <path d="M30 338C118 294 170 315 235 276C304 234 313 176 382 151C451 126 510 156 599 106" />
              <path d="M14 382C112 346 184 368 264 323C337 282 349 229 421 204C491 179 548 206 620 168" />
            </g>
            <g className="phase-field__relations">
              <path d="M66 303C132 274 169 248 214 217S301 181 350 197S435 246 486 215S542 147 586 121" />
            </g>
            <g className="phase-field__marks phase-field__square-marks">
              <path d="M60 297h12v12H60zM208 211h12v12H208zM344 191h12v12H344z" />
              <path d="M480 209h12v12H480zM580 115h12v12H580z" />
            </g>
          </>
        )}

        {motif === "boundary" && (
          <>
            <g className="phase-field__field">
              <path d="M12 356C105 315 161 344 230 300C292 261 279 204 341 171" />
              <path d="M32 397C120 360 191 379 256 340C314 305 323 265 363 243" />
            </g>
            <path className="phase-field__boundary" d="M392 54V366" />
            <g className="phase-field__relations">
              <path d="M90 329C159 294 206 269 258 226C304 188 340 158 392 150" />
              <path className="phase-field__open" d="M392 286C438 276 473 249 504 213" />
            </g>
            <g className="phase-field__marks">
              <path d="M81 320h18v18H81zM249 217h18v18H249z" />
              <path d="M382 140h20v20H382z" />
              <path className="phase-field__action" d="M497 201l18 10-18 10M480 211h35" />
            </g>
          </>
        )}
      </svg>
    </figure>
  );
}

export default function SystemMap() {
  return (
    <figure className="system-atlas">
      <svg
        viewBox="0 0 760 650"
        role="img"
        aria-labelledby="atlas-title atlas-description"
      >
        <title id="atlas-title">Карта перехода от проблемы к обоснованному действию</title>
        <desc id="atlas-description">
          От наблюдаемой проблемы путь проходит через возможные причины и факты к следующему действию.
          ИИ отмечен как один из инструментов, а человек — как источник критерия.
        </desc>

        <g className="atlas-grid" aria-hidden="true">
          <path d="M38 96H722" />
          <path d="M38 550H722" />
          <path d="M126 52V598" />
          <path d="M622 52V598" />
          <path d="M38 96h18M38 323h10M38 550h18" />
          <path d="M126 52v18M374 52v10M622 52v18" />
          <path d="M704 96h18M712 323h10M704 550h18" />
        </g>

        <g className="atlas-field" aria-hidden="true">
          <path d="M-18 488C82 438 146 468 204 424C263 380 246 314 319 276C392 238 471 286 525 232C575 182 560 94 665 42" />
          <path d="M-24 532C88 479 164 515 232 466C305 413 276 343 353 310C431 276 510 326 579 266C638 216 619 132 778 76" />
          <path d="M62 602C126 564 174 577 226 552C295 518 326 464 389 446C459 426 532 469 604 431C665 398 696 343 782 323" />
          <path d="M76 390C128 361 159 370 197 344C234 319 245 278 286 253" />
        </g>

        <g className="atlas-relations" aria-hidden="true">
          <path d="M172 456C205 421 239 402 278 386" />
          <path d="M278 386C321 354 344 321 367 281" />
          <path d="M278 386C337 410 391 406 438 369" />
          <path d="M367 281C415 270 458 286 492 319" />
          <path d="M438 369C478 356 503 338 521 302" />
          <path className="relation-open" d="M521 302C557 263 581 250 618 238" />
        </g>

        <path
          className="atlas-route"
          aria-hidden="true"
          d="M78 504C156 475 173 448 223 414C293 367 327 337 367 281C407 224 475 260 521 214C559 176 575 130 654 105"
        />

        <g className="atlas-marks" aria-hidden="true">
          <g className="mark-field">
            <circle cx="79" cy="504" r="12" />
            <circle cx="79" cy="504" r="3" />
          </g>
          <g className="mark-relations">
            <path d="M262 372h32v28h-32" />
            <path d="M278 368v36" />
          </g>
          <g className="mark-structure">
            <rect x="505" y="286" width="32" height="32" />
            <path d="M505 302h32M521 286v32" />
          </g>
          <g className="mark-action">
            <path d="M644 95l20 10-20 10" />
            <path d="M630 105h34" />
          </g>
          <path className="mark-ai" d="M202 508h24M214 496v24" />
          <path className="mark-human" d="M378 263a18 18 0 1 1-20 17" />
        </g>

        <g className="atlas-labels" aria-hidden="true">
          <text x="57" y="475">ПОЛЕ</text>
          <text x="57" y="527" className="atlas-coordinate">01 / 43.771</text>

          <text x="250" y="346">ОТНОШЕНИЯ</text>
          <text x="250" y="421" className="atlas-coordinate">02 / РАЗЛИЧИТЬ</text>

          <text x="493" y="270">СТРУКТУРА</text>
          <text x="493" y="339" className="atlas-coordinate">03 / СОБРАТЬ</text>

          <text x="575" y="76">ВОЗМОЖНОЕ</text>
          <text x="575" y="90">ДЕЙСТВИЕ</text>
          <text x="575" y="128" className="atlas-coordinate">04 / ПРОВЕРИТЬ</text>

          <text x="184" y="539" className="atlas-side-label">AI / ИНСТРУМЕНТ</text>
          <text x="389" y="242" className="atlas-side-label">ЧЕЛОВЕК / КРИТЕРИЙ</text>
          <text x="637" y="226" className="atlas-side-label">СВЯЗЬ ОСТАЁТСЯ ОТКРЫТОЙ</text>
        </g>
      </svg>

      <figcaption>
        <span>Living system / map 01</span>
        <span>Не схема ответа, а поле различий</span>
      </figcaption>
    </figure>
  );
}

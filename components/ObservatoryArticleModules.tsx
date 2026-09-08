import type { ElementType, ReactNode } from "react";
import styles from "./ObservatoryArticleModules.module.css";

type ModuleProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  coordinate?: string;
  label?: string;
  labelledBy?: string;
};

function moduleClass(base: string, className?: string) {
  return className ? `${base} ${className}` : base;
}

function ModuleFrame({
  as: Component = "section",
  children,
  className,
  coordinate,
  label,
  labelledBy,
  moduleName,
}: ModuleProps & { moduleName: string }) {
  return (
    <Component
      className={moduleClass(styles[moduleName], className)}
      data-coordinate={coordinate}
      data-visual-module={moduleName}
      aria-label={label}
      aria-labelledby={labelledBy}
    >
      {children}
    </Component>
  );
}

export function ProseField(props: ModuleProps) {
  return <ModuleFrame {...props} moduleName="proseField" />;
}

export function DistinctionBoundary(props: ModuleProps) {
  return <ModuleFrame {...props} moduleName="distinctionBoundary" />;
}

export function IndexedField({
  variant = "steps",
  ...props
}: ModuleProps & { variant?: "steps" | "observations" | "compare" }) {
  return (
    <div
      className={moduleClass(styles.indexedField, props.className)}
      data-coordinate={props.coordinate}
      data-indexed-variant={variant}
      data-visual-module="indexedField"
      aria-label={props.label}
    >
      {props.children}
    </div>
  );
}

export function EvidenceField(props: ModuleProps) {
  return <ModuleFrame {...props} moduleName="evidenceField" />;
}

export function DarkSystemField(props: ModuleProps) {
  return <ModuleFrame {...props} moduleName="darkSystemField" />;
}

export function QuestionCriterionField(props: ModuleProps) {
  return <ModuleFrame {...props} moduleName="questionCriterionField" />;
}

export function SourceTrace(props: ModuleProps) {
  return <ModuleFrame {...props} moduleName="sourceTrace" />;
}

export function ArticleEnd(props: ModuleProps) {
  return <ModuleFrame {...props} as={props.as ?? "footer"} moduleName="articleEnd" />;
}

function MapCaption({ children }: { children: ReactNode }) {
  return <figcaption className={styles.mapCaption}>{children}</figcaption>;
}

export function AutomationWorkMap({ className }: { className?: string } = {}) {
  return (
    <figure
      className={moduleClass(`${styles.relationMap} ${styles.automationWorkMap}`, className)}
      aria-label="Карта отношений между людьми, процессами, технологиями, контекстом и результатом автоматизации"
    >
      <svg className={styles.desktopMap} data-map-kind="automation-work" data-map-viewport="desktop" viewBox="0 0 760 500" role="img" aria-hidden="true">
        <defs>
          <marker id="automation-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="6" refY="4">
            <path d="M0 0L8 4L0 8Z" fill="currentColor" />
          </marker>
        </defs>
        <g className={styles.mapField}>
          <circle cx="370" cy="248" r="166" />
          <circle cx="370" cy="248" r="105" />
          <path d="M370 46V452M108 248H650" />
        </g>
        <g className={styles.mapRelations}>
          <path d="M172 132C238 132 280 177 370 248" />
          <path d="M536 108C490 138 445 188 370 248" />
          <path d="M162 382C238 364 285 306 370 248" />
          <path d="M370 248C448 250 500 290 584 328" />
        </g>
        <g className={styles.mapRoute}>
          <path d="M174 382C251 352 303 294 370 248C444 198 518 233 584 328C619 379 650 386 681 354" markerEnd="url(#automation-arrow)" />
        </g>
        <g className={styles.mapNodes}>
          <rect x="165" y="125" width="14" height="14" />
          <rect x="529" y="101" width="14" height="14" />
          <rect x="155" y="375" width="14" height="14" />
          <rect x="363" y="241" width="14" height="14" />
          <rect x="577" y="321" width="14" height="14" />
        </g>
        <g className={styles.mapLabels}>
          <text x="118" y="110">ЛЮДИ</text>
          <text x="506" y="86">ТЕХНОЛОГИИ</text>
          <text x="102" y="417">КОНТЕКСТ</text>
          <text x="326" y="225">ПРОЦЕССЫ</text>
          <text x="598" y="337">РЕЗУЛЬТАТ</text>
        </g>
      </svg>
      <svg className={styles.mobileMap} data-map-kind="automation-work" data-map-viewport="mobile" viewBox="0 0 360 390" role="img" aria-hidden="true">
        <defs>
          <marker id="automation-arrow-mobile" markerHeight="8" markerWidth="8" orient="auto" refX="6" refY="4">
            <path d="M0 0L8 4L0 8Z" fill="currentColor" />
          </marker>
        </defs>
        <g className={styles.mapField}>
          <circle cx="180" cy="195" r="128" />
          <circle cx="180" cy="195" r="76" />
          <path d="M180 38V352M35 195H325" />
        </g>
        <g className={styles.mapRelations}>
          <path d="M74 86C112 105 142 146 180 195" />
          <path d="M286 82C250 108 220 151 180 195" />
          <path d="M72 302C116 278 146 236 180 195" />
          <path d="M180 195C220 207 252 245 288 283" />
        </g>
        <g className={styles.mapRoute}>
          <path d="M72 302C110 270 142 225 180 195C225 160 257 214 288 283C300 309 318 315 332 297" markerEnd="url(#automation-arrow-mobile)" />
        </g>
        <g className={styles.mapNodes}>
          <rect x="68" y="80" width="12" height="12" />
          <rect x="280" y="76" width="12" height="12" />
          <rect x="66" y="296" width="12" height="12" />
          <rect x="174" y="189" width="12" height="12" />
          <rect x="282" y="277" width="12" height="12" />
        </g>
        <g className={styles.mapLabels}>
          <text x="30" y="62">ЛЮДИ</text>
          <text x="238" y="58">ТЕХНОЛОГИИ</text>
          <text x="24" y="337">КОНТЕКСТ</text>
          <text x="138" y="178">ПРОЦЕССЫ</text>
          <text x="246" y="318">РЕЗУЛЬТАТ</text>
        </g>
      </svg>
    </figure>
  );
}

export function AssignmentTraceMap({ className }: { className?: string } = {}) {
  return (
    <figure
      className={moduleClass(`${styles.relationMap} ${styles.assignmentTraceMap}`, className)}
      aria-label="Карта поручения: агент сообщает о готовности, а внешний результат и след проверки остаются отдельными слоями"
    >
      <MapCaption>
        <span>Схема поручения / 00.1</span>
        <span>Сообщение и внешний результат — разные слои</span>
      </MapCaption>
      <svg className={styles.desktopMap} data-map-kind="assignment-trace" data-map-viewport="desktop" viewBox="0 0 960 430" role="img" aria-hidden="true">
        <defs>
          <marker id="assignment-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="6" refY="4">
            <path d="M0 0L8 4L0 8Z" fill="currentColor" />
          </marker>
        </defs>
        <g className={styles.mapField}>
          <path d="M80 92H880M80 214H880M80 336H880" />
          <path d="M230 58V372M480 58V372M730 58V372" />
        </g>
        <g className={styles.mapRelations}>
          <path
            d="M480 184C470 239 478 284 505 322"
            data-relation="agent-to-external-result"
          />
          <path
            d="M234 247C320 292 404 323 505 322"
            data-relation="trace-to-external-result"
          />
        </g>
        <g className={styles.mapOpenRelation}>
          <path
            d="M724 236C669 294 598 318 505 322"
            data-relation="message-to-external-result"
          />
        </g>
        <g className={styles.mapRoute}>
          <path
            d="M142 118C264 72 374 110 480 184C576 251 641 249 724 236"
            data-relation="assignment-to-agent-to-message"
            markerEnd="url(#assignment-arrow)"
          />
        </g>
        <g className={styles.mapNodes}>
          <rect x="135" y="111" width="14" height="14" />
          <rect x="473" y="177" width="14" height="14" />
          <rect x="717" y="229" width="14" height="14" />
          <rect x="498" y="315" width="14" height="14" />
          <rect x="227" y="240" width="14" height="14" />
        </g>
        <g className={styles.mapLabels}>
          <text x="94" y="94">ПОРУЧЕНИЕ</text>
          <text x="445" y="158">АГЕНТ</text>
          <text x="686" y="211">СООБЩЕНИЕ «ГОТОВО»</text>
          <text x="444" y="356">ВНЕШНИЙ РЕЗУЛЬТАТ</text>
          <text x="170" y="280">СЛЕД-ПРОВЕРКА</text>
        </g>
      </svg>
      <svg className={styles.mobileMap} data-map-kind="assignment-trace" data-map-viewport="mobile" viewBox="0 0 360 540" role="img" aria-hidden="true">
        <defs>
          <marker id="assignment-arrow-mobile" markerHeight="8" markerWidth="8" orient="auto" refX="6" refY="4">
            <path d="M0 0L8 4L0 8Z" fill="currentColor" />
          </marker>
        </defs>
        <g className={styles.mapField}>
          <path d="M28 118H332M28 248H332M28 378H332M28 508H332" />
          <path d="M90 42V518M180 42V518M270 42V518" />
        </g>
        <g className={styles.mapRelations}>
          <path
            d="M180 230C213 281 239 342 266 410"
            data-relation="agent-to-external-result"
          />
          <path
            d="M70 440C136 420 199 409 266 410"
            data-relation="trace-to-external-result"
          />
        </g>
        <g className={styles.mapOpenRelation}>
          <path
            d="M300 130C294 235 282 327 266 410"
            data-relation="message-to-external-result"
          />
        </g>
        <g className={styles.mapRoute}>
          <path
            d="M62 120C108 134 139 181 180 230C220 193 253 153 300 130"
            data-relation="assignment-to-agent-to-message"
            markerEnd="url(#assignment-arrow-mobile)"
          />
        </g>
        <g className={styles.mapNodes}>
          <rect x="56" y="114" width="12" height="12" />
          <rect x="174" y="224" width="12" height="12" />
          <rect x="294" y="124" width="12" height="12" />
          <rect x="260" y="404" width="12" height="12" />
          <rect x="64" y="434" width="12" height="12" />
        </g>
        <g className={styles.mapLabels}>
          <text x="20" y="98">ПОРУЧЕНИЕ</text>
          <text x="151" y="208">АГЕНТ</text>
          <text x="138" y="108">СООБЩЕНИЕ «ГОТОВО»</text>
          <text x="103" y="450">ВНЕШНИЙ РЕЗУЛЬТАТ</text>
          <text x="22" y="478">СЛЕД-ПРОВЕРКА</text>
        </g>
      </svg>
    </figure>
  );
}

export { styles as observatoryModuleStyles };

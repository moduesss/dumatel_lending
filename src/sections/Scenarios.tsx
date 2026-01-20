"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Button";
import { withBasePath } from "@/lib/paths";
import styles from "./Scenarios.module.scss";

const badges = [
  "Работа",
  "Исследования",
  "HR",
  "Продажи",
  "Юристам",
  "Закупки",
  "Управление",
];

/**
 * ВАЖНО:
 * Мы оставляем список, но в CSS превращаем его в "линии" (скелетон),
 * скрывая текст и рисуя полоски через li::before.
 */
const webAgentItems = [
  "line-1",
  "line-2",
  "line-3",
  "line-4",
  "line-5",
  "line-6",
];

export default function Scenarios() {
  const [activeBadge, setActiveBadge] = useState(0);

  return (
    <section className={styles.scenarios} aria-labelledby="scenarios-title">
      <div className={styles.scenarios__inner}>
        <header className={styles.scenarios__header}>
          <h2 id="scenarios-title">
            От личных документов <br />
            до бизнес-задач
          </h2>
          <p>
            Сценарии, где Думатель экономит часы и снижает ошибки. В каждом
            примере: работа с документами и Web-агент
          </p>
        </header>

        <div
          className={styles.scenarios__badges}
          role="group"
          aria-label="Категории сценариев"
        >
          {badges.map((badge, index) => (
            <button
              key={badge}
              type="button"
              className={styles.scenarios__badge}
              data-active={index === activeBadge}
              aria-pressed={index === activeBadge}
              onClick={() => setActiveBadge(index)}
            >
              {badge}
            </button>
          ))}
        </div>

        <div className={styles.scenarios__grid}>
          {/* 1) Аналитический отчёт */}
          <article className={styles["scenario-card"]}>
            <div className={styles["scenario-card__media"]}>
              <div className={styles["scenario-docs"]}>
                <div
                  className={[
                    styles["scenario-doc"],
                    styles["scenario-doc--tilt-left"],
                  ].join(" ")}
                >
                  <p className={styles["scenario-doc__title"]}>
                    Ключевые показатели для 2025 года:
                  </p>
                  <ol className={styles["scenario-doc__list"]}>
                    <li>
                      Электронный документооборот: приемка исключительно через
                      электронное актирование в ЕИС.
                    </li>
                    <li>
                      Нацрежим: обновленные правила импортозамещения (2025).
                    </li>
                    <li>
                      Сроки: для СМП сокращенные сроки оплаты (до 7 раб. дней).
                    </li>
                  </ol>
                </div>

                <div
                  className={[
                    styles["scenario-doc"],
                    styles["scenario-doc--tilt-right"],
                  ].join(" ")}
                >
                  <p className={styles["scenario-doc__title"]}>
                    «Обоснование объекта закупки на 2025 финансовый год»
                  </p>
                  <div className={styles["scenario-doc__text"]}>
                    <p>
                      1. Общие положения <br />
                      Настоящая закупка осуществляется в соответствии с
                      планом-графиком на 2025 год...
                    </p>
                    <p>2. Объект закупки и код позиции</p>
                    <ul>
                      <li>Наименование объекта: …</li>
                      <li>Код по ОКПД2: …</li>
                      <li>Период поставки: …</li>
                    </ul>
                    <p>
                      3. Обоснование НМЦК <br />
                      Расчет произведен методом сопоставимых рыночных цен...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["scenario-card__body"]}>
              <h3>Аналитический отчёт за считанные секунды!</h3>
              <p className={styles["scenario-card__hint"]}>Думатель умеет:</p>

              <div className={styles["scenario-card__note"]}>
                <p>
                  <strong>Объединять таблицы </strong>
                  <span className={styles["scenario-card__note-medium"]}>
                    и отчёты, находит ключевые показатели,{" "}
                  </span>
                  <strong>
                    строит графики и формирует краткий аналитический документ{" "}
                  </strong>
                  <span>
                    с причинами изменений и ссылками на источники.
                  </span>
                </p>
              </div>
            </div>
          </article>

          {/* 2) Расчёты по документам */}
          <article className={styles["scenario-card"]}>
            <div className={styles["scenario-card__media"]}>
              <div className={styles["scenario-files"]}>
                <div
                  className={[
                    styles["scenario-file"],
                    styles["scenario-file--pdf"],
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <Image
                    src={withBasePath("/icons/scenario-pdf.svg")}
                    alt=""
                    width={150}
                    height={200}
                    className={styles["scenario-file__image"]}
                  />
                  <span className={styles["scenario-file__label"]}>PDF</span>
                </div>

                <div
                  className={[
                    styles["scenario-file"],
                    styles["scenario-file--xls"],
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <Image
                    src={withBasePath("/icons/scenario-xls.svg")}
                    alt=""
                    width={150}
                    height={200}
                    className={styles["scenario-file__image"]}
                  />
                  <span className={styles["scenario-file__label"]}>XLS</span>
                </div>

                <div
                  className={[
                    styles["scenario-file"],
                    styles["scenario-file--doc"],
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <Image
                    src={withBasePath("/icons/scenario-doc.svg")}
                    alt=""
                    width={150}
                    height={200}
                    className={styles["scenario-file__image"]}
                  />
                  <span className={styles["scenario-file__label"]}>DOC</span>
                </div>
              </div>
            </div>

            <div className={styles["scenario-card__body"]}>
              <div className={styles["scenario-card__title-row"]}>
                <span
                  className={styles["scenario-card__title-icon"]}
                  aria-hidden="true"
                >
                  <Image
                    src={withBasePath("/icons/scenario-calc.svg")}
                    alt=""
                    width={21}
                    height={28}
                    className={styles["scenario-card__title-icon-image"]}
                  />
                </span>
                <h3>
                  Думатель проводит расчёт прямо <br />
                  по документам
                </h3>
              </div>

              <p className={styles["scenario-card__text"]}>
                Система находит формулы и числовые значения, подставляет данные и
                показывает точный результат с указанием источника.
              </p>
            </div>
          </article>

          {/* 3) Web Agent */}
          <article className={styles["scenario-card"]}>
            <div className={styles["scenario-card__media"]}>
              <div className={styles["scenario-browser"]}>
                <div className={styles["scenario-browser__header"]}>
                  <span
                    className={styles["scenario-browser__icon"]}
                    aria-hidden="true"
                  >
                    <Image
                      src={withBasePath("/icons/scenario-web-icon.svg")}
                      alt=""
                      width={16}
                      height={22}
                    />
                  </span>
                  <p>Выхожу в интернет и ищу необходимую информацию...</p>
                </div>

                <ol className={styles["scenario-browser__list"]}>
                  {webAgentItems.map((item, index) => (
                    <li key={`web-agent-${index}`}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className={styles["scenario-card__body"]}>
              <div className={styles["scenario-card__title-row"]}>
                <span
                  className={styles["scenario-card__title-icon"]}
                  aria-hidden="true"
                >
                  <Image
                    src={withBasePath("/icons/scenario-web-title.svg")}
                    alt=""
                    width={27}
                    height={28}
                    className={styles["scenario-card__title-icon-image"]}
                  />
                </span>

                <h3>
                  Найдите уникальное решение под задачу <br />
                  вместе с Веб-Агентом!
                </h3>
              </div>

              {/* CHANGE: бейдж "вписан" в текст (inline flow) */}
              <div className={styles["scenario-card__inline"]}>
                <span className={styles["scenario-card__tag"]}>
                  <span
                    className={styles["scenario-card__tag-icon"]}
                    aria-hidden="true"
                  >
                    <Image
                      src={withBasePath("/icons/scenario-web-badge.svg")}
                      alt=""
                      width={16}
                      height={22}
                    />
                  </span>
                  Веб-Агент
                </span>

                <p className={styles["scenario-card__text"]}>
                  анализирует открытые источники, проверяет отзывы и формирует
                  список решений с плюсами и минусами.
                </p>
              </div>
            </div>
          </article>

          {/* 4) Удовольствие: картинка в фоне */}
          <article className={styles["scenario-card"]}>
            <div className={styles["scenario-card__media"]}>
              <div className={styles["scenario-mediaFill"]}>
                <Image
                  src={withBasePath("/images/думатель скрин 1.png")}
                  alt="Экран Думателя"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles["scenario-mediaFill__img"]}
                />
              </div>
            </div>

            <div className={styles["scenario-card__body"]}>
              <div className={styles["scenario-card__title-row"]}>
                <span
                  className={styles["scenario-card__title-icon"]}
                  aria-hidden="true"
                >
                  <Image
                    src={withBasePath("/icons/scenario-cta.svg")}
                    alt=""
                    width={27}
                    height={30}
                    className={styles["scenario-card__title-icon-image"]}
                  />
                </span>

                <h3>
                  Работайте в удовольствие вместе с нашим <br />
                  Думателем
                </h3>
              </div>

              <p className={styles["scenario-card__text"]}>
                Сократите время затраченное на задачи до минимума и закрывайте их
                как можно быстрее без потери качества работы.
              </p>
            </div>
          </article>
        </div>

        <Button variant="primary" size="lg" href="https://app.dumatel.ru/">
          Протестировать Думателя сейчас
        </Button>
      </div>
    </section>
  );
}

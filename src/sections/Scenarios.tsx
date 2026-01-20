import Image from "next/image";
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

const webAgentItems = [
  "Электронный документооборот: Обязательно укажите, что приемка осуществляется исключительно через электронное актирование в ЕИС.",
  "Нацрежим: В 2025 году действуют обновленные правила импортозамещения (нацрежим). Проверьте, попадает ли ваш товар под запрет или ограничения на закупку иностранных товаров.",
  "Сроки: Помните, что для субъектов малого предпринимательства (СМП) сроки оплаты в 2025 году остаются сокращенными (обычно до 7 рабочих дней).",
  "Электронный документооборот: Обязательно укажите, что приемка осуществляется исключительно через электронное актирование в ЕИС.",
  "Нацрежим: В 2025 году действуют обновленные правила импортозамещения (нацрежим). Проверьте, попадает ли ваш товар под запрет или ограничения на закупку иностранных товаров.",
  "Сроки: Помните, что для субъектов малого предпринимательства (СМП)",
];

export default function Scenarios() {
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

        <div className={styles.scenarios__badges} role="group" aria-label="Категории сценариев">
          {badges.map((badge, index) => (
            <button
              key={badge}
              type="button"
              className={styles.scenarios__badge}
              data-active={index === 0}
              aria-pressed={index === 0}
            >
              {badge}
            </button>
          ))}
        </div>

        <div className={styles.scenarios__grid}>
          <article className={styles["scenario-card"]}>
            <div className={styles["scenario-card__media"]}>
              <div className={styles["scenario-docs"]}>
                <div className={[styles["scenario-doc"], styles["scenario-doc--tilt-left"]].join(" ")}>
                  <p className={styles["scenario-doc__title"]}>
                    Ключевые показатели для 2025 года:
                  </p>
                  <ol className={styles["scenario-doc__list"]}>
                    <li>
                      Электронный документооборот: Обязательно укажите, что
                      приемка осуществляется исключительно через электронное
                      актирование в ЕИС.
                    </li>
                    <li>
                      Нацрежим: В 2025 году действуют обновленные правила
                      импортозамещения (нацрежим). Проверьте, попадает ли ваш
                      товар под запрет или ограничения на закупку иностранных
                      товаров.
                    </li>
                    <li>
                      Сроки: Помните, что для субъектов малого
                      предпринимательства (СМП) сроки оплаты в 2025 году
                      остаются сокращенными (обычно до 7 рабочих дней).
                    </li>
                  </ol>
                </div>
                <div className={[styles["scenario-doc"], styles["scenario-doc--tilt-right"]].join(" ")}>
                  <p className={styles["scenario-doc__title"]}>
                    «Обоснование объекта закупки на 2025 финансовый год»
                  </p>
                  <div className={styles["scenario-doc__text"]}>
                    <p>
                      1. Общие положения
                      <br />
                      Настоящая закупка осуществляется в соответствии с
                      планом-графиком на 2025 год для обеспечения государственных
                      (муниципальных) нужд / нужд предприятия. Целью закупки
                      является бесперебойное функционирование [название
                      подразделения/организации] и реализация утвержденных
                      программ на 2025 год.
                    </p>
                    <p>2. Объект закупки и код позиции</p>
                    <ul>
                      <li>
                        Наименование объекта: [Например: Поставка офисной бумаги
                        и канцелярских принадлежностей]
                      </li>
                      <li>Код по ОКПД2: [Например: 17.12.14.110]</li>
                      <li>
                        Период поставки/оказания услуг: с 01.01.2025 по
                        31.12.2025.
                      </li>
                    </ul>
                    <p>
                      3. Обоснование начальной (максимальной) цены контракта
                      (НМЦК)
                      <br />
                      Расчет НМЦК на 2025 год произведен методом сопоставимых
                      рыночных цен (анализа рынка) на основании коммерческих
                      предложений, полученных в IV квартале 2024 года, с учетом
                      прогнозного уровня инфляции и индексов-дефляторов,
                      установленных Минэкономразвития на 2025 год.
                    </p>
                    <p>4. Требования к участникам в 2025 году</p>
                    <ul>
                      <li>
                        Соответствие единым требованиям согласно ч. 1 ст. 31
                        44-ФЗ.
                      </li>
                      <li>
                        Отсутствие сведений об участнике в реестре
                        недобросовестных поставщиков (РНП).
                      </li>
                      <li>
                        Приоритет товарам российского происхождения в
                        соответствии с актуальными квотами на 2025 год (ПП РФ
                        №2013 / ПП РФ №2014).
                      </li>
                    </ul>
                    <p>
                      5. Особенности исполнения контракта
                      <br />
                      Оплата производится по факту поставки товара (выполнения
                      работ) в течение [7/10] рабочих дней с даты подписания
                      документа о приемке в электронной форме через ЕИС (Единую
                      информационную систему), что является обязательным
                      требованием для всех закупок в 2025 году.
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

          <article className={styles["scenario-card"]}>
            <div className={styles["scenario-card__media"]}>
              <div className={styles["scenario-files"]}>
                <div className={[styles["scenario-file"], styles["scenario-file--pdf"]].join(" ")}>
                  PDF
                </div>
                <div className={[styles["scenario-file"], styles["scenario-file--xls"]].join(" ")}>
                  XLS
                </div>
                <div className={[styles["scenario-file"], styles["scenario-file--doc"]].join(" ")}>
                  DOC
                </div>
              </div>
            </div>
            <div className={styles["scenario-card__body"]}>
              <div className={styles["scenario-card__title-row"]}>
                <span className={styles["scenario-card__marker"]} aria-hidden="true" />
                <h3>
                  Думатель проводит расчёт прямо <br />
                  по документам
                </h3>
              </div>
              <p className={styles["scenario-card__text"]}>
                Система находит формулы и числовые значения, подставляет данные
                и показывает точный результат с указанием источника.
              </p>
            </div>
          </article>

          <article className={styles["scenario-card"]}>
            <div className={styles["scenario-card__media"]}>
              <div className={styles["scenario-browser"]}>
                <div className={styles["scenario-browser__header"]}>
                  <span className={styles["scenario-browser__icon"]} aria-hidden="true" />
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
                <span className={styles["scenario-card__marker"]} aria-hidden="true" />
                <h3>
                  Найдите уникальное решение под задачу <br />
                  вместе с Веб-Агентом!
                </h3>
              </div>
              <div className={styles["scenario-card__tag-row"]}>
                <span className={styles["scenario-card__tag"]}>
                  <span className={styles["scenario-card__tag-icon"]} aria-hidden="true">
                    <Image
                      src={withBasePath("/icons/Vector-46.svg")}
                      alt=""
                      width={12}
                      height={12}
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

          <article className={styles["scenario-card"]}>
            <div className={styles["scenario-card__media"]}>
              <Image
                src={withBasePath("/images/думатель скрин 1.png")}
                alt="Экран Думателя"
                width={687}
                height={372}
                className={styles["scenario-card__media-image"]}
              />
            </div>
            <div className={styles["scenario-card__body"]}>
              <div className={styles["scenario-card__title-row"]}>
                <span className={styles["scenario-card__marker"]} aria-hidden="true" />
                <h3>
                  Работайте в удовольствие вместе с нашим <br />
                  Думателем
                </h3>
              </div>
              <p className={styles["scenario-card__text"]}>
                Сократите время затраченное на задачи до минимума и закрывайте
                их как можно быстрее без потери качества работы.
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

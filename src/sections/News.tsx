import Container from "@/components/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { getNews } from "@/lib/sanity";

export default async function News() {
  const items = await getNews();

  return (
    <section className="section news" id="news">
      <Container>
        <SectionTitle
          eyebrow="News"
          title="Product updates and platform stories."
          description="Publish posts in Sanity to populate this section."
        />
        <div className="news__grid">
          {items.length === 0 ? (
            <p className="news__empty">
              No news yet. Add entries in Sanity to see updates here.
            </p>
          ) : (
            items.map((item) => (
              <article className="news__card" key={item._id}>
                <p className="news__date">{item.publishedAt ?? ""}</p>
                <h3>{item.title}</h3>
                {item.excerpt ? <p>{item.excerpt}</p> : null}
              </article>
            ))
          )}
        </div>
      </Container>
    </section>
  );
}

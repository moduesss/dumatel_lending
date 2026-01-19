import Container from "@/components/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const rows = [
  { label: "Multi-region edge", dumatel: "Included", legacy: "Add-on" },
  { label: "Zero-downtime releases", dumatel: "Default", legacy: "Manual" },
  { label: "Real-time insights", dumatel: "Native", legacy: "Third-party" },
];

export default function Comparison() {
  return (
    <section className="section comparison" id="comparison">
      <Container>
        <SectionTitle
          eyebrow="Why Dumatel"
          title="A faster stack with fewer moving parts."
          description="Built for modern teams that want less toil and more control."
        />
        <div className="comparison__table" role="table">
          <div className="comparison__row" role="row">
            <span role="columnheader">Capability</span>
            <span role="columnheader">Dumatel</span>
            <span role="columnheader">Legacy stack</span>
          </div>
          {rows.map((row) => (
            <div className="comparison__row" role="row" key={row.label}>
              <span role="cell">{row.label}</span>
              <span role="cell">{row.dumatel}</span>
              <span role="cell">{row.legacy}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

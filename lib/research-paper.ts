import { siteConfig } from "@/lib/site";

export const researchPaper = {
  slug: "research",
  path: "/research",
  pdfPath: "/research/measuring-cross-channel-disagreement-llm-evaluation.pdf",
  title: "Measuring Cross-Channel Disagreement in LLM Evaluation",
  shortTitle: "Cross-Channel Disagreement in LLM Evaluation",
  subtitle:
    "CCD-Bench: frozen diagnostic corpus for parser, judge, and human disagreement on identical transcripts",
  author: "Nirav Rohra",
  affiliation: "University of Texas at Dallas",
  email: "nirav.rohra@utdallas.edu",
  type: "Preprint" as const,
  language: "en",
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  readingTimeMinutes: 45,
  pageCount: 46,
  keywords: [
    "cross-channel disagreement",
    "CCD-Bench",
    "LLM evaluation",
    "mechanistic interpretability",
    "LLM safety evaluation",
    "parser-judge disagreement",
    "evaluation inconsistency index",
    "EII",
    "blinded human annotation",
    "agent benchmarks",
    "frozen diagnostic corpus",
    "judge malice scoring",
    "ToolEmu",
    "AgentHarm",
    "contrastive activation mapping",
    "finite-population metrology",
    "Wilson confidence interval",
    "BCa bootstrap",
    "Nirav Rohra",
    "UT Dallas",
    "AI safety research",
  ],
  abstract: `LLM evaluation often collapses heterogeneous evidence into scalars or judge scores, hiding when parsers, judges, and humans disagree on the same transcript. We release CCD-Bench, a frozen diagnostic corpus (eighteen behavioral suites, twelve heterogeneous checkpoints) with joint parser outputs, multi-judge scores, and replayable rows; suites were frozen before aggregate analysis with null and error rows retained. The central empirical claim is finite-population and protocol-specific: on n=642 suite-stratified transcript rows after QC (all eighteen suites), parser-only violation flags align far better with blinded human-majority labels than the frozen three-judge Llama panel at τ=0, while transcript-preserving judge replacements improve recall but leave substantial false negatives unless parsers enter fusion rules. We publish harness code, prompts, manifests, and frozen JSON trees for reproduction.`,
  contributions: [
    {
      label: "Conceptual",
      text: "Cross-channel disagreement (CCD), an evaluation inconsistency index (EII), and when scalar fusion cannot preserve incompatible channel orderings.",
    },
    {
      label: "Apparatus",
      text: "Per-run audit ledger with integrity hooks for identifier-aligned parser, judge, and human channels.",
    },
    {
      label: "CCD-Bench",
      text: "Eighteen suites spanning seven recurring risk constructs; five flagship suites anchor the judge-panel audit; stratified blinded human coding on n=642 pooled rows.",
    },
    {
      label: "Evidence",
      text: "Judge misses concentrate in parser-positive cells humans usually validate; replacing judges moves recall but does not eliminate disagreement with humans or parsers.",
    },
  ],
  headlineFindings: [
    {
      metric: "Parser-only recall vs. human majority",
      value: "87.3%",
      detail: "95% Wilson CI [83.2, 90.5] on n=642 stratified rows",
    },
    {
      metric: "Judge-only recall vs. human majority",
      value: "27.8%",
      detail: "Frozen three-judge Llama panel at τ=0; CI [23.2, 33.0]",
    },
    {
      metric: "Parser-positive / judge-negative rows",
      value: "243",
      detail: "203 (83.5%) validated as violations by blinded human-majority labels",
    },
    {
      metric: "Parser ∨ judge fusion FNR",
      value: "7.6%",
      detail: "Illustrative fusion rule; trades recall for higher false-positive rate",
    },
  ],
  constructs: [
    "Authority conflict",
    "Prompt injection",
    "False-premise honesty",
    "Information control / redaction",
    "Autonomy / continuity framing",
    "Contained dual-use code",
    "Multilingual / framing robustness",
  ],
  sections: [
    { id: "introduction", title: "Introduction", summary: "Why scalar benchmarks hide cross-channel splits on identical transcripts." },
    { id: "framework", title: "Framework & CCD", summary: "Parser vs. judge channels, EII, and positioning vs. prior agent benchmarks." },
    { id: "dataset", title: "CCD-Bench protocol", summary: "Eighteen frozen suites, twelve checkpoints, anti-cherry-picking design." },
    { id: "results", title: "Empirical results", summary: "Parser–judge–human contingency tables on n=642 stratified rows." },
    { id: "robustness", title: "Judge ablations", summary: "Transcript-preserving rescoring with parser-aware and API judges." },
    { id: "reproducibility", title: "Reproducibility", summary: "Public harness, frozen JSON trees, and table-regeneration scripts." },
  ],
} as const;

export const researchCanonicalUrl = `${siteConfig.url}${researchPaper.path}`;
export const researchPdfUrl = `${siteConfig.url}${researchPaper.pdfPath}`;

export const researchMetaDescription =
  "Preprint by Nirav Rohra (UT Dallas): Measuring Cross-Channel Disagreement in LLM Evaluation. Introduces CCD-Bench—18 suites, 12 checkpoints, n=642 human-validated rows—showing parser-only flags align better with blinded humans than frozen Llama judges.";

export const researchOgDescription =
  "CCD-Bench diagnostic study: when LLM parsers, judges, and humans disagree on the same transcript—and why scalar fusion hides it. Full PDF, abstract, and reproducibility artifacts.";

// Import required libraries using ES6 imports
import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItFootnote from "markdown-it-footnote";
import markdownItLinkAttributes from "markdown-it-link-attributes";
import markdownItMultimdTable from "markdown-it-multimd-table";
import markdownItImplicitFigures from "markdown-it-implicit-figures";
import markdownItAttrs from "markdown-it-attrs";

// Markdown-it options
const mdOpts = {
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  quotes: "“”‘’",
};

// Markdown-it-anchor options
const mdAnchorOpts = {
  level: 2,
  slugify: (s) =>
    String(s)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-_]/g, ""),
};

// Markdown-it-link-attributes options
const mdLinkAttrOpts = {
  attrs: {
    target: "_blank",
  },
};

// Markdown-it-multimd-table options
const mdMultimdTableOpts = {
  multiline: true,
  enableRowspan: true,
};

const mdAttrs = {
  leftDelimiter: "{",
  rightDelimiter: "}",
  allowedAttributes: [],
};

const mdImplicitFigureOpts = {
  dataType: false, // <figure data-type="image">, default: false
  figcaption: false, // <figcaption>alternative text</figcaption>, default: false
  tabindex: true, // <figure tabindex="1+n">..., default: false
  link: false, // <a href="img.png"><img src="img.png"></a>, default: false
};

// Initialize MarkdownIt with plugins
export const initMarkdownIt = () =>
  new MarkdownIt(mdOpts)
    .use(markdownItAnchor, mdAnchorOpts)
    .use(markdownItFootnote)
    .use(markdownItLinkAttributes, mdLinkAttrOpts)
    .use(markdownItMultimdTable, mdMultimdTableOpts)
    .use(markdownItImplicitFigures, mdImplicitFigureOpts)
    .use(markdownItAttrs, mdAttrs);

// Create markdown utility functions
export const createMarkdownUtils = (md) => ({
  addImages(images, markdown) {
    return `${markdown}${images
      .map((i) => `\n\n[${i.title}]: ${i.src}`)
      .join("\n")}`;
  },
  parseHeadings(markdown) {
    return Array.from(
      new DOMParser()
        .parseFromString(md.render(markdown), "text/html")
        .querySelectorAll("h2")
    );
  },
  renderMarkdown(markdown) {
    // return md.render(markdown).replace(/#fn/g, window.location.href + "#fn");
    return md.render(markdown)
  },
});

import { marked } from "marked";

export function convertToDashedWords(text: string): string {
  // Convert text to lowercase
  let dashedText = text.toLowerCase();

  // Replace spaces with dashes
  dashedText = dashedText.replace(/\s+/g, '-');

  // Remove non-alphanumeric characters except dashes
  dashedText = dashedText.replace(/[^a-z0-9-]/g, '');

  // Remove dashes from the beginning or end of the string
  dashedText = dashedText.replace(/^-+|-+$/g, '');

  return dashedText;
}


export function convertToRegular(dashedText: string): string {
  // Replace dashes with spaces
  let text = dashedText.replace(/-/g, ' ');

  // Capitalize the first letter of each word
  text = text.replace(/\b\w/g, char => char.toUpperCase());

  return text;
}

export function renderTipsFromMarkdown(markdownContent: string): string {
  const tipRegex = /<Tip>(.+?)<\/Tip>/gs;
  let match;
  let renderedContent = markdownContent;

  while ((match = tipRegex.exec(markdownContent)) !== null) {
      const tipText = match[1];
      const tipComponent = `<Tip tipText="${tipText}"/>`;
      renderedContent = renderedContent.replace(match[0], tipComponent);
   
  }

  return renderedContent;
}

export function replaceTipTags(html:string) {
  // Define the regular expression pattern to match <Tip>...</Tip> tags
  const tipPattern = /<Tip>(.*?)<\/Tip>/g;

  // Replace each matched <Tip>...</Tip> tag with the desired format
  const replacedHtml = html.replace(tipPattern, '<Tip tipText={$1}/>');

  return replacedHtml;
}


   // Function to replace specified paragraph with Tip component
   export const replaceParagraphWithTip = (htmlContent:string) => {
    // Find the index of the paragraph to replace
    const startIndex = htmlContent.indexOf('<strong>Tip:</strong>');
    const endIndex = htmlContent.indexOf('</p>', startIndex);

    if (startIndex !== -1 && endIndex !== -1) {
        // Extract the paragraph to replace
        const paragraphToReplace = htmlContent.substring(startIndex, endIndex + 4);

        // Replace the paragraph with Tip component
        htmlContent = htmlContent.replace(paragraphToReplace, `<Tip tipText="${paragraphToReplace.slice(21, -4)}"/>`);
    }
    return htmlContent;
};

export  async function extractSummary(markdown: string): Promise<string> {
  // Create a temporary div element to parse the HTML
  const tempDiv = document.createElement('div');
  // Convert Markdown to HTML and assign it to the temporary div
  tempDiv.innerHTML = await marked(markdown);
  // Get all <h3> elements from the temporary div
  const h3Elements = tempDiv.querySelectorAll('h3');
  // Initialize an empty string to store the summary
  let summary = '';
  // Iterate over each <h3> element and append its outerHTML to the summary
  h3Elements.forEach((element) => {
      summary += element.outerHTML;
  });
  console.log(summary);
  // Return the summary
  return summary;
}
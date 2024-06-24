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

export  async function extractSummary(markdown: Promise<string> | string ): Promise<string> {
  // Create a temporary div element to parse the HTML
  const html = marked( await markdown);

  if (typeof window !== 'undefined') {
    // Client-side execution
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = await html;
    const h3Elements = tempDiv.querySelectorAll('h3');
    let summary = '';
    h3Elements.forEach((element) => {
      summary += element.outerHTML;
    });
    console.log(summary); 
    return summary;
  } else {
    // Server-side execution
    const h3Regex = /<h3[^>]*>(.*?)<\/h3>/g;
    let match;
    let summary = '';
    while ((match = h3Regex.exec(await html)) !== null) {
      summary += match[0];
    }
    return summary;
  }
}
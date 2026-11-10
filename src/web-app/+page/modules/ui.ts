// simple-node-mvc-starter-project ~~ MIT License
// Web Application - UI

// Imports
import { prettyPrintJson } from 'pretty-print-json';

// Modules
import { JsonData } from '../../../types/global.js';

const appUi = {
   // <main>
   //    ...
   //    <p>
   //       <cite><code></code> <output></output></cite>
   //    </p>
   //    <pre><output></output></pre>
   // </main>

   logApiCall(method: string, url: string): void {
      const citeVerbElem =       globalThis.document.querySelector('main >p >cite >code')!;
      const citeUrlElem =        globalThis.document.querySelector('main >p >cite >output')!;
      citeVerbElem.textContent = method;
      citeUrlElem.textContent =  url;
      },

   handleBooks(data: JsonData): Element {
      const outputElem =     globalThis.document.querySelector('main >pre >output')!;
      outputElem.innerHTML = prettyPrintJson.toHtml(data);
      dna.ui.fadeIn(outputElem, { duration: 1000, reset: true });
      return outputElem;
      },

   };

export { appUi };

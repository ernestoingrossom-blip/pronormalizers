Pronormalizers preview v3 - runtime fixed

Open index.html.

Validated:
- app.js JavaScript syntax: OK
- app.js runtime initialization: OK
- homepage renders 9 island cards: OK
- all 9 island routes render without JavaScript exceptions: OK

Runtime bug fixed:
A pair of raw LaTeX-style backticks in the original text (``pronormalizer'')
terminated a JavaScript template literal. The page therefore stopped before the
islands were inserted, leaving only the dark background. The quotation is now
stored safely as typographic quotation marks.

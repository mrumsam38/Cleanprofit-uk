// Run with: node tests/smoke.cjs
// Read-only checks. No network calls, database writes, or production deployment.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html', 'utf8');
const ids = ['dashboard','quote','customers','jobs','schedule','invoices','cloud','settings'];
for (const id of ids) {
  assert.match(html, new RegExp('<section\\b[^>]*\\bid=["\\x27]' + id + '["\\x27]'), 'Missing section: ' + id);
}
const scripts = [...html.matchAll(/<script\\b([^>]*)>([\\s\\S]*?)<\\/script>/gi)];
let parsed = 0;
for (const [, attributes, source] of scripts) {
  if (!source.trim() || /\\bsrc\\s*=/.test(attributes)) continue;
  if (/\\btype\\s*=\\s*["']module["']/.test(attributes)) continue;
  new vm.Script(source, { filename: 'inline-script-' + (++parsed) + '.js' });
}
assert.ok(parsed > 0, 'No inline JavaScript was checked');
assert.match(html, /MADE FOR CLEANING BUSINESSES/, 'Brand tagline missing');
assert.match(html, /function openInvoice\\(/, 'Invoice preview missing');
assert.match(html, /function renderSchedule\\(/, 'Schedule renderer missing');
assert.match(html, /function renderCustomers\\(/, 'Customer renderer missing');
console.log('PASS: ' + ids.length + ' sections, ' + parsed + ' inline scripts parsed; core entry points present.');

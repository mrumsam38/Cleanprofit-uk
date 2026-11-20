// Run with: node tests/smoke.cjs
// Non-destructive checks: no browser, network, credentials, or database access.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html', 'utf8');
const sections = ['dashboard','quote','customers','jobs','schedule','invoices','cloud','settings'];
for (const id of sections) {
  assert.ok(html.includes('id="' + id + '"'), 'Missing page: ' + id);
}
const startTag = '<script';
const endTag = '</script>';
let cursor = 0, parsed = 0;
while ((cursor = html.indexOf(startTag, cursor)) !== -1) {
  const tagEnd = html.indexOf('>', cursor);
  assert.ok(tagEnd !== -1, 'Unclosed script tag');
  const attributes = html.slice(cursor, tagEnd + 1);
  const end = html.indexOf(endTag, tagEnd + 1);
  assert.ok(end !== -1, 'Missing closing script tag');
  const code = html.slice(tagEnd + 1, end);
  if (!attributes.includes('src=') && !attributes.includes('type="module"') && code.trim()) {
    new vm.Script(code, {filename:'inline-' + (++parsed) + '.js'});
  }
  cursor = end + endTag.length;
}
assert.ok(parsed >= 1, 'No application scripts parsed');
for (const name of ['function openInvoice(', 'function renderSchedule(', 'function renderCustomers(', 'function renderInvoices(', 'function persist(']) {
  assert.ok(html.includes(name), 'Missing core feature: ' + name);
}
assert.ok(html.includes('MADE FOR CLEANING BUSINESSES'), 'Unexpected header change');
console.log('PASS: ' + sections.length + ' page anchors; ' + parsed + ' inline scripts syntax-checked; core functions found.');

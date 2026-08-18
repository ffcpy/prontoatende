import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renderiza a landing Pronto Atende", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt-BR"/i);
  assert.match(html, /Pronto Atende Vidas \| Acolhimento 24 horas/i);
  assert.match(html, /Sua jornada de/i);
  assert.match(html, /Iniciar conversa/i);
  assert.match(html, /100% confidencial/i);
  assert.match(html, /Como funciona/i);
  assert.match(html, /Chamar no WhatsApp/i);
  assert.match(html, /pronto-atende-vidas-logo\.png/i);
  assert.doesNotMatch(html, /favicon\.svg/i);
  assert.match(html, /https:\/\/wa\.me\/5511915107450/i);
  assert.match(html, /Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es\./i);
  assert.match(html, /SP e MG/i);
  assert.doesNotMatch(html, /RS e SC|Sul do Brasil/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

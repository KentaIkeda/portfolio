"use server";

import hljs from "highlight.js";
import * as cheerio from "cheerio";

export async function getParsedCode(content: string) {
  const $ = cheerio.load(content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  return $;
}

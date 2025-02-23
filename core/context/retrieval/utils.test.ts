// Generated by Continue
import { Chunk } from "../../index";

import { deduplicateChunks } from "./util";

describe("deduplicateChunks", () => {
  it("returns an empty array when given an empty array", () => {
    const chunks: Chunk[] = [];
    const result = deduplicateChunks(chunks);
    expect(result).toEqual([]);
  });

  it("returns the same array when given an array with no duplicates", () => {
    const chunks: Chunk[] = [
      {
        filepath: "file1.ts",
        startLine: 0,
        endLine: 1,
        content: "chunk 1",
        digest: "",
        index: 0,
      },
      {
        filepath: "file2.ts",
        startLine: 2,
        endLine: 3,
        content: "chunk 2",
        digest: "",
        index: 1,
      },
    ];
    const result = deduplicateChunks(chunks);
    expect(result).toEqual(chunks);
  });

  it("removes duplicate chunks", () => {
    const chunks: Chunk[] = [
      {
        filepath: "file1.ts",
        startLine: 0,
        endLine: 1,
        content: "chunk 1",
        digest: "",
        index: 0,
      },
      {
        filepath: "file1.ts",
        startLine: 0,
        endLine: 1,
        content: "chunk 1 duplicate",
        digest: "",
        index: 0,
      },
      {
        filepath: "file2.ts",
        startLine: 2,
        endLine: 3,
        content: "chunk 2",
        digest: "",
        index: 1,
      },
    ];
    const result = deduplicateChunks(chunks);

    expect(result).toEqual([
      {
        filepath: "file1.ts",
        startLine: 0,
        endLine: 1,
        content: "chunk 1",
        digest: "",
        index: 0,
      },
      {
        filepath: "file2.ts",
        startLine: 2,
        endLine: 3,
        content: "chunk 2",
        digest: "",
        index: 1,
      },
    ]);
  });

  it("handles chunks with different contents but the same file lines as duplicates", () => {
    const chunks: Chunk[] = [
      {
        filepath: "file1.ts",
        startLine: 0,
        endLine: 1,
        content: "chunk 1",
        digest: "",
        index: 0,
      },
      {
        filepath: "file1.ts",
        startLine: 0,
        endLine: 1,
        content: "chunk 1 different content",
        digest: "",
        index: 0,
      },
    ];
    const result = deduplicateChunks(chunks);

    expect(result).toEqual([
      {
        filepath: "file1.ts",
        startLine: 0,
        endLine: 1,
        content: "chunk 1",
        digest: "",
        index: 0,
      },
    ]);
  });
});

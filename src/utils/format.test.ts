import { test } from "@jest/globals";
import { Duration } from "@js-joda/core";
import { formatDataSize, formatDuration, GB, MB, TB } from "./format";

test("format duration", () => {
  const hour = Duration.ofHours(1);
  expect(formatDuration(hour.toMillis())).toStrictEqual({
    value: 1,
    unit: "hour",
  });
  const hours = Duration.ofHours(2);
  expect(formatDuration(hours.toMillis())).toStrictEqual({
    value: 2,
    unit: "hours",
  });
  const minute = Duration.ofMinutes(1);
  expect(formatDuration(minute.toMillis())).toStrictEqual({
    value: 1,
    unit: "minute",
  });
  const minutes = Duration.ofMinutes(2);
  expect(formatDuration(minutes.toMillis())).toStrictEqual({
    value: 2,
    unit: "minutes",
  });
  const second = Duration.ofSeconds(1);
  expect(formatDuration(second.toMillis())).toStrictEqual({
    value: 1,
    unit: "second",
  });
  const seconds = Duration.ofSeconds(2);
  expect(formatDuration(seconds.toMillis())).toStrictEqual({
    value: 2,
    unit: "seconds",
  });
  expect(formatDuration(2)).toStrictEqual({
    value: 2,
    unit: "ms",
  });
});

test("format data size", () => {
  expect(formatDataSize(1023)).toStrictEqual({ value: 1023, unit: "bytes" });
  expect(formatDataSize(1024)).toStrictEqual({ value: 1, unit: "Kb" });
  expect(formatDataSize(1025)).toStrictEqual({ value: 1, unit: "Kb" });
  expect(formatDataSize(2 * MB)).toStrictEqual({ value: 2, unit: "Mb" });
  expect(formatDataSize(3 * GB)).toStrictEqual({ value: 3, unit: "Gb" });
  expect(formatDataSize(2 * TB)).toStrictEqual({ value: 2, unit: "Tb" });
});

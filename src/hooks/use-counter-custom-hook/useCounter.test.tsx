import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { UseCounter } from "./useCounter";

describe("useCounter", () => {
  test("renders initial count", () => {
    const { result } = renderHook(UseCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept intialCount and render the same", () => {
    const { result } = renderHook(UseCounter, {
      initialProps: {
        initialCount: 99,
      },
    });
    expect(result.current.count).toBe(99);
  });

  test("should increment count", () => {
    const { result } = renderHook(UseCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrement count", () => {
    const { result } = renderHook(UseCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});

import { EVENTS } from "./consts.js";

export async function navigate(href, { protectedRoute = false } = {}) {
  if (protectedRoute) {
    const res = await fetch("http://localhost:3000/verification", {
      credentials: "include",
    });

    if (!res.ok) {
      window.history.pushState({}, "", "/login");
      window.dispatchEvent(new Event(EVENTS.PUSHSTATE));
      return;
    }
  }

  window.history.pushState({}, "", href);
  window.dispatchEvent(new Event(EVENTS.PUSHSTATE));
}

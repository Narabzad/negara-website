// Worker entry point: delegate every request to the static assets binding.
// All HTML/CSS/images live in the repo root and are served as-is.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};

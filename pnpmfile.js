module.exports = {
  hooks: {
    readPackage,
  },
};

const DEPS = ["dependencies", "devDependencies", "peerDependencies"];
const GLIMMER = [
  "babel-plugin-component-templates",
  "component",
  "core",
  "eslint-plugin",
  "modifier",
  "service",
];

const TS_VERSION = "3.9.1-rc";

function readPackage(pkg, context) {
  // context.log(pkg.name);
  for (let dep of DEPS) {
    if (pkg[dep].typescript) {
      pkg[dep].typescript = TS_VERSION;
    }

    if (pkg.peerDependenciesMeta && pkg.peerDependenciesMeta.typescript) {
      pkg.peerDependencies.typescript = TS_VERSION;
    }

    if (pkg[dep]["@glimmerx/*"]) {
      let version = pkg[dep]["@glimmerx/*"];
      delete pkg[dep]["@glimmerx/*"];

      for (let glimmer of GLIMMER) {
        pkg[dep][`@glimmerx/${glimmer}`] = version;
      }
    }
  }

  return pkg;
}

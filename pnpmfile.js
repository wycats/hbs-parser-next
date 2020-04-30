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

function readPackage(pkg, context) {
  // context.log(pkg.name);
  for (let dep of DEPS) {
    if (pkg[dep].typescript) {
      pkg[dep].typescript = "^3.9.1-rc";
    }

    if (pkg.peerDependenciesMeta && pkg.peerDependenciesMeta.typescript) {
      pkg.peerDependencies.typescript = "^3.9.1-rc";
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
